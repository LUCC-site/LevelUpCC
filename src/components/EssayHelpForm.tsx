import { useState } from "react"; // Added for success state
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormSubject } from "@/hooks/useFormSubject"; 
import { FormSuccess } from "@/components/FormSuccess"; 

export const EssayHelpForm = () => {
  const [isSuccess, setIsSuccess] = useState(false); // Added
  const { dynamicSubject, handleNameChange } = useFormSubject("Essay Help");

  // Added handleSubmit to trigger the success card
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

  // Switch to the Fancy Info card on success
  if (isSuccess) {
    return (
      <div className="flex flex-col items-center">
        <FormSuccess 
          title="Audit Request Received!" 
          message="Your path to a compelling narrative starts here. We've received your draft details and will be in touch shortly."
        />
        <Button asChild className="mt-6 bg-gold text-white hover:bg-primary font-bold py-6 px-8 rounded-xl shadow-lg transition-all active:scale-[0.98]">
          <a href="/">Return to Home Page</a>
        </Button>
      </div>
    );
  }

  return (
    <form 
      name="EssayHelp" 
      method="POST" 
      data-netlify="true" 
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit} // Added handler
      className="space-y-4 p-2 bg-transparent rounded-2xl"
    >
      <input type="hidden" name="form-name" value="EssayHelp" />
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
          name="email" 
          type="email" 
          placeholder="Email Address" 
          required 
          className="border-primary/10 focus-visible:ring-gold rounded-xl h-12"
        />
      </div>
      
      <Input 
        name="target-schools" 
        placeholder="Top 3 Target Schools (e.g. Stanford, UCLA, NYU)" 
        className="border-primary/10 focus-visible:ring-gold rounded-xl h-12"
      />
      
      <select 
        name="draft-status" 
        required
        className="w-full h-12 px-3 rounded-xl border border-primary/10 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-gold appearance-none cursor-pointer"
      >
        <option value="">Current Draft Status</option>
        <option value="not-started">Haven't started yet</option>
        <option value="brainstorming">Brainstorming/Outline stage</option>
        <option value="rough-draft">Rough draft completed</option>
        <option value="polishing">Final polishing needed</option>
      </select>

      <Textarea 
        name="message" 
        placeholder="Tell us about the specific essay you need help with..." 
        className="min-h-[200px] border-primary/10 focus-visible:ring-gold resize-none rounded-xl p-4"
        required
      />
      
      <div className="flex justify-center py-4">
        <Button 
          type="submit" 
          className="w-2/3 bg-gold text-white hover:bg-primary hover:text-gold font-bold py-7 rounded-xl transition-all active:scale-[0.98] shadow-lg text-lg"
        >
          Request Essay Audit
        </Button>
      </div>
    </form>
  );
};
