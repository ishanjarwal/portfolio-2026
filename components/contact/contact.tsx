"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  AtSign,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GLASS_EFFECTS, socialLinks } from "@/lib/constants";
import { FormInput } from "../shared/form-input";
import { FormTextarea } from "../shared/form-textarea";
import { Button } from "../ui/button";
import { contactSchema, type ContactFormData } from "./validation";
import Link from "next/link";
import { toast } from "sonner";

const ContactInfoCard = ({
  icon: Icon,
  title,
  content,
  href,
}: {
  icon: React.ElementType;
  title: string;
  content: string;
  href?: string;
}) => {
  const CardContent = (
    <div
      className={cn(
        "p-6 rounded-2xl flex items-center gap-6 transition-all duration-300 group hover:bg-primary/5",
        GLASS_EFFECTS,
      )}
    >
      <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm font-medium text-foreground/50 uppercase tracking-wider">
          {title}
        </p>
        <p className="md:text-lg text-sm text-wrap font-bold text-foreground group-hover:text-primary transition-colors">
          {content}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} target={href.startsWith("http") ? "_blank" : undefined}>
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message", {
        description: "Please try again later or contact me via email directly.",
      });
    }
  };

  return (
    <section className="min-h-screen py-24 px-4 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto space-y-16">
        {/* Heading Pattern */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <h2 className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-linear-to-b from-foreground/50 to-foreground/15 select-none uppercase tracking-tighter">
              Get In Touch
            </h2>
            <span className="absolute text-3xl md:text-4xl font-bold text-foreground tracking-tight text-shadow-md uppercase">
              Get In Touch
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            className="h-1.5 w-24 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Let&apos;s Connect
              </h3>
              <p className="text-foreground/75 leading-relaxed max-w-md">
                I&apos;m always open to discussing new projects, creative ideas
                or opportunities to be part of your visions.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <ContactInfoCard
                icon={Mail}
                title="Email"
                content="ishan.professional01@gmail.com"
                href="mailto:ishan.professional01@gmail.com"
              />
              <ContactInfoCard
                icon={Phone}
                title="Phone"
                content="+91 9116080979"
                href="tel:+919116080979"
              />
              <ContactInfoCard
                icon={MapPin}
                title="Location"
                content="Jaipur, India"
              />
            </div>

            <div className="pt-8">
              <p className="text-sm font-semibold text-foreground/50 uppercase tracking-widest mb-4">
                Social Profiles
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    className={cn(
                      "p-4 rounded-xl text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all duration-300",
                      GLASS_EFFECTS,
                    )}
                  >
                    <span className="w-6 h-6 block [&>svg]:w-full [&>svg]:h-full">
                      {social.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div id="contact" className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              className={cn("p-8 md:p-10 rounded-3xl space-y-8", GLASS_EFFECTS)}
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">
                  Send a Message
                </h3>
                <p className="text-sm text-foreground/75">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <FormInput
                  label="Full Name"
                  placeholder="Your full name"
                  icon={<User className="w-4 h-4" />}
                  {...register("fullName")}
                  error={errors.fullName?.message}
                />
                <FormInput
                  label="Email Address"
                  placeholder="your.email@example.com"
                  icon={<AtSign className="w-4 h-4" />}
                  {...register("email")}
                  error={errors.email?.message}
                />
                <FormTextarea
                  label="Message"
                  placeholder="Tell me about your project or just say hello..."
                  icon={<MessageSquare className="w-4 h-4" />}
                  {...register("message")}
                  error={errors.message?.message}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-lg shadow-primary/20 transition-all duration-300 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
