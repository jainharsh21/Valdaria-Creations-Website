"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { CONTACT_INFO } from "@/lib/constants";
import {
  slideLeft,
  slideRight,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/animations";

const contactItems = [
  { icon: MapPin, label: "Address", value: CONTACT_INFO.address, href: null },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  { icon: Clock, label: "Hours", value: CONTACT_INFO.hours, href: null },
];

interface FormField {
  id: string;
  label: string;
  type: string;
  required: boolean;
  isTextarea?: boolean;
}

const fields: FormField[] = [
  { id: "name", label: "Your Name", type: "text", required: true },
  { id: "email", label: "Email Address", type: "email", required: true },
  { id: "company", label: "Company Name", type: "text", required: false },
  { id: "phone", label: "Phone Number", type: "tel", required: true },
  {
    id: "message",
    label: "Your Message",
    type: "text",
    required: true,
    isTextarea: true,
  },
];

function FloatingInput({
  field,
}: {
  field: FormField;
}) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const isUp = focused || hasValue;

  return (
    <div className="relative pt-5">
      <motion.label
        htmlFor={field.id}
        animate={{
          y: isUp ? -20 : 0,
          fontSize: isUp ? "0.65rem" : "0.875rem",
          color: isUp ? "var(--color-gold)" : "var(--color-fog)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-0 top-5 font-medium tracking-wide pointer-events-none origin-left"
        style={{ transformOrigin: "left center" }}
      >
        {field.label}
        {field.required && (
          <span className="ml-0.5 text-[var(--color-gold)]">*</span>
        )}
      </motion.label>

      {field.isTextarea ? (
        <textarea
          id={field.id}
          name={field.id}
          required={field.required}
          rows={4}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setHasValue(e.target.value.length > 0);
          }}
          className="w-full bg-transparent border-0 border-b text-[var(--color-navy)] text-body-md resize-none pb-2 pt-1 focus:outline-none transition-colors duration-200"
          style={{
            borderBottomColor: focused
              ? "var(--color-gold)"
              : "var(--color-border)",
          }}
        />
      ) : (
        <input
          id={field.id}
          name={field.id}
          type={field.type}
          required={field.required}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setHasValue(e.target.value.length > 0);
          }}
          className="w-full bg-transparent border-0 border-b text-[var(--color-navy)] text-body-md pb-2 pt-1 focus:outline-none transition-colors duration-200"
          style={{
            borderBottomColor: focused
              ? "var(--color-gold)"
              : "var(--color-border)",
          }}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    // Simulate async send
    setTimeout(() => setStatus("success"), 1600);
  }

  return (
    <section id="contact" className="section-pad bg-[var(--color-parchment)]">
      <div className="container-site">
        <SectionHeader
          subtitle="Get In Touch"
          title="Contact Us"
          description="Ready to elevate your collection? Reach out to our wholesale team — we'd love to discuss how Valdaria Creation can serve your business."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">
          {/* Info column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <motion.div
                key={label}
                variants={staggerItem}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[var(--color-ink)] flex items-center justify-center">
                  <Icon size={16} className="text-[var(--color-gold)]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-[var(--color-fog)] mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-body-md text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors duration-200"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-body-md text-[var(--color-navy)]">
                      {value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form column */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FloatingInput field={fields[0]} />
                <FloatingInput field={fields[1]} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FloatingInput field={fields[2]} />
                <FloatingInput field={fields[3]} />
              </div>
              <FloatingInput field={fields[4]} />

              <div className="pt-4">
                <motion.button
                  type="submit"
                  disabled={status !== "idle"}
                  whileHover={status === "idle" ? { scale: 1.02 } : {}}
                  whileTap={status === "idle" ? { scale: 0.97 } : {}}
                  className="inline-flex items-center gap-3 px-10 py-4 text-[0.7rem] font-semibold tracking-widest uppercase rounded transition-all duration-300 focus-visible:outline-none disabled:cursor-not-allowed"
                  style={{
                    backgroundColor:
                      status === "success"
                        ? "var(--color-ink)"
                        : "var(--color-gold)",
                    color:
                      status === "success"
                        ? "white"
                        : "var(--color-ink)",
                  }}
                >
                  {status === "idle" && "Send Message"}
                  {status === "loading" && (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Sending…
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CheckCircle size={14} />
                      Message Sent
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
