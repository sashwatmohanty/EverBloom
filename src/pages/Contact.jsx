import { ContactHero, ContactInfo, ContactForm } from "../components/Contact";

export default function Contact() {
  return (
    <div>
      <ContactHero />
      <section className="section-padding py-16 lg:py-24 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
