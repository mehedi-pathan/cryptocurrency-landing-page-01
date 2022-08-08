// import data
import { navData } from "../data";
import { CgClose } from "react-icons/cg";

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="lg:hidden bg-violet h-full top-0 bottom-0 w-80 flex justify-center  items-center">
      {/* close btn */}
      <div
        onClick={() => setNavMobile(false)}
        className=" absolute top-3 left-3 cursor-pointer"
      >
        <CgClose className="text-3xl" />
      </div>
      {/* menu list */}
      <ul className="text-xl flex flex-col gap-y-12">
        {navData.map((item, index) => {
          return (
            <li>
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
