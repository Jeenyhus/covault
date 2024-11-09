import Header from './components/Header';
import Footer from './components/Footer';

// Import newly created components
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="bg-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Covault</h1>
          <p className="mt-4 text-lg md:text-xl">
            Fast, reliable, and transparent loan services at your fingertips.
          </p>
          <Link
            href="/eligibility"
            className="mt-8 inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            Check Loan Eligibility
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-600">Why Choose Covault?</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
              <img src="/file.svg" alt="Eligibility Check" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Eligibility Check</h3>
              <p>Find out instantly if you qualify for a loan with our simple eligibility checker.</p>
              <Link href="/eligibility" className="text-blue-600 hover:underline">Check Eligibility</Link>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
              <img src="/globe.svg" alt="Loan Calculator" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Loan Calculator</h3>
              <p>Use our calculator to get a clear picture of your repayment plans.</p>
              <Link href="/calculator" className="text-blue-600 hover:underline">Calculate Repayments</Link>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg shadow-md">
              <img src="/window.svg" alt="Instant Application" className="w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Instant Application</h3>
              <p>Apply in minutes and track the status of your application in real-time.</p>
              <Link href="/apply" className="text-blue-600 hover:underline">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="apply" className="bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Get Started Today</h2>
          <p className="mt-4 text-lg">Ready to secure the loan you need? Start your application now.</p>
          <Link
            href="/apply"
            className="mt-8 inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            Apply Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
