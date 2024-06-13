import React from "react";
import { RiEBike2Fill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa6";

import { FaToolbox } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";

const Nav = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <div className="navbar bg-base-100 text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>

                <li>
                  <a>Card</a>
                </li>
              </ul>
            </div>
            <a className="">
              <img
                className="w-[100px]"
                src="https://i.ibb.co/mDv1cxj/2747161aedfbfcfffd1675ee9638a2e6.png"
                alt=""
              />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-black font-semibold px-1">
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Card</a>
              </li>
            </ul>
          </div>

          <div className="navbar-end  ">
            <FaSearch className="text-black " />

            <input
              type="text"
              placeholder="Search"
              className="input input-bordered border-none w-24 md:w-auto"
            />

            <div className="divider divider-horizontal"></div>

            <FaToolbox className="text-black ml-5" />
          </div>
        </div>
      </div>

      {/* ------------  */}

      <div className="p-6">
        <div className="p-6  ">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="bg-pink-200 font-semibold rounded-3xl p-2 ml-2 w-[200px] mt-10 mb-10 text-orange-400 flex  justify-between items-center">
                Bike Delivery
                <RiEBike2Fill className="mr-8" />
              </h2>

              <h1 className="text-6xl font-bold uppercase mb-5">
                The Fastest <br />
                <span className="text-orange-400">Delivery</span> <br />
                IN
                <span className="text-orange-400">Your City</span>
              </h1>

              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>

              <div className="flex gap-5 bg-transparent bg-slate-600 max-w-60 rounded-3xl p-2">
                <button className="btn btn-primary rounded-3xl bg-orange-400 text-white border-none">
                  Order Now
                </button>

                <button className="  border">
                  <FaPlay className="bg-red-200 w-[50px] h-[50px] p-2 rounded-full text-orange-400" />
                </button>

                <button className="btn bg-white border-none ">Order Now</button>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="card card-compact  bg-base-100 shadow-xl p-4">
                  <figure>
                    <img
                      src="https://i.ibb.co/VJzqt0c/download.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="font-bold text-center">Burger</h2>
                    <p className="text-center">Mushroom Sauce</p>

                    <p className="text-center">
                      {" "}
                      <span className="text-orange-400">$</span> 5.15
                    </p>
                  </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl p-4">
                  <figure>
                    <img
                      src="https://i.ibb.co/HpNV5c3/images.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="font-bold text-center">Food Combo</h2>
                    <p className="text-center">Mushroom Sauce</p>

                    <p className="text-center">
                      {" "}
                      <span className="text-orange-400">$</span> 5.15
                    </p>
                  </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl p-4">
                  <figure>
                    <img
                      src="https://i.ibb.co/DgYQ3gt/download-2.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="font-bold text-center">Pizza</h2>
                    <p className="text-center">Mushroom Sauce</p>

                    <p className="text-center">
                      {" "}
                      <span className="text-orange-400">$</span> 5.15
                    </p>
                  </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl p-4">
                  <figure>
                    <img
                      src="https://i.ibb.co/G9qXw0h/download-1.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="font-bold text-center">Cake</h2>
                    <p className="text-center">Mushroom Sauce</p>

                    <p className="text-center">
                      {" "}
                      <span className="text-orange-400">$</span> 5.15
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------- */}

      <div
        className="grid grid-cols-1  md:grid-cols-3
       items-center  gap-10 p-4 "
      >
        <div className="  bg-base-100  border-r-slate-400 border-r font-semibold">
          <div className="card-body">
            <h2 className="text-center">
              <button className="  border">
                <FaRegClock className="bg-orange-400 w-[50px] h-[50px] p-2 rounded-full text-white" />
              </button>
            </h2>
            <p className="text-center">Today 10.00 am-10.00 pm</p>

            <p className="text-center">Working time </p>
          </div>
        </div>

        <div className="  bg-base-100  border-r-slate-400 border-r font-semibold">
          <div className="card-body">
          <h2 className="text-center">
              <button className="  border">
                <CiLocationOn className="bg-orange-400 w-[50px] h-[50px] p-2 rounded-full text-white" />
              </button>
            </h2>
            <p className="text-center">Mohammadpur, Dhaka</p>

            <p className="text-center">Our Location </p>
          </div>
        </div>

        <div className="  bg-base-100   font-semibold">
          <div className="card-body">
          <h2 className="text-center">
              <button className="  border">
                <IoIosCall  className="bg-orange-400 w-[50px] h-[50px] p-2 rounded-full text-white" />
              </button>
            </h2>
            <p className="text-center">+88 017 0000 0000</p>

            <p className="text-center">Phone Number </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
