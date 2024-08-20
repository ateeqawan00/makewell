import { CiCreditCard1 } from "react-icons/ci";
import { FaAngleLeft, FaCcPaypal } from "react-icons/fa6";

const PaymentPage = () => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-primary flex items-center justify-center rounded-md">
          <FaAngleLeft color="#fff" />
        </div>
        <h1 className="text-primary font-semibold">Payment Details</h1>
      </div>
      <div className="p-4">
        <body className="bg-zinc-100  md:p-6">
          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <button className="text-zinc-500 font-semibold">In person</button>
              <button className="text-blue-500 font-semibold">
                Online Payment
              </button>
            </div>

            <form>
              <div className="mb-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-zinc-700 flex items-center gap-2">
                    <CiCreditCard1 size={20} /> <span>Credit Card</span>
                  </span>
                </label>
                <div className="mt-2  p-4 bg-[#D6D6D6] rounded-lg">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                    <input
                      type="text"
                      placeholder="Enter card number"
                      className="col-span-2 form-input px-4 py-2 rounded"
                    />
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="form-input px-4 py-2 rounded"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="form-input px-4 py-2 rounded"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4 bg-[#D6D6D6]  p-2 rounded-md">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-zinc-700 flex items-center gap-2">
                    <FaCcPaypal size={25} color="#0079C1" />{" "}
                    <span>Credit Card</span>
                  </span>
                </label>
                <div className="mt-2 ml-6 bg-zinc-50 rounded-lg">
                  <input
                    type="text"
                    placeholder="Enter card number"
                    className="form-input px-4 py-2 rounded w-full"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Next
              </button>
            </form>
          </div>
        </body>
      </div>
    </div>
  );
};

export default PaymentPage;
