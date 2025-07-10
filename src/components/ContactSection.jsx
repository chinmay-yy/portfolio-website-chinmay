import {
  Mail,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Instagram,
  Phone,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent("New Contact Form Message from " + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:chinmaysaini01@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.open(mailtoLink, '_blank');

    // Show success message
    setTimeout(() => {
      toast({
        title: "Email client opened!",
        description: "Please send the email from your email client. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "chinmaysaini01@gmail.com",
      href: "mailto:chinmaysaini01@gmail.com",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Uttarakhand, India",
      href: "https://www.google.com/maps/place/Uttarakhand/@30.0667,77.3714,7z/data=!3m1!4b1!4m6!3m5!1s0x390929041170b819:0x6818765457768d97!8m2!3d30.0667!4d77.3714!16zL20vMDE3N21r?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D",
      color: "bg-green-500/10 text-green-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 1234567890",
      href: "tel:+911234567890",
      color: "bg-purple-500/10 text-purple-500",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/chinmay-saini-ab8407292/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      href: "#https://x.com/saini_chinmay",
      label: "Twitter",
      color: "hover:text-sky-500",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      
      color: "hover:text-pink-500",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative ">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Let's Work <span className="text-primary">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'm always excited to hear about new opportunities and interesting challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">
                Get In Touch
              </h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 card-hover"
                >
                  <div className="flex items-center space-x-4">
                    <div className={cn("p-2.5 rounded-lg flex-shrink-0", item.color)}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1 text-sm">
                        {item.title}
                      </h4>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 group-hover:text-primary text-sm break-all"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-xl font-semibold mb-6 text-foreground text-center">
                Follow Me
              </h4>
              <div className="flex space-x-4 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 card-hover",
                      social.color
                    )}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-xl">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Send a Message
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    I'll get back to you within 24 hours
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200 placeholder:text-muted-foreground/60"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200 placeholder:text-muted-foreground/60"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200 placeholder:text-muted-foreground/60 resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2",
                    isSubmitting
                      ? "bg-muted text-muted-foreground cursor-not-allowed"
                      : "my-button hover:shadow-lg hover:shadow-primary/25"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
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