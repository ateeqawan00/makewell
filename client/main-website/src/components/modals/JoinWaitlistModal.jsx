import { useFormik } from "formik";
import { waitingListSchema } from "../../utils/validationSchemas";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "../../utils/axios";

const JoinWaitlistModal = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: waitingListSchema,
    onSubmit: async () => {
      setLoading(true);
      const res = await axiosInstance.post("/join-waiting-list", values);
      toast.success(
        "Thanks for joining our waiting list, we'll update you soon"
      );
      setLoading(false);
      document.getElementById("joinWaitlistModal").close();
    },
  });
  return (
    <dialog id="joinWaitlistModal" className="modal">
      <div className="modal-box flex flex-col">
        <h1 className="font-semibold text-xl">
          Enter Details To Join Our Waitlist!
        </h1>
        <div className="mb-2 mt-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullName}
            placeholder="John Doe"
            className="w-full rounded-md flex-grow py-2.5 px-4 border text-sm outline-[#503AA7]"
          />
          {touched.fullName && errors.fullName ? (
            <div className="error text-red-500">{errors.fullName}</div>
          ) : null}
        </div>
        <div className="mb-2 mt-4">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
            placeholder="John@example.com"
            className="w-full rounded-md flex-grow py-2.5 px-4 border text-sm outline-[#503AA7]"
          />
          {touched.email && errors.email ? (
            <div className="error text-red-500">{errors.email}</div>
          ) : null}
        </div>
        <div className="mb-2 mt-4">
          <label htmlFor="fullName">Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phoneNumber}
            placeholder="+91XXXXXXXXX"
            className="w-full rounded-md flex-grow py-2.5 px-4 border text-sm outline-[#503AA7]"
          />
          {touched.phoneNumber && errors.phoneNumber ? (
            <div className="error text-red-500">{errors.phoneNumber}</div>
          ) : null}
        </div>
        <button
          type="button"
          disabled={loading}
          onClick={handleSubmit}
          className="self-end mt-4 px-12 py-3 bg-primary text-white rounded-xl"
        >
          {!loading ? (
            "Join"
          ) : (
            <span className="loading loading-spinner loading-md text-white"></span>
          )}
        </button>
      </div>
      <form method="dialog" className="modal-backdrop" onClick={resetForm}>
        <button>close</button>
      </form>
    </dialog>
  );
};

export default JoinWaitlistModal;
