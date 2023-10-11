import React from 'react';
import { RiArrowDownSFill, RiTimeLine } from 'react-icons/ri';
import { IoMdArrowForward } from 'react-icons/io';
import { PiVideoCameraThin } from 'react-icons/pi';

import Calendar from '../components/Calendar';
import BarChartComponent from '../components/BarChartComponent';
import TransactionHistory from '../components/TransactionHistory';

const Dashboard = () => {
  const avatarCount = 3;

  const generateAvatars = (count) => {
    const avatars = [];
    for (let index = 0; index < count; index++) {
      avatars.push(
        <img
          key={index}
          src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
          className={`w-10 h-10 rounded-full ${index > 0 ? '-ml-5' : ''}`}
          alt={`Avatar ${index + 1}`}
        />
      );
    }
    return avatars;
  };

  return (
    <>
      {/* First Card */}
      <div className="sm:flex">
        {/* Left Column (Column Span 12 on small screens, 9 on medium screens, 10 on large screens) */}
        <div className="sm:w-8/12 lg:w-10/12 lg:p-4 bg-[#6e62e5] rounded-2xl lg:m-4 md:m-4 mx-2">
          <div className="flex flex-wrap">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-1">
                <div className="p-2">
                  <div className="flex items-center justify-center gap-3">
                    <img
                      src="https://t3.ftcdn.net/jpg/01/22/09/76/500_F_122097688_6zBkh5v1j8OLHU1SaFgQNvx1K7weNxQK.jpg"
                      className="w-10 h-10 rounded-full"
                      alt="Avatar"
                    />
                    <div>
                      <p className="py-1 text-slate-100">Monthly {["Revenue", "Sales", "Profit"][index]}</p>
                      <p className="py-1 text-xl text-white font-semibold">$3,500 <span className="bg-white rounded-full px-2 py-1 text-sm font-semibold text-[#6e62e5]">+2.4%</span></p>
                      <p className="text-xs text-slate-100">Previous month <span className="text-white rounded-full px-2 ml-2 text-sm font-semibold">$1.7k</span></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Column Span 12 on small screens, 3 on medium screens and large screens) */}
        <div className="w-full sm:w-3/12 p-4">
          <div className="bg-white">
            <h6 className="text-[#6e62e5]">Premium Access</h6>
            <h1 className="text-xl lg:text-3xl font-semibold custom font-custom">
              Take Back<br /> Your Creative <br />Control
            </h1>
            <div className='relative'>
                <div className="flex absolute left-28 -bottom-3 md:right-28 md:-bottom-3 lg:right-1 lg:bottom-1"> 
                {generateAvatars(avatarCount)}
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="sm:flex">
        {/* Left Column (Column Span 12 on small screens, 9 on medium screens, 10 on large screens) */}
        <div className="w-full sm:w-9/12 lg:w-10/12 p-4">
          <div className="bg-white rounded-md p-4 border border-gray-200">
            <div className="flex flex-wrap">
              {/* First Card (Full width on small screens, 1/2 width on medium screens, 1/3 width on large screens) */}
              <div className="w-full sm:w-1/2 lg:w-1/2">
                <div className="flex flex-col gap-20">
                  <div>
                    <p className="text-black font-semibold text-lg -mb-1">Top Sales & Cost</p>
                    <span className="text-gray-400 text-xs">Last 60 days</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-[#6e62e5] font-bold lg:text-4xl md:text-4xl sm:3xl ">$956.82K</h2>
                    <div className="bg-green-200 rounded-3xl px-4 py-1 w-32 h-10 flex items-center text-green-500 font-semibold font-custom">
                      <RiArrowDownSFill />+5.4%
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Card (Full width on small screens, 1/2 width on medium screens, 1/3 width on large screens) */}
              <div className="w-full sm:w-1/2 lg:w-1/2">
                <div className="rounded-md  mt-4">
                  <div className="flex items-center justify-between lg:px-10 md:px-10 sm:px-2">
                    <div className="text-black font-semibold font-custom text-sm">Analytic <span className="text-green-400 font-semibold text-sm ml-2">+5.4%</span></div>
                    <div className="text-black font-semibold font-custom flex items-center cursor-pointer text-xs">Month <RiArrowDownSFill /></div>
                  </div>
                  <BarChartComponent />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Column Span 12 on small screens, 3 on medium screens and large screens) */}
        <div className="w-full sm:w-3/12 p-4">
          <div className="bg-white rounded-md lg:p-3 md:p-1 sm:p-1">
            <div className="text-gray-500 font-semibold flex items-center cursor-pointer text-sm">The Professional Platform <RiArrowDownSFill /></div>
            <div className="flex justify-between text-[#6e62e5] mt-5 lg:text-lg md:text:md sm:text-sm border border-gray-300 py-1 px-4 rounded-xl cursor-pointer">
              <button>Upgrade Now</button>
              <IoMdArrowForward className="text-2xl" />
            </div>
            <div className="flex justify-center items-center mt-5">
              <Calendar />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-400">{/* <ResponsiveTable /> */}</div>

      <div className="sm:flex">
        {/* Left Column (Column Span 12 on small screens, 9 on medium screens, 10 on large screens) */}
        <div className="w-full sm:w-9/12 lg:w-10/12 p-4">
          <TransactionHistory />
        </div>

        {/* Right Column (Column Span 12 on small screens, 3 on medium screens and large screens) */}
        <div className="w-full sm:w-3/12 p-4 mt-5">
          <div className="flex gap-4 items-center">
            <div>
              <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1">Meeting with Client</p>
              <div className="flex justify-between items-center gap-4 text-xs text-gray-500">
                <p className="flex items-center gap-1"><PiVideoCameraThin /> Google meet</p>
                <p className="flex items-center gap-1"><RiTimeLine /> 12 PM</p>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 mt-5"></div>
          <div className="flex gap-4 items-center mt-5">
            <div>
              <img src="https://img.freepik.com/premium-photo/3d-render-stack-brightly-colored-books-with-bookmark-pile-textbooks-notebooks-books-symbol-learning-school-business-isolated-illustration-gray-background_172597-1789.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1">Weekly Report</p>
              <div className="flex justify-between items-center gap-4 text-xs text-gray-500">
                <p className="flex items-center gap-1"><PiVideoCameraThin /> Google meet</p>
                <p className="flex items-center gap-1"><RiTimeLine /> 03 PM</p>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 mt-5"></div>
          <div className="flex gap-4 items-center mt-5">
            <div>
              <img src="https://img.freepik.com/premium-photo/3d-render-stack-brightly-colored-books-with-bookmark-pile-textbooks-notebooks-books-symbol-learning-school-business-isolated-illustration-gray-background_172597-1789.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1">Daily Scrum Meeting</p>
              <div className="flex justify-between items-center gap-4 text-xs text-gray-500">
                <p className="flex items-center gap-1"><PiVideoCameraThin /> Google meet</p>
                <p className="flex items-center gap-1"><RiTimeLine /> 05 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
