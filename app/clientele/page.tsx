import Link from "next/link";

export default function Clientele() {
  return (
    <main className="container py-20">

      {/* PAGE TITLE */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        Our Clientele
      </h1>
      <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
        We take pride in working with startups and helping shape ideas into successful digital products.
      </p>

      {/* CLIENT SHOWCASE */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">

        {/* WebeFit Client */}
        <div className="card">
          <h2 className="text-xl font-semibold">WebeFit App</h2>
          <p className="text-gray-600 mt-1">
            Client: <span className="font-medium">Vaibhav Pahuja</span>
          </p>
          <p className="text-gray-600 mt-3 leading-relaxed">
            A fitness & transformation application designed for personal workout by hiring trainers.
          </p>

          <Link
            href="#"
            className="inline-block mt-4 text-primary underline"
          >
            (Demo / Case Study coming soon)
          </Link>
        </div>

      </div>

      {/* STARTUP CONNECT SECTION */}
      <section className="mt-24 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Startup Connect
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Have an idea and want to collaborate, find co-founders, or explore partnership opportunities?
          Share your startup idea and connect with us.
        </p>

        {/* Idea Submission Box */}
        <div className="max-w-3xl mx-auto mt-10 card">
          <h3 className="text-lg font-semibold">Share Your Idea</h3>

          <textarea
            placeholder="Describe your idea in short..."
            className="w-full mt-4 p-3 border rounded-lg outline-none focus:border-primary"
            rows={5}
          />

          <p className="text-gray-600 mt-4">Send to:</p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">

            {/* Founder 1 WhatsApp */}
            <a
              href="https://wa.me/917738383111?text=Hello%2C%20I%20would%20like%20to%20share%20my%20startup%20idea."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary min-w-[220px] text-center"
            >
              WhatsApp - Kshitij Gupta
            </a>

            {/* Founder 2 WhatsApp */}
            <a
              href="https://wa.me/917208517891?text=Hello%2C%20I%20would%20like%20to%20share%20my%20startup%20idea."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline min-w-[220px] text-center"
            >
              WhatsApp - Pankaj Singh
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}
