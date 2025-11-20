import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const phoneNumber = "962798239913";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-elegant bg-whatsapp hover:bg-whatsapp/90 text-white animate-float"
        asChild
      >
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
      
      <Button
        size="icon"
        className="h-14 w-14 rounded-full shadow-elegant bg-primary hover:bg-primary/90 text-primary-foreground"
        asChild
      >
        <a
          href={`tel:+${phoneNumber}`}
          aria-label="Call us"
        >
          <Phone className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingButtons;
