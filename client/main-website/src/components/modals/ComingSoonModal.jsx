import { Link } from "react-router-dom";

const ComingSoonModal = () => {
  return (
    <dialog
      id="comingSoonModal"
      className="modal modal-bottom sm:modal-middle "
    >
      <div className="modal-box md:max-w-[600px] md:mx-auto">
        <h3 className="font-bold text-lg">Contact Request Initiated </h3>
        <p className="py-4">
          We have received your request and will be reaching out to you shortly.
          Thank you for getting in touch with us.
        </p>
        <Link to={"/setup-profile"} className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Join Waitlist</button>
        </Link>
      </div>
      <form method="dialog" className="modal-backdrop w-full">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ComingSoonModal;
