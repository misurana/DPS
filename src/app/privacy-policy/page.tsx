export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Banner */}
      <div className="bg-brand-navy py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Privacy Policy</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </div>

      <div className="max-w-screen-md mx-auto px-4 py-16 w-full">
        <div className="bg-white p-8 md:p-12 rounded-3xl card-shadow border border-gray-100 prose prose-lg prose-emerald max-w-none">
          <p className="text-gray-600 mb-8 font-body">
            At Divine Public School, Dharampur, we are committed to protecting the privacy and security of our students, parents, and staff. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy font-display mt-8 mb-4">1. Information Collection</h2>
          <p className="text-gray-700 font-body mb-6">
            We collect personal information such as names, contact details, dates of birth, academic records, and medical information only when necessary for educational, administrative, and safety purposes.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy font-display mt-8 mb-4">2. Use of Information</h2>
          <p className="text-gray-700 font-body mb-6">
            The information collected is used solely for school administration, academic tracking, communication with parents/guardians, and ensuring the health and safety of our students. We do not sell or rent personal data to third parties.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy font-display mt-8 mb-4">3. Data Security</h2>
          <p className="text-gray-700 font-body mb-6">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy font-display mt-8 mb-4">4. Media and Photography</h2>
          <p className="text-gray-700 font-body mb-6">
            The school occasionally takes photographs and videos of students during school events and activities. These may be used for school publications, our official website, or social media pages. Parents who do not wish their child's image to be used must inform the school administration in writing.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy font-display mt-8 mb-4">5. Contact Us</h2>
          <p className="text-gray-700 font-body mb-6">
            If you have any questions or concerns about this Privacy Policy, please contact us at divine_public@yahoo.com or call us at +91 78071 35120.
          </p>
        </div>
      </div>
    </div>
  )
}
