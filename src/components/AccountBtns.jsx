import React from "react";

const AccountBtns = () => {
  return (
    <div className="flex items-center font-medium">
      {/* link btns */}
      <a className="hover:text-blue transition" href="##">
        Login
      </a>
      {/* separetor */}
      <span className="mx-6 text-white/20 font-thin">|</span>
      {/* button */}
      <button className="btn btn-h[52px] text-base px-8">Register</button>
    </div>
  );
};

export default AccountBtns;
