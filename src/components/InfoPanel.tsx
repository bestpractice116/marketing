import { Phone, Mail } from 'lucide-react';
import pic from "../logo.png"

export default function InfoPanel() {
  return (
    <>
      <div className="hidden md:flex bg-gray-100 p-6 flex-col h-screen sticky top-0 overflow-auto">
        <div className="flex-1 flex flex-col items-center justify-center space-y-4">
          <img
            src={pic}
            alt="Profile"
            className=" w-24 h-32"
          />
          <h1 className="text-md font-bold text-blue-900 ">
            If you're ready to upskill, click the button below and complete your application
          </h1>
          <button
            className="bg-[#036637] text-white px-4 py-2 rounded-lg hover:bg-[#036637] transition-colors text-base"
            onClick={() => window.open('https://apply.nulearn.in/e-mba-iim-shillong', '_blank')}
          >
            Apply Now
          </button>
          <p className="text-red-600 text-base">
            Application closing soon
          </p>
          <h2 className="text-lg font-bold text-blue-900">
            Unsure? Got Questions?
          </h2>
        <div className='bg-[#036637] text-white px-5 py-5 rounded-md '>
        <div className=" text-lg font-bold text-center ">
           Connect With Us
          </div>
          <div className="flex items-start gap-3  w-full mt-5">
            <Phone className="w-5 h-5 mt-1" />
            <div className=''>
              <h3 className="font-semibold  text-sm">Phone</h3>
              <p className=" text-sm">
                <a href="tel:+918777087836" className="hover:underline">+918777087836</a>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 w-full mt-5">
            <Mail className="w-5 h-5mt-1" />
            <div>
              <h3 className="font-semibold  text-sm">Email</h3>
              <p className=" text-sm">
                <a href="mailto:emba.iimshillong@nulearn.in" className="hover:underline">emba.iimshillong@nulearn.in</a>
              </p>
            </div>
          </div>
        </div>
          <h2 className="text-md font-bold text-blue-900 ">
            Want to schedule a session with one of our counsellors? Block your calendar now!
          </h2>
          <button
            className="bg-[#036637] text-white px-4 py-2 rounded-lg hover:bg-[#036637] transition-colors text-md"
            onClick={() => window.open('https://calendly.com/emba-iimshillong-nulearn', '_blank')}
          >
            Talk to an Expert
          </button>
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-3 flex flex-col space-y-2 shadow-lg border-t">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <p className="text-sm font-medium">
              Get ready to upskill with IIM Shillong
            </p>
            <p className="text-orange-500 text-sm font-medium">
              Application Closes Soon
            </p>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium ml-2 whitespace-nowrap"
            onClick={() => window.open('https://apply.nulearn.in/e-mba-iim-shillong', '_blank')}
          >
            Apply Now
          </button>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <div className="text-right">
          
            <a href="tel:+918777087836" className="text-sm text-gray-600 hover:text-gray-800 block">+918777087836</a>
            <a href="mailto:emba.iimshillong@nulearn.in" className="text-sm text-gray-600 hover:text-gray-800 block">emba.iimshillong@nulearn.in</a>
          </div>
        </div>
      </div>
    </>
  );
}

