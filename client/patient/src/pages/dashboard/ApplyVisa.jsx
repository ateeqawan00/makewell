import { FaAngleLeft } from "react-icons/fa6";
import GradientModal from "../../utils/modals/GradientModal";

const PaymentPage = () => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-primary flex items-center justify-center rounded-md">
          <FaAngleLeft color="#fff" />
        </div>
        <h1 className="text-primary font-semibold">Apply For Visa</h1>
      </div>
      <div className="p-4">
        <div className="max-w-lg mx-auto p-4">
          <form className="space-y-4 flex flex-col">
            <div>
              <label
                htmlFor="patientName"
                className="block text-sm font-medium text-zinc-700"
              >
                Patient Name As Per Passport
              </label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                placeholder="Description"
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="patientNumber"
                className="block text-sm font-medium text-zinc-700"
              >
                Number
              </label>
              <input
                type="number"
                id="patientNumber"
                name="patientNumber"
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="patientCountry"
                className="block text-sm font-medium text-zinc-700"
              >
                Patient Passport Country
              </label>
              <select
                id="patientCountry"
                name="patientCountry"
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>Select Country</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="familyNumber"
                className="block text-sm font-medium text-zinc-700"
              >
                Number of Family members traveling with patients
              </label>
              <input
                type="number"
                id="familyNumber"
                name="familyNumber"
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="familyCountry"
                className="block text-sm font-medium text-zinc-700"
              >
                Family Member&apos;s Passport Country
              </label>
              <select
                id="familyCountry"
                name="familyCountry"
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>Select Country</option>
              </select>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("gradientModal").showModal();
              }}
              type="submit"
              className="self-end w-[300px] flex justify-center py-2 px-4 border border-transparent rounded-3xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <GradientModal
        title={"Applied For Visa Letter"}
        message="You have applied for visa, you'll be inform through proposal in Inbox"
      />
    </div>
  );
};

export default PaymentPage;
