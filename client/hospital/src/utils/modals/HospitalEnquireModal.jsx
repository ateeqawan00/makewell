import { HiOutlineDocumentText, HiOutlineTrash } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { TiAttachment } from "react-icons/ti";

const HospitalEnquireModal = ({ onClose }) => {
  return (
    <dialog id="hospitalEnquireModal" className="modal">
      <div className="modal-box">
        <div className="flex justify-between items-center">
          <h3 className="text-lg leading-6 font-medium text-zinc-900">
            Add Medical Problem
          </h3>

          <div className="p-1 hover:bg-zinc-300 rounded-md hover:cursor-pointer">
            <RxCross1
              size={20}
              fill="#000"
              className=""
              onClick={() =>
                document.getElementById("hospitalEnquireModal").close()
              }
            />
          </div>
        </div>
        <div className="mt-2 px-7 py-3 flex flex-col">
          <input
            type="text"
            placeholder="Problem Name"
            className="mt-2 p-3 w-full border rounded-md"
          />
          <textarea
            placeholder="Description"
            className="mt-2 p-3 w-full border rounded-md"
            rows="3"
          ></textarea>
          <div className="mt-4 text-left">
            <div className="font-semibold">Medical Documents</div>
            <div className="mt-2">
              <label
                htmlFor="fileSelect"
                className="text-blue-700 hover:text-blue-900 hover:cursor-pointer flex items-center"
              >
                <TiAttachment size={20} />
                Upload Documents
              </label>
              <input
                type="file"
                multiple
                name="fileSelect"
                id="fileSelect"
                className="hidden"
              />
              <div className="mt-2 flex items-center justify-between px-2 py-4 border rounded-xl bg-[#D9D9D9] max-w-[300px]">
                <div className="flex items-center gap-2 ">
                  <HiOutlineDocumentText size={20} />{" "}
                  <span className="text-sm font-medium">
                    medical-record.pdf
                  </span>
                </div>
                <HiOutlineTrash size={20} />
              </div>
            </div>
          </div>
          <button className="mt-4 inline-block w-[200px] ml-auto bg-primary text-white p-3 rounded-xl hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
            Send
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default HospitalEnquireModal;
