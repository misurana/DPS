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
          <div className="prose max-w-none font-body text-gray-700 space-y-6">
            <p><strong>Last Updated: July 2026</strong></p>
            <p>
              Divine Public School, Dharampur ("we", "our" or "the school") is committed to protecting the privacy of every visitor to our website and every family that entrusts us with their child's education. This Privacy Policy explains how we collect, use and safeguard your information.
            </p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">1. Information We Collect</h3>
            <p>We may collect personal information that you voluntarily provide when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit an admission enquiry or application form</li>
              <li>Contact us via phone, email or the contact form on our website</li>
              <li>Enroll your child in our school</li>
            </ul>
            <p>This information may include your name, address, phone number, email address, and your child's academic details.</p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">2. How We Use Your Information</h3>
            <p>We use the information collected to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and respond to admission enquiries</li>
              <li>Communicate important school information with parents and guardians</li>
              <li>Maintain student records as required by educational regulations</li>
              <li>Improve our school's services and website</li>
            </ul>
            <p>We do not sell, trade or rent your personal information to any third party.</p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">3. Photographs and Media</h3>
            <p>We may take photographs or videos of school events and activities. These may be used on our website, social media pages or promotional materials. Parents who do not wish their child's image to be used may inform us in writing at the time of admission or at any time thereafter.</p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">4. Cookies & Website Analytics</h3>
            <p>Our website may use cookies and Google Analytics to understand how visitors use our site. This helps us improve the website experience. No personally identifiable information is collected through analytics. You may disable cookies through your browser settings.</p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">5. Data Security</h3>
            <p>We take reasonable steps to protect your personal information from unauthorised access, loss or misuse. All student and family data is stored securely and accessible only to authorised school staff.</p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">6. Third-Party Links</h3>
            <p>Our website may contain links to external websites such as social media platforms. We are not responsible for the privacy practices of those external sites and encourage you to read their privacy policies.</p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">7. Your Rights</h3>
            <p>You have the right to request access to the personal information we hold about you or your child, to request corrections, or to ask us to delete information where appropriate. To make such a request, please contact us directly.</p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">8. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-none space-y-2 font-medium">
              <li>Divine Public School, Dharampur</li>
              <li>Subathu Road, Dharampur, Tehsil- Kasauli, District Solan (HP) - 173209</li>
              <li>Phone: 78071 35120 / 94185 26764</li>
              <li>Email: divine_public@yahoo.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
