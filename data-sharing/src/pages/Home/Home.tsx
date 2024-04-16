import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import Service from "./Service";
import Payment from "./Payment";

const Home = () => {
  return (
    <div>
      <div className="grid grid-flow-row">
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

        <div className="pt-24 md:pt-32">
          <Service />

          <Payment />
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Home;
