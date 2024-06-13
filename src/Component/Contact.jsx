import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center rounded-3xl  bg-black text-white">
        <div className="flex justify-center">
          <img
            className="text-center w-[300px]"
            src="https://i.ibb.co/vLxKD60/download-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">Subcribe To Our Newsletter</h2>
          <p>
            {" "}
            ipsum dolor sit amet, consectetur adipidrscing elit. Purus mauris
            sem sed urna venenatis vivamus. Egestas in velit nulla viverra
            turpis id ac. Amet faucibus tempus.
          </p>
          <p className="bg-white rounded-xl p-2 flex justify-between">
            <input type="text" placeholder="type your email..." />
            <button className="bg-orange-400 pr-2 pl-2 rounded-xl">
              SUBCRIBE
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
