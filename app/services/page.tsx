import Link from "next/link";

export default function Services() {
  return (
    <main className="container py-20">

      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        Our Services
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-center mt-3 max-w-2xl mx-auto">
        We provide full-stack IT solutions tailored to startups - from initial idea to deployment.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mt-14">

        {/* Web Development */}
        <div id="web" className="card flex flex-col">
          <h3 className="text-lg font-semibold">Web Development</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 flex-1">
            Full-stack website & web-app development with domain, hosting & scalability options.
          </p>
          <Link href="#" className="mt-4 text-primary underline">
            View Previous Projects
          </Link>
        </div>

        {/* Android App Dev */}
        <div id="android" className="card flex flex-col">
          <h3 className="text-lg font-semibold">Android App Development</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 flex-1">
            Custom Android applications, API integration & Play Store deployment.
          </p>
          <Link href="#" className="mt-4 text-primary underline">
            View Previous Projects
          </Link>
        </div>

        {/* AI/ML */}
        <div id="aiml" className="card flex flex-col">
          <h3 className="text-lg font-semibold">AI / ML Applications</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 flex-1">
            Predictive analytics, recommendation systems, automation & CRM intelligence.
          </p>
          <Link href="#" className="mt-4 text-primary underline">
            View Previous Projects
          </Link>
        </div>

        {/* Blockchain */}
        <div id="blockchain" className="card flex flex-col">
          <h3 className="text-lg font-semibold">Blockchain Solutions</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 flex-1">
            Smart contracts, dApps, supply-chain transparency & secure transaction systems.
          </p>
          <Link href="#" className="mt-4 text-primary underline">
            View Previous Projects
          </Link>
        </div>

        {/* Cybersecurity */}
        <div id="security" className="card flex flex-col">
          <h3 className="text-lg font-semibold">Cybersecurity</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 flex-1">
            Authentication, secure channels, encryption, threat monitoring & backups.
          </p>
          <Link href="#" className="mt-4 text-primary underline">
            View Previous Projects
          </Link>
        </div>

        {/* Design & Branding */}
        <div id="design" className="card flex flex-col">
          <h3 className="text-lg font-semibold">Design & Branding</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 flex-1">
            Logo design, brand identity, UI/UX design & marketing creatives.
          </p>
          <Link href="#" className="mt-4 text-primary underline">
            View Previous Projects
          </Link>
        </div>

        {/* 🎯 NEW — Digital Marketing & SEO */}
        <div id="marketing" className="card flex flex-col">
          <h3 className="text-lg font-semibold">Digital Marketing & SEO Solutions</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 flex-1">
            SEO optimization, brand identity growth, content marketing, social media management & targeted digital outreach.
          </p>
          <Link href="#" className="mt-4 text-primary underline">
            View Previous Projects
          </Link>
        </div>

      </div>

      {/* CTA */}
      <div className="text-center mt-16 bg-soft-gradient rounded-2xl py-12 px-6">
        <h3 className="text-xl md:text-2xl font-semibold">Have a project like this?</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Tell us what you want to build — we’ll guide you.
        </p>
        <Link href="/contact" className="btn-primary mt-6 inline-block">
          Request a Meeting
        </Link>
      </div>

    </main>
  );
}
