import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useFormSubject } from "@/hooks/useFormSubject";

export const IntakeForm = () => {
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const { dynamicSubject, handleNameChange } = useFormSubject("Free Consultation Request");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      body.append(key, value as string);
    });
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    })
      .then((res) => {
        if (res.ok) {
          setStatus("SUCCESS");
          form.reset();
        } else { 
          setStatus("ERROR"); 
        }
      })
      .catch(() => setStatus("ERROR"));
  };

  if (status === "SUCCESS") {
    return (
      <section className="py-8 bg-surface">
        <div className="text-center p-10 bg-white rounded-2xl shadow-xl max-w-2xl mx-auto border-b-4 border-gold">
          <h3 className="text-2xl font-bold text-primary">Form Submitted!</h3>
          <p className="mt-2 text-muted-foreground">We will reach out to schedule your free consultation shortly.</p>
          <Button asChild className="mt-6 bg-gold text-primary hover:bg-gold/90 font-bold">
            <a href="/">Return to Home Page</a>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation" className="py-8 bg-surface">
      <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white rounded-2xl shadow-xl border-t-4 border-primary">
        <h2 className="text-3xl font-bold text-primary mb-1">Book Your Free Consultation</h2>
        <p className="text-muted-foreground mb-8">Tell us a bit about yourself to get started.</p>

        <form 
          name="IntakeForm" 
          method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          {/* Netlify Hidden Fields */}
          <input type="hidden" name="form-name" value="IntakeForm" />
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="subject" value={dynamicSubject} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Graduation Year */}
            <div className="space-y-2 text-left">
              <Label htmlFor="gradYear" className="font-semibold text-base">High School Graduation Year</Label>
              <Input 
                id="gradYear" 
                name="gradYear" 
                type="number"
                min="2026" 
                max="2099"
                placeholder="e.g. 2026" 
                required 
                className="h-10 border-primary/10" 
              />
            </div>

            {/* Personal Info */}
            <div className="space-y-2 text-left">
              <Label htmlFor="name" className="font-semibold text-base">Full Name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                required 
                onChange={handleNameChange}
                className="h-10 border-primary/10" 
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2 text-left">
              <Label htmlFor="email" className="font-semibold text-base">Email Address</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="john@example.com" 
                required 
                className="h-10 border-primary/10" 
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2 text-left">
              <Label htmlFor="phone" className="font-semibold text-base">Phone Number (Optional)</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel"
                placeholder="(555) 000-0000" 
                className="h-10 border-primary/10" 
              />
            </div>
          </div>

          {/* Message Box */}
          <div className="space-y-2 text-left">
            <Label htmlFor="message" className="font-semibold text-base">How can we help?</Label>
            <p className="text-[10px] text-gold font-bold mb-1 uppercase tracking-wider">
              Note: Hourly consultations and essay review packages are also available.
            </p>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Tell us about your goals..." 
              className="min-h-[120px] p-3 text-base border-primary/10" 
              required 
            />
          </div>

          <Button 
            type="submit" 
            disabled={status === "SENDING"}
            className="w-full bg-gold hover:bg-gold/90 text-primary font-bold py-6 text-lg transition-transform hover:scale-[1.01]"
          >
            {status === "SENDING" ? "Sending..." : "Request Consultation"}
          </Button>

          {status === "ERROR" && (
            <p className="text-destructive text-sm font-medium text-center">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
