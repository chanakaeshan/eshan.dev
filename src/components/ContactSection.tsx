import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chanueshan291@gmail.com",
      href: "mailto:chanueshan291@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 71 606 6120",
      href: "tel:+94716066120"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Colombo, Sri Lanka",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/chanakaeshan",
      username: "@chanakaeshan"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/chanakaeshann",
      username: "Chanaka Eshan"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/chanakaeshan",
      username: "@chanakaeshan"
    }
  ];

  return (
    <section id="contact" className="container px-4 py-20 relative bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            {/* <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">{social.label}</p>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {social.username}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div> */}

            {/* Availability Status */}
            <div className="glass rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <h3 className="text-xl font-semibold">Currently Available</h3>
              </div>
              <p className="text-muted-foreground">
                I'm currently open to new opportunities and freelance projects. 
                Feel free to reach out to discuss your next project!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-white/10 focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-black/50 border-white/10 focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-white/10 focus:border-primary"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-black/50 border-white/10 focus:border-primary resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                
                <Button type="submit" className="w-full button-gradient group">
                  <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Response Time Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              <span className="text-primary font-medium">Quick Response:</span> I typically respond to messages within 24 hours. 
              For urgent matters, feel free to reach out directly via Phone (WhatsApp) or LinkedIn.
            </p>
          </div>

          <div>
                    <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. A typical website project takes 2-4 weeks, while larger applications can take 2-3 months."
              },
              {
                question: "Do you work with teams or just individuals?",
                answer: "I work with both! I enjoy collaborating with teams and can adapt to existing workflows, or work directly with individual clients."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I specialize in React, TypeScript, Node.js, and modern web technologies. I'm always learning and adapting to new tools."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! I offer maintenance packages and ongoing support to ensure your project continues to perform optimally after launch."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-minimal">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;