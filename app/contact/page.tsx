'use client';

import ContactForm from '@/components/ContactForm';
import SectionShell from '@/components/SectionShell';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <section className="mt-6">
      <SectionShell title="contact.new">
        <div className="space-y-5">
          <h1 className="font-mono text-3xl text-slate-100">{t.contact.title}</h1>
          <p className="max-w-3xl text-slate-300">{t.contact.intro}</p>
          <ContactForm />
        </div>
      </SectionShell>
    </section>
  );
}
