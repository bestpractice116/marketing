import { Phone, Mail} from 'lucide-react';
import pic from "../profilePic.jpg"
export default function InfoPanel() {
  return (
    <div className="bg-gray-100 p-6 flex flex-col h-screen sticky top-0">
      <div className="flex-1 flex flex-col items-center justify-center">
        <img
          src={pic}
          alt="Profile"
          className="rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold text-blue-900 mb-2 text-center">
          Post Graduate Program in AI & ML
        </h1>
        <p className="text-gray-600 mb-4 text-sm text-center">
          A comprehensive program by Texas McCombs and Great Learning
        </p>
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors text-sm mb-4">
          Apply Now
        </button>
        <p className="text-red-600 text-sm">
          Application closes in 2 days
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center border-t pt-6">
        <Phone className="w-16 h-16 text-blue-600 mb-4" />
        <h2 className="text-xl font-bold text-blue-900 mb-2">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-4 text-sm text-center">
          For more information, please reach out to us.
        </p>
        <div className="flex items-start gap-3 mb-4">
          <div className="flex items-center">
            <Phone className="w-5 h-5 text-blue-600 mt-1" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">Phone</h3>
            <p className="text-gray-600 text-sm">080-4718-9252</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">Email</h3>
            <p className="text-gray-600 text-sm">aiml@greatlearning.in</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-4">
          5000+ learners found this helpful
        </p>
      </div>
    </div>
  );
}