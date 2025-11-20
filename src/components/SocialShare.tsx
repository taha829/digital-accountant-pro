import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Share2, Link as LinkIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SocialShareProps {
  title: string;
  url: string;
}

const SocialShare = ({ title, url }: SocialShareProps) => {
  const { language } = useLanguage();
  const { toast } = useToast();

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: language === "en" ? "Link copied!" : "تم نسخ الرابط!",
      description: language === "en" ? "Article link copied to clipboard" : "تم نسخ رابط المقال إلى الحافظة"
    });
  };

  return (
    <div className="flex items-center gap-4 flex-wrap">
      <span className="text-sm font-semibold text-muted-foreground">
        {language === "en" ? "Share:" : "شارك:"}
      </span>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.open(shareLinks.facebook, '_blank')}
          className="hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors"
        >
          <Facebook className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.open(shareLinks.twitter, '_blank')}
          className="hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors"
        >
          <Twitter className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.open(shareLinks.linkedin, '_blank')}
          className="hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors"
        >
          <Linkedin className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.open(shareLinks.whatsapp, '_blank')}
          className="hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors"
        >
          <Share2 className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={copyToClipboard}
          className="hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <LinkIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;
