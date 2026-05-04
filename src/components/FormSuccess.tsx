import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface FormSuccessProps {
  title: string;
  message: string;
  onReset: () => void;
}

export const FormSuccess = ({ title, message, onReset }: FormSuccessProps) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="text-center p-10 bg-white rounded-3xl shadow-2xl max-w-xl mx-auto animate-in fade-in zoom-in duration-500 border border-gray-100">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-50 p-3">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
          </div>
        </div>
        <h3 className="text-3xl font-display font-bold text-[#002147] mb-4">
          {title}
        </h3>
        {/* Quotes removed from around {message} below */}
        <p className="text-gray-600 text-lg italic mb-10 leading-relaxed">
          {message}
        </p>
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            asChild
            className="border-[#002147] text-[#002147] hover:bg-gray-50 h-12 px-10 rounded-xl font-bold shadow-sm transition-all active:scale-[0.98]"
          >
            <a href="/">Return Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
};
