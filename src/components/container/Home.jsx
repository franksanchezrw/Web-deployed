import React from "react";
import { logos } from "../../Data";
import l1 from "../../assets/logo4.png";
import safe from "../../assets/safe.jpg";
import sit from "../../assets/sit.jpg";
import edit from "../../assets/ediit.png";
import r1 from "../../assets/R5.png";
import Sticky from "./Sticky";
import Biz from "./Biz";
import Svm from "./Svm";
import Footer from "./Footer";
import Swipe from "./Swipe";

import { motion, useScroll } from "framer-motion";
const Home = () => {
  return (
    <div>
      {/* 1st section */}


      <div className="  bg-gradient-to-tl from-indigo-700 via-white to-violet-300 ">
   
      <div className="section px-1 ">
   
         <div className="md:flex items-center justify-center">
          <div className="mr-10 animate__animated animate__slideInLeft">
            <div className="sm:text-[2.7rem] text-center text-[1.8rem] max-sm:pt-10 font-bold">
              Artificial Intelligence <br />
              Digitally Transforming <br /> Your Business
            </div>
            {/* <p className="text-sm leading-7 max-w-sm"> */}
            {/*     Discover the Transformative Potential of Artificial Intelligence: Empower Your Business with Smart Solutions and Stay Ahead of the Competition */}
            {/* </p> */}
            <div className="mt-4 mb-2 flex justify-start items-center">
              <div className="px-1 ">
                {/* <button className="px-3  py-2 text-white bg-[#4285f4] rounded-sm text-sm"> */}
                {/*   Know More */}
                {/* </button> */}
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="md:w-[50%] flex"
          >
            <img src={edit} className="justify-center items-center" />
          </motion.div>
        </div>
      </div>
        </div>
{/* hero section over ------------------------------------------------------------------------------*/}


      <div className=" ">
        <div className="py-10 bg-gradient-to-r  from-amber-300 via-fuchsia-300 to-teal-400">
          <div className=" sm:w-3/4 mx-auto px-auto py-10">
            <h1 className="text-3xl text-center  ">
              Our Excellent AI Solutions for Your Business

            </h1>
            {/* animate__animated animate__headShake */}
            <p className="text-center mt-6 text-white ">
              At Beauroi, we are dedicated to helping businesses achieve their
              digital transformation goals. With our applied AI expertise.
            </p>
          </div>
        </div>
          <section

      className='flex justify-between items-center max-lg:flex-col gap-10 w-full py-28 max-container px-24'
    >
          <motion.div className='flex-1 flex justify-center items-center'
            initial = {{opacity: 0, scale: 0}}
            whileInView = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.7}}
            >
        <img
          className="rounded-3xl"
          src={sit}
          alt='detail'
          width={450}
          height={522}

        />
      </motion.div>

      <motion.div className='flex flex-1 flex-col'            initial = {{opacity: 0, scale: 0}}
            whileInView = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.9}}
            >
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Optimize Your Data & 
                <span className='text-amber-500'> Business </span> Process
        </h2>
        <p className='mt-4 lg:max-w-lg text-black'>
          Your trusted domain-centric data cloud platform solution and
                  service provider. With our deep-domain expertise and data
                  engineering superpowers, we are committed to delivering
                  strategic business outcomes through tech innovations outcomes through tech innovations through.
                  Your trusted domain-centric data  platform solution and
                  service provider. 
        </p>

        <div className='mt-6'>
                <button className="px-4  py-3 text-white bg-amber-400 rounded-sm text-sm">
                  Know More
                </button>     <a
                      href="#"
                      className="text-sm  leading-6 text-white"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>      </div>
       </motion.div>


    </section>
        <div className=" bg-[#cdc1ff] text-white bg-gradient-to-tl from-white via-purple-700 to-sky-900 pt-10 pb-32">

            <section

      className='flex justify-between items-center max-lg:flex-col gap-10 w-full py-28 max-container px-24'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Optimize Your Data & 
                <span className='text-amber-400'> Business </span> Process
        </h2>
        <p className='mt-4 lg:max-w-lg '>
          Your trusted domain-centric data cloud platform solution and
                  service provider. With our deep-domain expertise and data
                  engineering superpowers, we are committed to delivering
                  strategic business outcomes through tech innovations.
                  Your trusted domain-centric data cloud platform solution and
                  service provider. 
        </p>

        <div className='mt-11'>
                <button className="px-3  py-2  bg-amber-300 rounded-sm text-sm">
                  Know More
                </button>     <a
                      href="#"
                      className="text-sm  leading-6 "
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>      </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={safe}
          alt='detail'
          width={570}
          height={522}

        />
      </div>
    </section>

        <section className='max-container flex justify-center flex-wrap text-gray px-24 gap-8'>
    <div className='flex-1 bg-white sm:w-[350px] sm:min-w-[350px] w-full rounded-[8px] shadow-xl px-10 py-6'>

      <h3 className='mt-5  text-3xl leading-normal font-bold'>
            Service
      </h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
        hello there this is the service one. in this section we will see about service
      </p>
    </div>   
    <div className='flex-1 bg-white sm:w-[350px] sm:min-w-[350px] w-full rounded-[8px] shadow-xl px-10 py-6'>

      <h3 className='mt-5  text-3xl leading-normal font-bold'>
            Data
      </h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
        hello there this is the service one. in this section we will see about service
      </p>
    </div>
    <div className='flex-1 bg-white sm:w-[350px] sm:min-w-[350px] w-full rounded-[8px] shadow-xl px-10 py-6'>

      <h3 className='mt-5  text-3xl leading-normal font-bold'>
            Cloud
      </h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
        hello there this is the service one. in this section we 
      </p>
    </div>
 
    </section> 
    {/* <Biz/> */}
           
    </div>



