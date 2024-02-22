import { useState } from "react";

function Header() {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="max-w-[90%] flex mx-auto justify-between mt-4">
      <div className="w-[250px] ">
        <img src="logo/logo.png" alt="logoimage" />
      </div>
      <div className="p-4 my-7">
        <ul className="flex font-bold text-3xl cursor-pointer">
          <li className="px-4">Home</li>
          <li className="px-4">About us</li>
          <li className="px-4">Contact us</li>
          {/* <li className="px-4">Cart</li> */}
          <li>
            <button
              className="bg-yellow-300 px-3 py-1 rounded-lg"
              onClick={() => {
                setBtnNameReact("Logout");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
