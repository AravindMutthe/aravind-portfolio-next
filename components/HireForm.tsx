"use client";

import { useState } from "react";
import {
  Button,
  Select,
  SelectItem,
  TextArea,
  TextInput,
  Theme,
  InlineLoading,
} from "@carbon/react";
import { CONTACT, mailLink, smsLink, waLink } from "@/lib/site";

const BUDGETS = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000+",
  "Full-time role (salary)",
];

export default function HireForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<null | { emailOk: boolean; summary: string }>(null);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email.trim()) || !message.trim()) {
      setError("Please add your name, a valid email, and a few words about the project.");
      return;
    }

    const summary =
      `New project enquiry — aravind-mutte site\n` +
      `Name: ${name.trim()}\nEmail: ${email.trim()}` +
      (phone.trim() ? `\nPhone: ${phone.trim()}` : "") +
      (budget ? `\nBudget: ${budget}` : "") +
      `\n\n${message.trim()}`;

    setSending(true);
    let emailOk = false;
    try {
      const r = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          budget,
          message: message.trim(),
          _subject: `New project enquiry from ${name.trim()}`,
          _template: "table",
        }),
      });
      emailOk = r.ok;
    } catch {
      emailOk = false;
    }

    // WhatsApp with everything pre-filled — one tap sends it to his phone
    window.open(waLink(summary), "_blank");
    setSending(false);
    setDone({ emailOk, summary });
    setName("");
    setEmail("");
    setPhone("");
    setBudget("");
    setMessage("");
  };

  return (
    <Theme theme="g100">
      <div className="carbon-form glass relative overflow-hidden rounded-[28px] p-[clamp(30px,5vw,56px)]">
        <div
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{ background: "linear-gradient(135deg,#4d7cfe,#8b5cf6 48%,#ec4899)" }}
        />
        <form onSubmit={submit}>
          <div className="grid gap-5 md:grid-cols-2">
            <TextInput
              id="cf-name"
              labelText="Your name"
              placeholder="Jane Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextInput
              id="cf-email"
              labelText="Your email"
              placeholder="jane@company.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <TextInput
              id="cf-phone"
              labelText="Phone / WhatsApp"
              placeholder="+91 …"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Select
              id="cf-budget"
              labelText="Project budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <SelectItem value="" text="Select a range…" />
              {BUDGETS.map((b) => (
                <SelectItem key={b} value={b} text={b} />
              ))}
            </Select>
          </div>
          <TextArea
            id="cf-msg"
            labelText="Project details"
            placeholder="What are you building? Timeline? Current stack?…"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          {error && (
            <p className="mb-4 rounded-2xl border border-[#ec4899]/40 bg-[#ec4899]/10 px-5 py-4 text-[15px] text-[#ffd9e9]">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={sending}
            className="w-full max-w-none justify-center"
            size="lg"
          >
            {sending ? <InlineLoading description="Sending…" /> : "Send Enquiry →"}
          </Button>
          <p className="mt-3 text-center text-[12.5px] text-[#5c5c78]">
            Sends to my email instantly, then opens WhatsApp with your message ready to send.
          </p>
        </form>

        {done && (
          <div className="mt-6 rounded-2xl border border-[#34f5a5]/30 bg-[#34f5a5]/[.07] px-6 py-5 text-[15px] leading-relaxed text-[#d8ffe9]">
            <strong className="text-white">Done!</strong>{" "}
            {done.emailOk
              ? "Your enquiry is on its way to my email, and "
              : ""}
            WhatsApp opened with everything pre-filled — just press send there and it lands
            straight on my phone.
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={waLink(done.summary)}
                target="_blank"
                rel="noopener"
                className="btn-grad inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold"
              >
                WhatsApp
              </a>
              <a
                href={smsLink(done.summary)}
                className="btn-ghost-neon inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold"
              >
                SMS
              </a>
              <a
                href={mailLink(`Project enquiry — ${CONTACT.name}`, done.summary)}
                className="btn-ghost-neon inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold"
              >
                Email app
              </a>
            </div>
          </div>
        )}
      </div>
    </Theme>
  );
}
