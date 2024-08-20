import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { chatData } from "../../../data/ChatData";
const Chat = () => {
  return (
    <div className=" w-[100%] flex flex-col items-center">
      <div className=" w-[85%] flex flex-col gap-6 items-end">
        <div className="flex items-center gap-1 text-[#ADADAD] text-xs  1200px:w-[25%] 1000px:w-[30%] py-2 px-4 shadow-lg rounded-3xl">
          <FiSearch className="text-sm" />
          <input type="text" name="text" placeholder="Search hospitals.." />
        </div>
        <div className=" w-[100%] flex flex-col items-start">
          <h1 className="text-primary text-lg font-medium">Inbox</h1>
        </div>
        <div className="  w-[100%] items-start  flex ">
          <div className="w-36 border flex items-center rounded-lg bg-[#EFEFF0] text-black">
            <a
              href=""
              className="active: bg-primary text-white rounded-lg  w-[50%] h-10 flex items-center justify-center "
            >
              All
            </a>
            <a
              href=""
              className=" rounded-lg  w-[50%] h-10 flex items-center justify-center "
            >
              Unread
            </a>
          </div>
        </div>
        <div className="flex flex-col w-[100%] gap-5">
          {chatData.map((items) => (
            <Link
              to={"/dashboard/chat/conversation"}
              className="flex  items-center justify-between  border shadow-lg  rounded-lg text-[#080C2FA6]"
            >
              <div className="flex gap-5 items-center 500px:flex-row 300px:flex-col ">
                <img
                  src={items.img}
                  className="w-40 h-36 object-cover rounded-lg"
                />

                <div className="flex flex-col 500px: pb-0 300px:pb-3  justify-between gap-2">
                  <div className="text-primary font-medium">{items.name}</div>
                  <div className="">{items.proposal}</div>
                </div>
              </div>
              <div className="flex flex-col items-center pr-10 justify-between gap-5">
                <div>{items.time}</div>
                <div>{items.msg}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
