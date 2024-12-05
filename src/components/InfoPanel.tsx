import { Phone, Mail } from 'lucide-react';
import pic from "../profilePic.jpg"

export default function InfoPanel() {
  return (
    <>
      <div className="hidden md:flex bg-gray-100 p-6 flex-col h-screen sticky top-0 overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center space-y-4">
          <img
            src={pic}
            alt="Profile"
            className="rounded-full w-24 h-24"
          />
          <h1 className="text-xl font-bold text-blue-900 text-center">
            If you're ready to upskill, click the button below and complete your application
          </h1>
          <button 
            className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            onClick={() => window.open('https://apply.nulearn.in/e-mba-iim-shillong', '_blank')}
          >
            Apply Now
          </button>
          <p className="text-red-600 text-sm">
            Application closing soon
          </p>
          <h2 className="text-lg font-bold text-blue-900 text-center">
            Unsure? Got Questions?
          </h2>
          <p className="text-gray-600 text-sm text-center">
            Get in touch with our team and receive an in-depth understanding of the program and how it can help in proliferating your career prospects
          </p>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">Phone</h3>
              <p className="text-gray-600 text-sm">
                <a href="tel:+918777087836" className="hover:underline">+918777087836</a>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">Email</h3>
              <p className="text-gray-600 text-sm">
                <a href="mailto:emba.iimshillong@nulearn.in" className="hover:underline">emba.iimshillong@nulearn.in</a>
              </p>
            </div>
          </div>
          <h2 className="text-md font-bold text-blue-900 text-center">
            Want to schedule a session with one of our counsellors? Block your calendar now!
          </h2>
          <button 
            className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors text-md"
            onClick={() => window.open('https://calendly.com/emba-iimshillong-nulearn', '_blank')}
          >
            Talk to an Expert
          </button>
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-100 p-4 flex flex-col items-center space-y-2 shadow-lg">
        <h1 className="text-sm font-bold text-blue-900 text-center">
          Ready to upskill? Apply now!
        </h1>
        <button 
          className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
          onClick={() => window.open('https://apply.nulearn.in/e-mba-iim-shillong', '_blank')}
        >
          Apply Now
        </button>
        <p className="text-red-600 text-xs">
          Application closing soon
        </p>
        <button 
          className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
          onClick={() => window.open('https://calendly.com/emba-iimshillong-nulearn', '_blank')}
        >
          Talk to an Expert
        </button>
      </div>
    </>
  );
}