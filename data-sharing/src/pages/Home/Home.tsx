import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <>
      <Menubar className="px-4 fixed w-full md:px-16 flex justify-end gap-4 md:gap-12 py-4 md:py-7 bg-blue-950">
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
          <MenubarTrigger className="border border-slate-300 text-black rounded-md  md:py-[-5px] bg-slate-200 hover:border-slate-400 hover:bg-slate-300 active:bg-slate-400 active:text-white focus:outline-2 focus:outline-slate-400">
            <Link to="">Get in Touch</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>

      <ContactUs />
    </>
  );
};

export default Home;
