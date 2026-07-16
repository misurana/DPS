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
          <p className="text-gray-600 mb-8 font-body">
            Welcome to the official website of Divine Public School, Dharampur. By accessing or using our website and services, you agree to comply with and be bound by the following Terms and Conditions.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy font-display mt-8 mb-4">1. Admissions and Enrollment</h2>
          <p className="text-gray-700 font-body mb-6">
            Admission to Divine Public School is subject to seat availability, successful completion of the admission process, and fulfillment of all criteria as set by the school management. The school reserves the right to deny admission without providing a reason.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy font-display mt-8 mb-4">2. Fee Payment</h2>
          <p className="text-gray-700 font-body mb-6">
            All school fees must be paid on or before the due dates specified by the administration. Late payments may attract a penalty. Fees once paid are non-refundable except under specific circumstances outlined in the school's fee policy.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy font-display mt-8 mb-4">3. Code of Conduct</h2>
          <p className="text-gray-700 font-body mb-6">
            Students are expected to maintain a high standard of discipline, respect towards staff and peers, and adhere to the school's dress code. Any violation of the school rules may result in disciplinary action, including suspension or expulsion.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy font-display mt-8 mb-4">4. Website Usage</h2>
          <p className="text-gray-700 font-body mb-6">
            The content on this website is for general information purposes only. While we strive to keep the information up-to-date and correct, we make no representations or warranties of any kind about the completeness or accuracy of the information.
          </p>

          <h2 className="text-2xl font-bold text-brand-navy font-display mt-8 mb-4">5. Amendments</h2>
          <p className="text-gray-700 font-body mb-6">
            Divine Public School reserves the right to modify these terms and conditions, school policies, and fee structures at any time. Changes will be communicated through official channels or updated on this website.
          </p>
        </div>
      </div>
    </div>
  )
}
