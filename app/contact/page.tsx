export default function Contact() {
    return (
        <main className="container py-20">

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-semibold text-center">
                Contact Us
            </h1>
            <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">
                Get in touch to discuss your project, collaborate, or explore how we can help.
            </p>

            {/* Contact Info */}
            <div className="text-center mt-10 space-y-4">
                <p className="text-gray-700 text-lg">📧 Email: <span className="font-medium">lytnova20@gmail.com</span></p>

                <p className="text-gray-700 text-lg">
                    📞 Kshitij: <span className="font-medium">+91 7738383111</span>
                </p>

                <p className="text-gray-700 text-lg">
                    📞 Pankaj: <span className="font-medium">+91 7208517891</span>
                </p>

                {/* WhatsApp Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                    <a
                        href="https://wa.me/917738383111"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary min-w-[220px] text-center"
                    >
                        Chat with Kshitij
                    </a>

                    <a
                        href="https://wa.me/917208517891"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary min-w-[220px] text-center"
                    >
                        Chat with Pankaj
                    </a>
                </div>

            </div>

            {/* Microsoft Form Embed */}
            <div className="mt-16 max-w-3xl mx-auto">
                <iframe
                    src="https://forms.cloud.microsoft/r/GZhNV9efPt?embed=true"
                    width="100%"
                    height="650"
                    style={{ borderRadius: "12px", border: "1px solid #e5e7eb" }}
                ></iframe>
            </div>

        </main>
    );
}
