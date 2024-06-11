import React from 'react';

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center  bottom-0 w-full ">
      <div className="logo font-bold text-2xl">
        <span className='text-green-700'>&lt;</span>
        <span>Pass</span><span className='text-green-700'>Word/&gt;</span>
      </div>
      <div className="font-bold text-l mt-0">
        Use This Website And Manage Your Passwords
      </div>
    </div>
  );
};

export default Footer;
