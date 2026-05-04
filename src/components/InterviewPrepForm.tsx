import { useState } from "react"; // Added for success state
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// Customizing subject line in the email 
import { useFormSubject } from "@/hooks/useFormSubject";
import { FormSuccess } from "@/components/FormSuccess"; // Import the central component

export const InterviewPrepForm = () => {
  const [isSuccess, setIsSuccess] = useState(false); // Added
  // Initialize dynamic subject line logic
  const { dynamicSubject, handleNameChange } = useFormSubject("Interview Prep Request");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then((res) => {
        if (res.ok) setIsSuccess(true);
      })
      .catch((error) => console.error(error));
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center">
        <FormSuccess 
          title="Prep Request Received!" 
          message="Your interview preparation request is in. We'll help you refine your narrative so you can walk into your interview with elite-level confidence."
        />
        <Button asChild className="mt-6 bg-gold text-white hover:bg-primary font-bold py-6 px-8 rounded-xl shadow-lg transition-all active:scale-[0.98]">
          <a href="/">Return to Home Page</a>
        </Button>
      </div>
    );
  }

  return (
    <form 
      name="InterviewPrep" 
      method="POST" 
      data-netlify="true" 
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit} // Added handler
      className="space-y-4 p-2 bg-transparent rounded-2xl"
    >
      {/* REQUIRED FOR NETLIFY: Identifies the form name */}
      <input type="hidden" name="form-name" value="InterviewPrep" />
      
      {/* REQUIRED FOR NETLIFY: Anti-spam honeypot */}
      <input type="hidden" name="bot-field" />
      
      {/* Subject line field now uses the dynamic value */}
      <input type="hidden" name="subject" value={dynamicSubject} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Input 
          name="name" 
          placeholder="Full Name" 
          required 
          onChange={handleNameChange} // Triggers the name update for the subject
          className="border-primary/10 focus-visible:ring-gold rounded-xl h-12"
        />
        <Input 
          name="email" 
          type="email" 
          placeholder="Email Address" 
          required 
          className="border-primary/10 focus-visible:ring-gold rounded-xl h-12"
          title="Please enter a valid email address."
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Input 
          name="phone" 
          type="tel" 
          placeholder="Phone Number (Optional)" 
          pattern="[0-9]{10}"
          title="Please enter a 10-digit phone number (e.g. 5105561343)"
          className="border-primary/10 focus-visible:ring-gold rounded-xl h-12"
        />
        <Input 
          name="interview-date" 
          type="date" 
          required 
          className="border-primary/10 focus-visible:ring-gold rounded-xl h-12 cursor-pointer"
        />
      </div>

      <div className="space-y-1">
        <label className="text-[10px] font-bold text-primary uppercase tracking-widest opacity-60 ml-1">
          Interview Details
        </label>
        <Input 
          name="next-interview-with-who" 
          placeholder="Who is your next interview with? (School/Program)" 
          required 
          className="border-primary/10 focus-visible:ring-gold rounded-xl h-12"
        />
      </div>

      <Textarea 
        name="details" 
        placeholder="Specific concerns? (e.g. Yale, M&T, BS/MD programs)" 
        className="min-h-[120px] border-primary/10 focus-visible:ring-gold rounded-xl p-4 resize-none"
      />
      
      <div className="flex justify-center pt-4 pb-8">
        <Button 
          type="submit" 
          className="w-2/3 bg-gold text-white hover:bg-primary hover:text-gold font-bold py-7 text-lg rounded-xl transition-all active:scale-[0.98] shadow-lg"
        >
          Schedule Prep
        </Button>
      </div>
    </form>
  );
};
