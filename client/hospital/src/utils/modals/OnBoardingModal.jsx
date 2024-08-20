/* eslint-disable react/prop-types */
const OnBoardingModal = ({ setTab, setActive }) => {
  return (
    <dialog id="onBoardModal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Thank You For Signing-Up!</h3>
        <p className="py-4">
          We&apos;ve received your request and will respond soon
        </p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button
          onClick={() => {
            setTab("refferal");
            setActive(4);
          }}
        >
          close
        </button>
      </form>
    </dialog>
  );
};

export default OnBoardingModal;
