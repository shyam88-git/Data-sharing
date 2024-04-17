import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import Payment from "./Payment";
import Partner from "./Partner";
import ActiveSlider from "./Service";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Menubar className="px-4 fixed w-full md:px-16 flex justify-end items-center gap-2 md:gap-12 md:py-12 bg-blue-950">
          <MenubarMenu>
            <MenubarTrigger className="MenubarTrigger hover:bg-slate-100 hover:border-slate-100 cursor-pointer active:text-white focus:outline-white">
              <Link to="">Overview</Link>
            </MenubarTrigger>
            <MenubarTrigger className="MenubarTrigger hover:bg-slate-100 hover:border-slate-100 cursor-pointer active:text-white focus:outline-white">
              Map
            </MenubarTrigger>
            <MenubarTrigger className="MenubarTrigger hover:bg-slate-100 hover:border-slate-100 cursor-pointer active:text-white focus:outline-white">
              Pricing
            </MenubarTrigger>
            <MenubarTrigger className="MenubarTrigger hover:bg-slate-100 hover:border-slate-100 cursor-pointer active:text-white focus:outline-white">
              Report
            </MenubarTrigger>
            <MenubarTrigger className="MenubarTrigger hover:bg-slate-100 hover:border-slate-100 cursor-pointer active:text-white focus:outline-white">
              Client & Patners
            </MenubarTrigger>
            <MenubarTrigger className="text-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600">
              <Link to="">Login</Link>
            </MenubarTrigger>
            <MenubarTrigger className="border border-slate-400">
              <Link to="">Get in Touch</Link>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
      {/* <div className=" hero-image   flex flex-row items-center bg-blue-600">
        <div>
          <div className="mt-52 px-12 h-[12] scr">
            <div className="flex flex-wrap items-center justify-between">
              <h1 className="text-2xl font-bold text-white mb-3">
                Recent Activity
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="border-l-2 mt-3 w-[17rem] transition duration-300 transform hover:scale-[1.05] ">
                <div className="transform transition cursor-pointer ml-4 relative flex items-center sm:pl-0 sm:pr-0 sm:px-3 py-2 text-white rounded mb-5 flex-col md:flex-row space-y-5 md:space-y-0">
                  <div className="w-5 h-5 bg-blue-200 dark:bg-gray-100 absolute -left-4 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                  <div className=" h-[4rem]  px-3 rounded-sm overflow-hidden">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-[16px] font-bold text-gray-100 dark:text-gray-200">
                        Added New Interest
                      </h3>
                      <small>01/04/024</small>
                    </div>
                    <p className="text-gray-100 dark:text-gray-300 text-[13px]">
                      A geographic information system (GIS) is a computer system
                      for captur...
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="border-l-2 mt-3 w-[17rem] transition duration-300 transform hover:scale-[1.05] ">
                <div className="transform transition cursor-pointer ml-4 relative flex items-center sm:pl-0 sm:pr-0 sm:px-3 py-2 text-white rounded mb-5 flex-col md:flex-row space-y-5 md:space-y-0">
                  <div className="w-5 h-5 bg-blue-200 dark:bg-gray-100 absolute -left-4 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                  <div className=" h-[4rem]  px-3 rounded-sm overflow-hidden">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-[16px] font-bold text-gray-100 dark:text-gray-200">
                        Added New Interest
                      </h3>
                      <small>01/04/024</small>
                    </div>
                    <p className="text-gray-100 dark:text-gray-300 text-[13px]">
                      A geographic information system (GIS) is a computer system
                      for captur...
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="border-l-2 mt-3 w-[17rem] transition duration-300 transform hover:scale-[1.05] ">
                <div className="transform transition cursor-pointer ml-4 relative flex items-center sm:pl-0 sm:pr-0 sm:px-3 py-2 text-white rounded mb-5 flex-col md:flex-row space-y-5 md:space-y-0">
                  <div className="w-5 h-5 bg-blue-200 dark:bg-gray-100 absolute -left-4 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                  <div className=" h-[4rem]  px-3 rounded-sm overflow-hidden">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-[16px] font-bold text-gray-100 dark:text-gray-200">
                        Added New Interest
                      </h3>
                      <small>01/04/024</small>
                    </div>
                    <p className="text-gray-100 dark:text-gray-300 text-[13px]">
                      A geographic information system (GIS) is a computer system
                      for captur...
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="border-l-2 mt-3 w-[17rem] transition duration-300 transform hover:scale-[1.05] ">
                <div className="transform transition cursor-pointer ml-4 relative flex items-center sm:pl-0 sm:pr-0 sm:px-3 py-2 text-white rounded mb-5 flex-col md:flex-row space-y-5 md:space-y-0">
                  <div className="w-5 h-5 bg-blue-200 dark:bg-gray-100 absolute -left-4 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                  <div className=" h-[4rem]  px-3 rounded-sm overflow-hidden">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-[16px] font-bold text-gray-100 dark:text-gray-200">
                        Added New Interest
                      </h3>
                      <small>01/04/024</small>
                    </div>
                    <p className="text-gray-100 dark:text-gray-300 text-[13px]">
                      A geographic information system (GIS) is a computer system
                      for captur...
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="border-l-2 mt-3 w-[17rem] transition duration-300 transform hover:scale-[1.05] ">
                <div className="transform transition cursor-pointer ml-4 relative flex items-center sm:pl-0 sm:pr-0 sm:px-3 py-2 text-white rounded mb-5 flex-col md:flex-row space-y-5 md:space-y-0">
                  <div className="w-5 h-5 bg-blue-200 dark:bg-gray-100 absolute -left-4 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                  <div className=" h-[4rem]  px-3 rounded-sm overflow-hidden">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-[16px] font-bold text-gray-100 dark:text-gray-200">
                        Added New Interest
                      </h3>
                      <small>01/04/024</small>
                    </div>
                    <p className="text-gray-100 dark:text-gray-300 text-[13px]">
                      A geographic information system (GIS) is a computer system
                      for captur...
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="border-l-2 mt-3 w-[17rem] transition duration-300 transform hover:scale-[1.05] ">
                <div className="transform transition cursor-pointer ml-4 relative flex items-center sm:pl-0 sm:pr-0 sm:px-3 py-2 text-white rounded mb-5 flex-col md:flex-row space-y-5 md:space-y-0">
                  <div className="w-5 h-5 bg-blue-200 dark:bg-gray-100 absolute -left-4 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                  <div className=" h-[4rem]  px-3 rounded-sm overflow-hidden">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-[16px] font-bold text-gray-100 dark:text-gray-200">
                        Added New Interest
                      </h3>
                      <small>01/04/024</small>
                    </div>
                    <p className="text-gray-100 dark:text-gray-300 text-[13px]">
                      A geographic information system (GIS) is a computer system
                      for captur...
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <p className=" inline-block text-white font-bold lg:text-[26px] text-[22px] lg:leading-[33px]">
          Unearthing opportunities, pinpointing prosperity.
        </p>
      </div> */}

      <ActiveSlider />

      <Payment />
      <Partner />
      <ContactUs />
    </div>
  );
};

export default Home;
