import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-slate-800 text-white ">
            <div className="mycontainer flex justify-between items-center px py-5 h-14">
                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-700 '>&lt;</span>
                    <span>Pass</span><span className='text-green-700'>Word/&gt;</span>
                </div>
                {/* <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href='/'>Home</a>
                        <a className='hover:font-bold' href='/'>About</a>
                        <a className='hover:font-bold' href='/'>Contact</a>
                    </li>
                </ul> */}
                <button className="text-white bg-white-700 my-3 mx-2 rounded-full flex justify-between items-center">
                    <a href="https://www.linkedin.com/in/deepak-gupta-46b171285/" target="_blank" rel="noopener noreferrer">
                        <img className="relative w-15 p-1" src="linkedinIcon.png" alt="LinkedIn" />
                    </a>
                    <span className="font-bold px-2"></span>
                </button>
                {/* <button className="text-white bg-white-700 my-3 mx-2 rounded-full ">
                    <img className="relative w-15 p-1" src="githubIcon.png" alt="GitHub" />
                    <span className="font-bold px-2"></span>
                </button> */}
            </div>
        </nav>
    )
}

export default Navbar
