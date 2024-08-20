/* eslint-disable react/prop-types */
import { RxCross1 } from "react-icons/rx";

const GradientModal = ({ title, message }) => {
  return (
    <dialog id="gradientModal" className="modal">
      <div className="modal-box bg-gradient-to-b from-[#3D3066] to-[#5941B6] text-white max-w-md">
        <div className="flex justify-between items-center">
          <h3 className="text-lg leading-6 font-semibold">{title} </h3>

          <div className="p-1 hover:bg-black rounded-md hover:cursor-pointer">
            <RxCross1
              size={20}
              fill="#000"
              className=""
              onClick={() => document.getElementById("gradientModal").close()}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {" "}
          <p className="mt-4">{message}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("gradientModal").close();
            }}
            className="px-12 py-3 rounded-3xl bg-white text-black self-center"
          >
            Continue
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default GradientModal;
