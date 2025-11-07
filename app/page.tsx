import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.jpg";


export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-soft-gradient pointer-events-none" />

        <div className="container py-24 text-center relative">
          <Image src={logo} alt="Lytnova Logo" width={100} className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Empowering Startups with<br />Smart & Scalable IT Solutions
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We help startups build websites, apps, and digital systems that support growth,
            innovation, and long-term success without the heavy costs.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/services" className="btn-primary">Explore Services</Link>
            <Link href="/contact" className="btn-outline">Request a Meeting</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE LYTNOVA */}
      <section className="container py-20 grid gap-6 md:grid-cols-3">
        <div className="card">
          <h3 className="text-lg font-semibold">Cost-Effective Solutions</h3>
          <p className="text-gray-600 mt-2">
            Startup-friendly pricing without compromising on quality or scalability.
          </p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold">Full-Stack Development</h3>
          <p className="text-gray-600 mt-2">
            We handle everything from design → development → deployment → maintenance.
          </p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold">Scalable by Design</h3>
          <p className="text-gray-600 mt-2">
            Start small and evolve your product into a complete platform or web app later.
          </p>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">What We Do</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["Web Development", "/services#web"],
            ["Android App Development", "/services#android"],
            ["AI / ML Applications", "/services#aiml"],
            ["Blockchain Solutions", "/services#blockchain"],
            ["Cybersecurity", "/services#security"],
            ["Design & Branding", "/services#design"],
          ].map(([label, href], i) => (
            <Link key={i} href={href} className="card hover:shadow-md transition text-center">
              <div className="text-lg font-semibold">{label}</div>
              <div className="text-sm text-primary mt-3">Learn More →</div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link href="/services" className="btn-outline">View Full Services</Link>
        </div>
      </section>

    </main>
  );
}
