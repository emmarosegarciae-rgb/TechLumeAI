"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type InquiryFormProps = {
  compact?: boolean;
};

export function InquiryForm({ compact = false }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[var(--radius)] border border-slate-200 bg-white p-5 shadow-luxe dark:border-slate-800 dark:bg-slate-950"
    >
      <div className={compact ? "grid gap-3" : "grid gap-4"}>
        <div className="grid gap-3 sm:grid-cols-2">
          <Input name="name" required placeholder="Full name" aria-label="Full name" />
          <Input
            name="email"
            type="email"
            required
            placeholder="Work email"
            aria-label="Work email"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Input name="company" placeholder="Company" aria-label="Company" />
          <select
            name="inquiry"
            className="focus-ring h-11 rounded-[var(--radius)] border border-slate-200 bg-white px-3 text-sm text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
            aria-label="Inquiry type"
            defaultValue="Guest post"
          >
            <option>Guest post</option>
            <option>Sponsored article</option>
            <option>Link insertion</option>
            <option>Display ads</option>
            <option>Editorial tip</option>
            <option>General inquiry</option>
          </select>
        </div>
        <Textarea
          name="message"
          required
          placeholder="Tell us about your campaign, story, product, or question."
          aria-label="Message"
          className={compact ? "min-h-28" : undefined}
        />
        <Button type="submit" variant="secondary">
          <Send className="size-4" aria-hidden="true" />
          Send inquiry
        </Button>
      </div>
      {submitted ? (
        <p className="mt-3 text-sm font-semibold text-green-600">
          Inquiry captured for the demo workflow.
        </p>
      ) : null}
    </form>
  );
}
