"use client";

interface ContactFormProps {
  subject?: string;
}

export default function ContactForm({ subject = "" }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const body = `Name: ${name}\nPhone: ${phone}\n\n${message}`;
    const mailtoLink = `mailto:contactus@liberators-alliance.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&to=${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs tracking-widest uppercase text-white/40 mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full bg-[#1A1A1A] border border-white/10 text-white px-4 py-3 text-sm font-light focus:outline-none focus:border-[#F6DB06]/50 transition-colors placeholder:text-white/20"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase text-white/40 mb-2">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full bg-[#1A1A1A] border border-white/10 text-white px-4 py-3 text-sm font-light focus:outline-none focus:border-[#F6DB06]/50 transition-colors placeholder:text-white/20"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase text-white/40 mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          className="w-full bg-[#1A1A1A] border border-white/10 text-white px-4 py-3 text-sm font-light focus:outline-none focus:border-[#F6DB06]/50 transition-colors placeholder:text-white/20"
          placeholder="Optional"
        />
      </div>
      <div>
        <label className="block text-xs tracking-widest uppercase text-white/40 mb-2">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full bg-[#1A1A1A] border border-white/10 text-white px-4 py-3 text-sm font-light focus:outline-none focus:border-[#F6DB06]/50 transition-colors placeholder:text-white/20 resize-none"
          placeholder="Tell us about yourself and why you want to get involved."
        />
      </div>
      <button
        type="submit"
        className="w-full px-8 py-4 bg-[#F6DB06] text-[#151515] font-display text-lg tracking-widest uppercase hover:bg-white transition-colors duration-200"
      >
        Submit
      </button>
    </form>
  );
}