<div className="container  mx-auto px-4">

   
</div> 
     
<div className='   rounded-[8px] shadow-xl mx-auto my-10 my-4 px-10 py-6  '>
     <section
 
      className='max-container px-20 py-10 flex justify-center  px-36 items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] text-black lg:max-w-lg  font-bold'>
        Sign Up for
        <span className=''> Updates </span>& trusted domain Newsletter
      </h3>
{/*       <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'> */}
{/*         <input type='text' placeholder='contact@us.com' className=' sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full bg-gray' /> */}
{/*          */}
{/*  */}
{/*  */}
{/*         </div> */}
                {/*      <button className="px-6  py-4 text-white rounded-lg text-lg"> */}
                {/*   Know More */}
                {/* </button> */}
    </section> 
</div>

<motion.div className="pt-10 pb-20 bg-gradient-to-b from-cyan-300 via-purple-200 to-green-200"             initial = {{opacity: 0, scale: 0}}
            whileInView = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.5}}>
     <h3 className='text-4xl text-black text-center py-20 pb-16 font-bold'>
        Our Clients across the world
      </h3>
   <Svm  />
</motion.div>
              <section

      className='flex justify-between shadow-md items-center max-lg:flex-col gap-10 w-full py-20 max-container px-24'
    >
         <motion.div className='flex-1 flex justify-center items-center'
                     initial = {{opacity: 0, scale: 0}}
            whileInView = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.7}}>
        <img
          className="rounded-3xl"
          src={edit}
          alt='detail'
          width={500}
          height={522}

        />
      </motion.div>     
      <motion.div className='flex flex-1 flex-col justify-center items-center sm:px-10'
                  initial = {{opacity: 0, scale: 0}}
            whileInView = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.9}}>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg  text-black'>
          Optimize Your Data & 
                <span className='text-green-500'> Business </span> Process
        </h2>
        <p className='mt-4 lg:max-w-lg  text-black'>
          Your trusted domain-centric data cloud platform solution and
                  service provider. With our deep-domain expertise and data
                  engineering superpowers, we are committed to delivering
                  strategic business outcomes through tech innovations . 
        </p><br/>
             <p >
          Your trusted domain-centric data cloud platform solution and
          outcomes through tech innovations through.
                  Your trusted domain-centric data  platform solution and
                  service provider
                          </p>

      </motion.div>
  



    </section>

           <section

      className='flex justify-between items-center max-lg:flex-col gap-10 w-full pt-24 pb-36 max-container px-24'
    >
        
      <motion.div className='flex flex-1 flex-col'
                  initial = {{opacity: 0, scale: 0}}
            whileInView = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.4
            }}>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Optimize Your Data & 
                <span className='text-amber-500'> Business </span> Process
        </h2>
        <p className='mt-4 lg:max-w-lg text-black'>
          Your trusted domain-centric data cloud platform solution and
                  service provider. With our deep-domain expertise and data
                  engineering superpowers, we are committed to delivering
                  strategic business outcomes through tech innovations outcomes through tech innovations through.
                  Your trusted domain-centric data  platform solution and
                  service provider. 
        </p>

        <div className='mt-6'>
                <button className="px-4  py-3 text-white bg-amber-400 rounded-sm text-sm">
                  Know More
                </button>     <a
                      href="#"
                      className="text-sm  leading-6 text-white"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>      </div>
      </motion.div>
        <motion.div className='flex-1 flex justify-center items-center'
                    initial = {{opacity: 0, scale: 0}}
            whileInView = {{opacity: 1, scale: 1}}
            transition = {{duration: 0.8}}>
        <img
          className="rounded-3xl"
          src={sit}
          alt='detail'
          width={500}
          height={522}

        />
      </motion.div>



    </section> 
    <Swipe />
     <Footer />
     {/* <Sticky /> */}
{/* 3 feutures onhove section ends------------------------------------------------------------------------------*/}
         
{/* 3 feutures onhove section ends------------------------------------------------------------------------------*/}       
      </div>

    </div>
  );
};

export default Home;
