import { useState } from "react"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormSubject } from "@/hooks/useFormSubject";
import { FormSuccess } from "@/components/FormSuccess"; 

export const OneTimeForm = () => {
  const [isSuccess, setIsSuccess] = useState(false); 
  const { dynamicSubject, handleNameChange } = useFormSubject("One-Time Consultation");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    // Create the search params manually to ensure Netlify reads the "form-name" correctly
    const formData = new FormData(form);
    const data = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      data.append(key, value as string);
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
    })
      .then((res) => {
        if (res.ok) {
          setIsSuccess(true);
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch((error) => console.error("Netlify Submission Error:", error));
  };

  if (isSuccess) {
    return (
      <FormSuccess 
        title="Session Requested!" 
        message="Your strategy session request has been received. We look forward to helping you refine your path and answer your critical admissions questions."
        onReset={() => setIsSuccess(false)} // Pass the reset handler clearly
      />
    );
  }

  return (
    <form 
      name="OneTime" 
      method="POST" 
      data-netlify="true" 
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4 p-2 bg-transparent rounded-2xl"
    >
      <input type="hidden" name="form-name" value="OneTime" />
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="subject" value={dynamicSubject} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Input 
          name="name" 
          placeholder="Full Name" 
          required 
          onChange={handleNameChange}
          className="border-primary/10 focus-visible:ring-gold rounded-xl h-12"
        />
        <Input 
          name="grade" 
          placeholder="Current Grade Level" 
          required 
          className="border-primary/10 focus-visible:ring-gold rounded-xl h-12"
        />
      </div>
      
      <Input 
        name="email" 
        type="email" 
        placeholder="Email Address" 
        required 
        className="border-primary/10 focus-visible:ring-gold rounded-xl h-12"
        title="Please enter a valid email address (e.g., name@example.com)"
      />
      
      <select 
        name="primary-goal" 
        required
        className="w-full h-12 px-3 rounded-xl border border-primary/10 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-gold appearance-none cursor-pointer"
      >
        <option value="">What is your primary goal for this session?</option>
        <option value="college-list">College List Audit</option>
        <option value="extracurriculars">Extracurricular Strategy</option>
        <option value="major-selection">Choosing a Major</option>
        <option value="general-checkup">General Strategy Check-up</option>
        <option value="other">Other</option>
      </select>

      <Textarea 
        name="questions" 
        placeholder="What are the top 2 questions you want answered in this 90-minute session?" 
        className="min-h-[150px] border-primary/10 focus-visible:ring-gold rounded-xl p-4 resize-none"
        required 
      />
      
      <div className="flex justify-center pt-4 pb-8">
        <Button 
          type="submit" 
          className="w-2/3 bg-gold text-white hover:bg-primary hover:text-gold font-bold py-7 rounded-xl transition-all active:scale-[0.98] shadow-lg text-base"
        >
          Request a Session
        </Button>
      </div>
    </form>
  );
};
