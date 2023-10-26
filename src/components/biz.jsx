import { apple, bill, google } from "../assets";

const Biz = () => (
  <section className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
    <div className="flex-1 flex flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
      <img src={bill} alt="img" className="w-[100%] h-[100%] relative z-[5]" />

    </div>

    <div className="flex-1 flex justify-center items-start flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={${styles.paragraph} max-w-[470px] mt-5}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="img" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="img" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Biz;