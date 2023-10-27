import { Home,Navbar} from "./components/index";

function App() {
  return <div className="font-Poppins bg-white">
    <Navbar/>
           <div className=" sm:hidden overflow-x-hidden absolute w-full bg-gradient-to-tl from-white via-purple-700 to-sky-900 text-[white] text-lg px-8 py-[2px] left-0 top-20
 ">
   <span className="block w-full translate-x-full animate-[move_30s_linear_infinite_]">
Please use destop for better experience! still working on mobile responsiveness
 </span>
 </div>
    <Home />


  </div>
  
}

export default App