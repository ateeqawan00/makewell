import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Rating } from "@smastrom/react-rating";

const HospitalProfileSpecialities = () => {
  const [isExpand, setIsExpand] = useState(false);
  const [cardioForm, setcardioForm] = useState(false);

  const handelForm = (e) => {
    e.preventDefault();
    setcardioForm(true);
  };
  const handelExpand = (e) => {
    e.preventDefault();
    setIsExpand(true);
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-2 items-center">
        <button className="bg-primary  text-white p-3 rounded-lg">
          <IoIosArrowBack />
        </button>
        <div className="text-primary">Hospital Specialties</div>
      </div>
      <div className="w-[80%] ">
        <div className=" ml-12  flex flex-col gap-4">
          <button
            onClick={handelExpand}
            className={`border 800px:text-sm 600px:text-xs 300px:text-[10px]  1100px:w-[25%] 700px:w-[28%] 500px:w-[38%] 300px: w-[50%] border-primary ${
              isExpand ? "bg-primary text-white" : "bg-transparent text-primary"
            }   text-center p-2 rounded-3xl`}
          >
            Create Category
          </button>
          {isExpand && (
            <div className="flex flex-row gap-4">
              <div className="flex gap-2 800px:text-sm 600px:text-xs 300px:text-[10px]  1100px:w-[25%] 700px:w-[28%] 500px:w-[38%] 300px: w-[50%]">
                <button
                  onClick={handelForm}
                  className="border border-primary text-primary w-32 text-center py-2 px-5 rounded-3xl "
                >
                  Cardiology
                </button>
                <button
                  onClick={handelForm}
                  className="border border-primary text-primary w-32  text-center p-2 rounded-3xl "
                >
                  Dentistry
                </button>
                <button
                  onClick={handelForm}
                  className="border border-primary text-primary w-32  text-center p-2 rounded-3xl "
                >
                  Dermatology
                </button>
              </div>
            </div>
          )}
        </div>
        {cardioForm && (
          <form className="flex flex-col gap-3 ml-12 mt-10  w-[50%]">
            <input
              type="text"
              placeholder="Medical Specialties like Cardiology, Urology etc"
              class="p-2 border rounded-md text-sm bg-transparent text-black "
            />
            <input
              type="text"
              placeholder="Estimate Medical Cost"
              class="p-2 border rounded-md text-sm bg-transparent text-black "
            />
            <button className="bg-primary 800px:text-sm 600px:text-xs 300px:text-[10px]  1100px:w-[30%] 700px:w-[32%] 500px:w-[40%] 300px: w-[50%] text-white  py-2 rounded-3xl">
              Add Doctors
            </button>
          </form>
        )}
      </div>
      <div className="grid 500px:grid-cols-2 gap-5 700px:w-[70%] 500px:w-[90%] 300px:w-[80%]">
        <div className="border rounded-2xl  flex flex-col shadow-md justify-center px-4 py-2">
          <div className=" gap-2 flex items-center ">
            <img
              src="https://i.ibb.co/ZmZz6Ts/200f67e9a3e1acb5c12132301dd2a26c.jpg"
              alt="profile"
              className="rounded-full w-[40px] h-[40px] object-cover"
            />
            <div className="flex flex-col gap-1">
              <div className="text-primary font-medium tracking-wide">
                Patient
              </div>
              <div className="text-[#555555] text-sm">Cardiology</div>
            </div>
          </div>
          <button className=" text-right text-sm text-red-500">Remove</button>
        </div>
        <div className="border rounded-2xl  flex flex-col shadow-md justify-center px-4 py-2">
          <div className=" gap-2 flex items-center ">
            <img
              src="https://i.ibb.co/ZmZz6Ts/200f67e9a3e1acb5c12132301dd2a26c.jpg"
              alt="profile"
              className="rounded-full w-[40px] h-[40px] object-cover"
            />
            <div className="flex flex-col gap-1">
              <div className="text-primary font-medium tracking-wide">
                Patient
              </div>
              <div className="text-[#555555] text-sm">Cardiology</div>
            </div>
          </div>
          <button className=" text-right text-sm text-red-500">Remove</button>
        </div>
        <div className="border rounded-2xl  flex flex-col shadow-md justify-center px-4 py-2">
          <div className=" gap-2 flex items-center ">
            <img
              src="https://i.ibb.co/ZmZz6Ts/200f67e9a3e1acb5c12132301dd2a26c.jpg"
              alt="profile"
              className="rounded-full w-[40px] h-[40px] object-cover"
            />
            <div className="flex flex-col gap-1">
              <div className="text-primary font-medium tracking-wide">
                Patient
              </div>
              <div className="text-[#555555] text-sm">Cardiology</div>
            </div>
          </div>
          <button className=" text-right text-sm text-red-500">Remove</button>
        </div>
        <div className="border rounded-2xl  flex flex-col shadow-md justify-center px-4 py-2">
          <div className=" gap-2 flex items-center ">
            <img
              src="https://i.ibb.co/ZmZz6Ts/200f67e9a3e1acb5c12132301dd2a26c.jpg"
              alt="profile"
              className="rounded-full w-[40px] h-[40px] object-cover"
            />
            <div className="flex flex-col gap-1">
              <div className="text-primary font-medium tracking-wide">
                Patient
              </div>
              <div className="text-[#555555] text-sm">Cardiology</div>
            </div>
          </div>
          <button className=" text-right text-sm text-red-500">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default HospitalProfileSpecialities;
