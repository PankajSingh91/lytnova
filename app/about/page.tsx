export default function About() {
  return (
    <main className="container py-20">

      {/* PAGE TITLE */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        About Us
      </h1>
      <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
        Lytnova exists to support startups in transforming ideas into real, scalable digital products.
      </p>

      {/* MISSION & VISION */}
      <section className="grid gap-6 md:grid-cols-2 mt-14">
        <div className="card">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            To make quality technology accessible to every startup,
            enabling founders to build smart, scalable digital systems
            without high development or consultancy costs.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold">Our Vision</h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            To become the most trusted digital innovation partner that
            empowers new beginnings and helps startups grow through
            thoughtful, meaningful technology.
          </p>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-center">Founders</h2>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          {/* Founder 1 */}
          <div className="card text-center">
            <div className="text-lg font-semibold">Kshitij Gupta</div>
            <div className="text-sm text-gray-600">Co-founder & Product Lead</div>
            <p className="text-gray-600 mt-2">
              Focused on product design, user experience & startup growth.
              Believes in solutions that are simple, beautiful, and human-centered.
            </p>
          </div>
          
          {/* Founder 2 */}
          <div className="card text-center">
            <div className="text-lg font-semibold">Pankaj Singh</div>
            <div className="text-sm text-gray-600">Co-founder & Tech Lead</div>
            <p className="text-gray-600 mt-2">
              Full Stack, Blockchain, Cybersecurity & AI/ML Developer. Passionate about building
              problem-solving products delivering efficient solutions.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
