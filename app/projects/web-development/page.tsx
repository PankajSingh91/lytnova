import Link from "next/link";

export default function WebDevelopmentProjects() {
  return (
    <main className="container py-20">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        Web Development Projects
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-center mt-3 max-w-2xl mx-auto">
        A showcase of websites and web platforms we’ve built for startups and businesses.
      </p>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 mt-14">

        {/* Project Card */}
        <div className="card">
          <h3 className="text-lg font-semibold">YOSOCARE</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            E-commerce website offering handcrafted, eco-friendly personal care and gifting products.
          </p>
            <Link href="https://www.yosocare.com/" className="mt-4 text-primary underline inline-block">
              Visit Website
            </Link>
        </div>

        

      </div>

      {/* Back CTA */}
      <div className="text-center mt-16">
        <Link href="/services" className="btn-outline">
          ← Back to Services
        </Link>
      </div>

    </main>
  );
}
