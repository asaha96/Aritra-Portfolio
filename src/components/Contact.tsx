import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import useReveal from "@/hooks/use-reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const revealRef = useReveal<HTMLDivElement>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        }
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24-48 hours."
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly at asaha96@gatech.edu",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/asaha96",
      description: "Open-source work and experiments",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aritra-saha-522373261/",
      description: "Research and professional updates",
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={revealRef} className="space-y-12 reveal">
          <div className="space-y-4 max-w-3xl">
            <p className="mono-label">Contact</p>
            <h2 className="section-title">Let's build something worth shipping.</h2>
            <p className="section-lede">
              If you are working on AI, data systems, or a product that needs a better interface,
              I would love to hear about it.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="mono-label text-[0.6rem]">Direct</p>
                    <a
                      href="mailto:asaha96@gatech.edu"
                      className="text-lg font-semibold text-foreground link-underline"
                    >
                      asaha96@gatech.edu
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  I respond to research collaborations within 24-48 hours and project inquiries in
                  1-2 business days.
                </p>
              </div>

              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-4 flex items-center gap-3 transition-colors hover:bg-card/95 hover:border-border/70"
                    aria-label={`Connect with Aritra on ${link.label}`}
                  >
                    <link.icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{link.label}</p>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="card p-6 space-y-4">
                <div className="space-y-2">
                  <p className="mono-label">Message</p>
                  <p className="text-sm text-muted-foreground">
                    Share the project, the goal, and where you need help.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-transparent border-border/70 focus-visible:ring-primary/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full bg-transparent border-border/70 focus-visible:ring-primary/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the system, the users, and the outcome you want."
                    rows={6}
                    className="w-full resize-none bg-transparent border-border/70 focus-visible:ring-primary/40"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
