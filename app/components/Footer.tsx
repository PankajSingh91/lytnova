import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20 py-10">
      <div className="container text-center space-y-4">

        <h3 className="text-lg font-semibold text-primary">Lytnova</h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          Smart & scalable IT solutions empowering startups to grow and build with confidence.
        </p>

        <div className="flex justify-center gap-6 text-sm">
          <Link href="/services" className="text-gray-600 hover:text-primary">Services</Link>
          <Link href="/about" className="text-gray-600 hover:text-primary">About</Link>
          <Link href="/clientele" className="text-gray-600 hover:text-primary">Clientele</Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
        </div>

        
      </div>
    </footer>
  );
}
