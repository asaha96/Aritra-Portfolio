import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
  const contactLinks = [{
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/asaha96',
    description: 'View my code and open source contributions'
  }, {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aritra-saha-522373261/',
    description: 'Connect professionally and see my experience'
  }];
  return <section id="contact" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Get In Touch</h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating on AI, data systems, or educational technology? 
              I'd love to hear about your project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Send a Message</h3>
                <p className="text-muted-foreground">
                  Use the form below to get in touch. I typically respond within 24-48 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your full name" className="w-full" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className="w-full" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Tell me about your project, research, or collaboration opportunity..." rows={6} className="w-full resize-none" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full btn-hero">
                  {isSubmitting ? <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </> : <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>}
                </Button>

                <div className="text-xs text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <p>
                      Your information is secure and will never be shared. 
                      I respond to all legitimate inquiries and collaborate on projects that align with my interests in HCI, AI, and data systems.
                    </p>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Email */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Direct Contact</h3>
                <div className="flex items-center space-x-3 p-4 bg-card border border-border rounded-lg">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <a href="mailto:asaha94@gatech.edu" className="text-primary hover:text-primary-dark transition-colors">asaha96@gatech.edu</a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Connect Online</h3>
                <div className="space-y-3">
                  {contactLinks.map((link, index) => <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-200 card-hover" aria-label={`Connect with Aritra on ${link.label}`}>
                      <link.icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-card-foreground">{link.label}</p>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                    </a>)}
                </div>
              </div>

              {/* Response Info */}
              <div className="bg-accent rounded-lg p-4">
                <h4 className="font-semibold text-accent-foreground mb-2">Response Times</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>• Research collaborations: 24-48 hours</p>
                  <p>• Project inquiries: 1-2 business days</p>
                  <p>• General questions: Within a week</p>
                </div>
              </div>

              {/* Current Status */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-card-foreground mb-2">Current Availability</h4>
                <p className="text-sm text-muted-foreground">
                  Open to research collaborations, educational technology projects, 
                  and consulting opportunities that align with my expertise in HCI, AI, and data systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;