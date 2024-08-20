import { Link } from "react-router-dom";

const LoginWaitlistModal = () => {
  return (
    <dialog id="loginModal" className="modal modal-bottom sm:modal-middle ">
      <div className="modal-box md:max-w-[600px] md:mx-auto">
        <h3 className="font-bold text-lg">Join Our Waiting List </h3>
        <p className="py-4">
          Join our waiting list now for exclusive access! Be the first to
          experience our latest updates, features, and offers. Reserve your spot
          today!
        </p>
        <div
          onClick={() =>
            document.getElementById("joinWaitlistModal").showModal()
          }
          className="modal-action"
        >
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Join Waitlist</button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop w-full">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default LoginWaitlistModal;
