import React, {useState} from 'react'

import {HiMenuAlt1, HiX} from "react-icons/hi"


const Navbar = () => {
	const [toggle, setToggle] = useState(false)
	return (
		<div className="bg-white fixed w-full top-0 left-0 z-20 ">
			<div>
				<div className="container py-4 mx-auto flex items-center justify-between px-2">
					<div className="flex items-center gap-4">
						

						      <div class="py-1"><img className="w-28" src="https://beauroi.com/img/Logo-Beauroi.png"/></div>
					</div>
					
					<div className="flex"	>

					<div className="sm:flex items-center justify-center hidden">
						<li className="list-none cursor-pointer mr-8 font-bold transition-all duration-300">About</li>
						<li className="list-none cursor-pointer mr-8 font-bold transition-all duration-300">Services</li>
						<li className="list-none cursor-pointer mr-8 font-bold transition-all duration-300">Policy</li>
						<li className="list-none cursor-pointer mr-8 font-bold transition-all duration-300">Careers</li>
						
					</div>

					<button className="py-2  px-4 ml-8 font-bold text-sm border border-solid hover:bg-blue-400 rounded-md transition duration-300 bg-gradient-to-tr from-sky-100 via-cyan-300 to-red-200 border-gray">Sign Up</button>
					<HiMenuAlt1 className=" ml-4 text-3xl sm:hidden cursor-pointer" onClick={()=> setToggle(true)} />
					
					{toggle && <div className="fixed h-full w-96 top-0 left-0 z-20 bg-white text-black flex flex-col justify-center items-center shadow-lg gap-8 py-8">
						<li className="list-none cursor-pointer mr-8 font-bold transition-all duration-300">About</li>
						<li className="list-none cursor-pointer mr-8 font-bold transition-all duration-300">Services</li>
						<li className="list-none cursor-pointer mr-8 font-bold transition-all duration-300">Policy</li>
						<li className="list-none cursor-pointer mr-8 font-bold transition-all duration-300">Careers</li>
						<HiX
							className="absolute right-12 top-12 text-3xl cursor-pointer" onClick={(prev)=>setToggle(!prev)}/>
						
					</div>}
					</div>
				</div>
		</div>
	</div>
			
	)
}

export default Navbar