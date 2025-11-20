import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";

interface Comment {
  id: number;
  name: string;
  email: string;
  comment: string;
  date: string;
}

const CommentSection = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      name: language === "en" ? "Ahmed Ali" : "أحمد علي",
      email: "ahmed@example.com",
      comment: language === "en" 
        ? "Great article! Very informative and helpful for understanding tax regulations."
        : "مقال رائع! مفيد جداً لفهم الأنظمة الضريبية.",
      date: "2024-01-20"
    },
    {
      id: 2,
      name: language === "en" ? "Sarah Mohammed" : "سارة محمد",
      email: "sarah@example.com",
      comment: language === "en"
        ? "Thank you for sharing this valuable information. Looking forward to more articles."
        : "شكراً على مشاركة هذه المعلومات القيمة. نتطلع للمزيد من المقالات.",
      date: "2024-01-19"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !comment.trim()) {
      toast({
        title: language === "en" ? "Error" : "خطأ",
        description: language === "en" ? "Please fill in all fields" : "الرجاء ملء جميع الحقول",
        variant: "destructive"
      });
      return;
    }

    const newComment: Comment = {
      id: comments.length + 1,
      name: name.trim(),
      email: email.trim(),
      comment: comment.trim(),
      date: new Date().toISOString().split('T')[0]
    };

    setComments([newComment, ...comments]);
    setName("");
    setEmail("");
    setComment("");

    toast({
      title: language === "en" ? "Success" : "نجح",
      description: language === "en" ? "Your comment has been added" : "تمت إضافة تعليقك بنجاح"
    });
  };

  return (
    <div className="space-y-8" style={{ fontFamily: language === "ar" ? "Tajawal" : "Poppins" }}>
      {/* Comments List */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-primary" />
          {language === "en" ? `Comments (${comments.length})` : `التعليقات (${comments.length})`}
        </h3>
        
        {comments.map((comment) => (
          <Card key={comment.id} className="animate-fade-in">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {comment.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{comment.name}</h4>
                    <span className="text-sm text-muted-foreground">{comment.date}</span>
                  </div>
                  <p className="text-muted-foreground">{comment.comment}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Comment Form */}
      <Card>
        <CardHeader>
          <h3 className="text-xl font-bold">
            {language === "en" ? "Leave a Comment" : "اترك تعليقاً"}
          </h3>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === "en" ? "Name" : "الاسم"}
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === "en" ? "Your name" : "اسمك"}
                  maxLength={100}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === "en" ? "Email" : "البريد الإلكتروني"}
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === "en" ? "your@email.com" : "your@email.com"}
                  maxLength={255}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                {language === "en" ? "Comment" : "التعليق"}
              </label>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={language === "en" ? "Share your thoughts..." : "شارك أفكارك..."}
                rows={4}
                maxLength={1000}
              />
            </div>
            <Button type="submit" className="w-full md:w-auto">
              {language === "en" ? "Post Comment" : "نشر التعليق"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommentSection;
