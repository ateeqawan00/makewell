import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiAttachment2 } from "react-icons/ri";

import { Link } from "react-router-dom";
const Conversation = () => {
  return (
    <div className="pt-8 w-[90%]  justify-between h-screen flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link
            to={"/dashboard/chat"}
            className="bg-primary p-2 rounded-lg text-white text-2xl"
          >
            <IoIosArrowBack />
          </Link>
          <div>Patient Name</div>
        </div>
        <BsThreeDotsVertical className="text-3xl text-primary" />
      </div>
      <div className="border border-yellow-200 shadow-md rounded-md text-sm h-36 flex flex-col gap-5 justify-center 700px:px-16 300px:px-8">
        <div className="text-primary font-semibold">
          Waiting for patient response
        </div>
        <div className="text-[#080C2FA6]">
          Your Proposal response by patient is pending
        </div>
      </div>
      <div className="border h-2/3">chat</div>
      <div className="flex items-center justify-between ">
        <div className="w-[77%] border border-primary rounded-3xl flex items-center">
          <input
            type="text"
            className=" 800px:w-[95%] 500px:w-[92%] 300px:w-[85%] py-2 px-4 500px:text-sm 300px:text-xs bg-transparent"
            placeholder="Type your message ..."
          />
          <div className="w-[5%]">
            <RiAttachment2 className="w-5 text-primary h-5" />
          </div>
        </div>
        <button className="w-[20%] 500px:text-sm 300px:text-xs  py-2 rounded-3xl bg-primary text-white shadow-md border">
          Send
        </button>
      </div>
    </div>
  );
};

export default Conversation;
