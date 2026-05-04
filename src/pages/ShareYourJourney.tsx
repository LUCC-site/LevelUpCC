import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ShareYourJourney() {
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // --- Custom Subject Line Logic ---
    const rawName = formData.get("full-name") as string;
    const userName = rawName && rawName.trim() !== "" ? rawName.trim() : "No Initials";
    
    // Use .set to ensure it overrides the hidden input value
    formData.set("subject", `LUCC Journey Submission: ${userName}`);

    fetch("/", { 
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then((res) => {
        if (res.ok) {
          setStatus("SUCCESS");
          form.reset();
        } else {
          setStatus("ERROR");
        }
      })
      .catch(() => {
        setStatus("ERROR");
      });
  };

  if (status === "SUCCESS") {
    return (
      <div className="min-h-screen bg-[#002147] flex items-center justify-center px-6">
        <div className="text-center p-12 bg-white rounded-2xl shadow-2xl max-w-2xl mx-auto animate-in fade-in zoom-in duration-500">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-20 h-20 text-green-500" />
          </div>
          <h3 className="text-3xl font-display font-bold text-[#002147] mb-4">Success Story Received!</h3>
          <p className="text-gray-600 text-lg italic mb-8">
            "Thank you for helping other students level up their futures by sharing your authentic voice."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                asChild
                className="border-[#002147] text-[#002147] hover:bg-gray-50 h-12 px-8"
              >
                <a href="/">Return Home</a>
              </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <nav className="p-6">
        <a href="/" className="inline-flex items-center text-[#002147] font-semibold hover:text-[#D4AF37] transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </a>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pb-24 pt-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[#002147] mb-4">
            Share Your <span className="text-[#D4AF37]">Journey</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your journey inspires the next generation of scholars. By sharing your experience, 
            you help others navigate the path to <span className="font-bold text-[#002147]">holistic admissions</span> success.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="h-2 bg-[#D4AF37]" />
          
          <form 
            name="ShareYourJourney" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit} 
            className="p-8 md:p-12 space-y-10"
          >
            <input type="hidden" name="form-name" value="ShareYourJourney" />
            <input type="hidden" name="subject" />
            <p className="hidden">
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <Label className="text-[#002147] font-bold text-lg">I am a:</Label>
                <div className="flex gap-6 mt-2">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="identity" 
                      value="Student" 
                      defaultChecked 
                      className="w-5 h-5 accent-[#002147] cursor-pointer"
                    />
                    <span className="font-medium text-gray-700 group-hover:text-[#002147]">Student</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="identity" 
                      value="Parent" 
                      className="w-5 h-5 accent-[#002147] cursor-pointer"
                    />
                    <span className="font-medium text-gray-700 group-hover:text-[#002147]">Parent</span>
                  </label>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="full-name" className="text-[#002147] font-bold text-lg">Your Initials (Optional)</Label>
                <Input 
                  id="full-name" 
                  name="full-name" 
                  placeholder="e.g. JD" 
                  className="border-gray-200 focus:ring-[#002147] h-14 bg-gray-50/50" 
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="university-accepted" className="text-[#002147] font-bold text-lg">Accepted To</Label>
                <Input 
                  id="university-accepted" 
                  name="university-accepted" 
                  placeholder="e.g. Stanford University" 
                  required 
                  className="border-gray-200 focus:ring-[#002147] h-14 bg-gray-50/50" 
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="story-details" className="text-[#002147] font-bold text-lg">Share your success story</Label>
              <Textarea 
                id="story-details" 
                name="story-details" 
                placeholder="Tell us about your challenges, your triumphs, and how Level Up helped you find your voice..." 
                className="min-h-[250px] border-gray-200 focus:ring-[#002147] bg-gray-50/50 resize-none p-6 text-lg leading-relaxed" 
                required 
              />
            </div>

            <div className="pt-4">
              <Button 
                type="submit" 
                disabled={status === "SENDING"}
                className="w-full bg-[#D4AF37] hover:bg-[#C5A028] text-[#002147] font-bold py-8 text-xl transition-all shadow-lg rounded-xl"
              >
                {status === "SENDING" ? "Processing..." : "Submit My Story"}
              </Button>

              {status === "ERROR" && (
                <p className="text-red-500 text-sm text-center font-medium mt-4">
                  Oops! Something went wrong. Please check your connection and try again.
                </p>
              )}
            </div>
          </form>
        </div>

        <footer className="mt-12 text-center text-gray-400 text-sm">
          © 2026 Level Up College Counseling. Your data is handled securely via Netlify.
        </footer>
      </main>
    </div>
  );
}
