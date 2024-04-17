import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface PropsI {
  children: React.ReactNode;
  title: string;
}

const AuthLayout = ({ title, children }: PropsI) => {
  return (
    <div className="  w-ful flex items-center justify-center  my-4">
      <div className=" w-full flex items-center justify-center">
        <div className="relative bg-blue-950 text-white py-8 rounded-md">
          <Link to="/">
            <FaArrowLeft
              size={20}
              className="absolute top-6 left-8 cursor-pointer hover:text-primary-blue-900 transition-all duration-200 ease-in"
            />
          </Link>

          {/* <img src="/nep-gis-logo.png" className="mx-auto" /> */}
          <p className="text-center text-[32px]  leading-3xl mb-16 mt-[4rem] ">
            {title}
          </p>
          <>{children}</>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
