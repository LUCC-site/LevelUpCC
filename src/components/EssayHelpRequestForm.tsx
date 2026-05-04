import { useState } from "react"; // Added for success state
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormSubject } from "@/hooks/useFormSubject";
import { FormSuccess } from "@/components/FormSuccess"; // Import the central component

export const EssayHelpRequest = () => {
  const [isSuccess, setIsSuccess] = useState(false); // Added
  const { dynamicSubject, handleNameChange } = useFormSubject("Essay Help Request");

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
          title="Request Received!" 
          message="Thank you for reaching out. We've received your request for essay assistance and will get back to you to help you level up your narrative."
        />
        <Button asChild className="mt-6 bg-primary text-white hover:bg-primary/95 hover:text-gold font-bold py-6 px-8 rounded-xl shadow-lg transition-all active:scale-[0.98]">
          <a href="/">Return to Home Page</a>
        </Button>
      </div>
    );
  }

  return (
    <form 
      name="EssayHelpRequest" 
      method="POST" 
      data-netlify="true" 
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit} // Added handler
      className="space-y-4 w-full text-primary"
    >
      <input type="hidden" name="form-name" value="EssayHelpRequest" />
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="subject" value={dynamicSubject} />
      
      <div className="grid grid-cols-1 gap-4">
        <Input 
          name="full-name" 
          placeholder="Full Name" 
          required 
          onChange={handleNameChange}
          className="bg-white border-none shadow-sm focus-visible:ring-gold rounded-xl h-12" 
        />
        <Input 
          name="email" 
          type="email" 
          placeholder="Email Address" 
          required 
          className="bg-white border-none shadow-sm focus-visible:ring-gold rounded-xl h-12"
        />
        <Input 
          name="phone" 
          type="tel" 
          placeholder="Phone Number" 
          pattern="[0-9]{10}"
          title="Please enter a 10-digit phone number"
          required 
          className="bg-white border-none shadow-sm focus-visible:ring-gold rounded-xl h-12"
        />
      </div>
      
      <Textarea 
        name="looking-for" 
        placeholder="What are you looking for? (e.g., target schools, specific goals, or brainstorming needs)" 
        required 
        className="min-h-[200px] w-full bg-white border-none shadow-sm focus-visible:ring-gold p-4 rounded-xl resize-none"
      />
      
      <div className="flex justify-center py-4">
        <Button 
          type="submit" 
          className="w-2/3 bg-primary text-white hover:bg-primary/95 hover:text-gold font-bold py-7 text-lg rounded-xl transition-all active:scale-[0.98] shadow-lg"
        >
          Send Request
        </Button>
      </div>
    </form>
  );
};
