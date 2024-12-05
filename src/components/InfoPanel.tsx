import { Phone, Mail } from 'lucide-react';
import pic from "../profilePic.jpg"

export default function InfoPanel() {
  return (
    <div className="bg-gray-100 p-6 flex flex-col h-screen sticky top-0 overflow-auto">
      <div className="flex-1 flex flex-col items-center justify-center">
        <img
          src={pic}
          alt="Profile"
          className="rounded-full mb-4 w-24 h-24"
        />
        <h1 className="text-xl font-bold text-blue-900 mb-2 text-center">
          If you're ready to upskill, click the button below and complete your application
        </h1>
        <button 
          className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors text-sm mb-4"
          onClick={() => window.open('https://apply.nulearn.in/e-mba-iim-shillong', '_blank')}
        >
          Apply Now
        </button>
        <p className="text-red-600 text-sm mb-4">
          Application closing soon
        </p>
        <h2 className="text-lg font-bold text-blue-900 mb-2 text-center">
          Unsure? Got Questions?
        </h2>
        <p className="text-gray-600 mb-4 text-sm text-center">
          Get in touch with our team and receive an in-depth understanding of the program and how it can help in proliferating your career prospects
        </p>
        <div className="flex items-start gap-3 mb-4">
          <Phone className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">Phone</h3>
            <p className="text-gray-600 text-sm">+918777087836</p>
          </div>
        </div>
        <div className="flex items-start gap-3 mb-4">
          <Mail className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">Email</h3>
            <p className="text-gray-600 text-sm">emba.iimshillong@nulearn.in</p>
          </div>
        </div>
        <h2 className="text-lg font-bold text-blue-900 mb-2 text-center">
          Want to schedule a session with one of our counsellors? Block your calendar now!
        </h2>
        <button 
          className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
          onClick={() => window.open('https://calendly.com/emba-iimshillong-nulearn', '_blank')}
        >
          Talk to an Expert
        </button>
      </div>
    </div>
  );
}