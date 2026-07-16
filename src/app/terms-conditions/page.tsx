export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      {/* Banner */}
      <div className="bg-brand-navy py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-screen-xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Terms & Conditions</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </div>

      <div className="max-w-screen-md mx-auto px-4 py-16 w-full">
        <div className="bg-white p-8 md:p-12 rounded-3xl card-shadow border border-gray-100 prose prose-lg prose-emerald max-w-none">
          <div className="prose max-w-none font-body text-gray-700 space-y-6">
            <p><strong>Last Updated: July 2026</strong></p>
            <p>
              By accessing and using the website of Divine Public School, Dharampur (www.dpsdharampur.co.in), you agree to be bound by the following terms and conditions. Please read them carefully.
            </p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">1. Acceptance of Terms</h3>
            <p>By using this website, you confirm that you are at least 18 years of age, or that you are using this website under the supervision of a parent or guardian. Your continued use of this website constitutes your acceptance of these terms.</p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">2. Use of Website Content</h3>
            <p>All content on this website — including text, images, graphics and other materials — is the property of Divine Public School, Dharampur and is protected by applicable copyright laws. You may not reproduce, distribute or use any content from this website without prior written permission from the school.</p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">3. Admission & Enquiry Terms</h3>
            <p>Submitting an enquiry or application through this website does not guarantee admission. Admissions are subject to availability, eligibility criteria and the school's admission policies in force at the time of application. The school reserves the right to accept or decline any application.</p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">4. Accuracy of Information</h3>
            <p>While we make every effort to ensure that the information on this website is accurate and up to date, Divine Public School, Dharampur does not warrant the completeness or accuracy of any information published here. School fees, session dates, programmes and other details may be subject to change. Please contact the school directly for the most current information.</p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">5. Fee & Refund Policy</h3>
            <p>School fees, once paid, are generally non-refundable except as provided under applicable regulations or as specifically stated in the school's fee policy communicated at the time of admission. Any refund requests must be submitted in writing to the school office.</p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">6. Student Conduct</h3>
            <p>Students enrolled at Divine Public School, Dharampur are expected to abide by the school's code of conduct, which is communicated to parents at the time of admission. The school reserves the right to take appropriate disciplinary action in case of violation of the code of conduct.</p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">7. Limitation of Liability</h3>
            <p>Divine Public School, Dharampur shall not be liable for any indirect, incidental or consequential damages arising from the use of or inability to use this website or any information contained herein.</p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">8. Changes to Terms</h3>
            <p>The school reserves the right to modify these Terms and Conditions at any time. Any changes will be posted on this page. Your continued use of the website after any changes constitutes your acceptance of the revised terms.</p>

            <h3 className="text-xl font-bold text-brand-navy mt-8 mb-4">9. Contact Us</h3>
            <p>For any questions regarding these Terms & Conditions, please contact us:</p>
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
