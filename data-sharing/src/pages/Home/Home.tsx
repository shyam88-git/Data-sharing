import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import Payment from "./Payment";
import Partner from "./Partner";
import ActiveSlider from "./Service";

const navLink = [
  {
    path: "#overview",
    name: "Overview",
  },

  {
    path: "#map",
    name: "Map",
  },

  {
    path: "#pricing",
    name: "Pricing",
  },

  {
    path: "#report",
    name: "Report",
  },

  {
    path: "#client",
    name: "Client",
  },
];

const Home = () => {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    window.scroll({
      top: element.offsetTop - 20,
      behavior: "smooth",
    });
  };

  console.log(scrollToElement);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Menubar className="px-4 fixed w-full md:px-16 flex justify-end items-center gap-2 md:gap-12 md:py-12 bg-blue-950">
          <MenubarMenu>
            {navLink?.map((link, idx) => (
              <>
                <MenubarTrigger
                  key={idx}
                  className="MenubarTrigger hover:bg-slate-100 hover:border-slate-100 cursor-pointer active:text-white focus:outline-white"
                >
                  <a href={link.path}>{link?.name}</a>
                </MenubarTrigger>
              </>
            ))}

            <MenubarTrigger className="text-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600">
              <Link to="/login">Login</Link>
            </MenubarTrigger>
            <MenubarTrigger className="border border-slate-400">
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (!element) return;
                  window.scroll({
                    top: element.offsetTop - 20,
                    behavior: "smooth",
                  });
                }}
              >
                Get in Touch{" "}
              </button>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>

      <ActiveSlider />

      <Payment />

      <Partner />
      <ContactUs />
    </div>
  );
};

export default Home;
