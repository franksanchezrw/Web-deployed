import React, { useEffect } from 'react';

const Sticky = () => {
  useEffect(() => {
    const onTabClick = (event, element) => {
      event.preventDefault();
      const targetId = element.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const yOffset = -70; // Adjust this based on your layout
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    };

    const checkTabContainerPosition = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const heroTabs = document.querySelector('.et-hero-tabs');
      const componentTop = heroTabs.offsetTop;
      const lastSection = document.querySelector('.et-main').lastElementChild;
      const componentBottom = lastSection.offsetTop + lastSection.offsetHeight;

      const heroTabsContainer = document.querySelector('.et-hero-tabs-container');
      if (scrollPosition >= componentTop && scrollPosition <= componentBottom) {
        heroTabsContainer.classList.add('et-hero-tabs-container--top');
      } else {
        heroTabsContainer.classList.remove('et-hero-tabs-container--top');
      }

      const slides = document.querySelectorAll('.et-slide');
      slides.forEach((slide) => {
        const slideTop = slide.offsetTop - heroTabsContainer.offsetHeight;
        const slideBottom = slideTop + slide.offsetHeight;
        if (scrollPosition >= slideTop && scrollPosition <= slideBottom) {
          const id = slide.getAttribute('id');
          const tabs = document.querySelectorAll('.et-hero-tab');
          tabs.forEach((tab) => tab.classList.remove('active'));
          const currentTab = document.querySelector(`a[href="#${id}"]`);
          currentTab.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', checkTabContainerPosition);

    return () => {
      window.removeEventListener('scroll', checkTabContainerPosition);
    };
  }, []);

  return (
    <div>
      <section className="et-hero-tabs bg-white p-20">
        <h1>At Beauroi</h1>
        <h3>We Make Your Business Smarter with Artificial Intelligence</h3>
        <div className="et-hero-tabs-container rounded-2xl ">
          <a className="et-hero-tab px-10 " href="#tab-e" onHover={(e) => onTabClick(e, e.target)}>
           DATA
          </a>
          <a className="et-hero-tab px-10" href="#tab-f" onMouseEnter={(e) => onTabClick(e, e.target)}>
           ENGINEERINGS
          </a>
          <a className="et-hero-tab px-10" href="#tab-r" onClick={(e) => onTabClick(e, e.target)}>
           TECH INNOVATIONS
          </a>
          <a className="et-hero-tab px-10" href="#tab-a" onClick={(e) => onTabClick(e, e.target)}>
         AI & ML
          </a>
          <a className="et-hero-tab px-10" href="#tab-r" onClick={(e) => onTabClick(e, e.target)}>
           TECH INNOVATIONS
          </a>
          <a className="et-hero-tab px-10" href="#tab-a" onClick={(e) => onTabClick(e, e.target)}>
         AI & ML
          </a>
          {/* Add other tab links here */}
          <span className="et-hero-tab-slider"></span>
        </div>
      </section>
      <main className="et-main bg-white">
        <section className="et-slide" id="tab-e">
         <div className="overflow-hidden bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 bg-white sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
  
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Data
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clipRule="evenodd"
                  />
                </svg>
                Push to deploy.
              </dt>
              <dd className="inline">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
                SSL certificates.
              </dt>
              <dd className="inline">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path
                    fillRule="evenodd"
                    d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                    clipRule="evenodd"
                  />
                </svg>
                Database backups.
              </dt>
              <dd className="inline">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                Et magna sit morbi lobortis.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <img
        src="https://imgs.search.brave.com/uGM75OwfZmkEEgFE6gHT2_TENZJBo9SZl-VdSE3sXC0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9idXNpbmVzc21h/bi11c2luZy10ZWNo/LWRldmljZXMtaWNv/bnMtdGhpbi1saW5l/LWludGVyZmFjZV8x/MTcwMjMtOTA0Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn"
        alt="Product screenshot"
        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
        width={2432}
        height={1442}
      />
    </div>
  </div>
</div>
 </section>
                
        <section className="et-slide" id="tab-f">
<div className="overflow-hidden bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-8 lg:pt-4">
        <div className="lg:max-w-lg">
  
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Engineering
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clipRule="evenodd"
                  />
                </svg>
                Push to deploy.
              </dt>
              <dd className="inline">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
                SSL certificates.
              </dt>
              <dd className="inline">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                  <path
                    fillRule="evenodd"
                    d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                    clipRule="evenodd"
                  />
                </svg>
                Database backups.
              </dt>
              <dd className="inline">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                Et magna sit morbi lobortis.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <img
        src="https://imgs.search.brave.com/bX5S65Zkh6Oulg7hsg5hEQJFprsKrTjBWnmF9Hg7fuU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/dXR1cmlzdGljLXNt/YXJ0LWNpdHktd2l0/aC01Zy1nbG9iYWwt/bmV0d29yay10ZWNo/bm9sb2d5XzUzODc2/LTk4NDM4LmpwZz9z/aXplPTYyNiZleHQ9/anBn"
        alt="Product screenshot"
        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
        width={2432}
        height={1442}
      />
    </div>
  </div>
</div>

        </section>
        <section className="et-slide" id="tab-r">
             <div className="section px-1 ">
              <div className="md:flex  items-center  justify-center">
              <div className="pl-3 animate__animated animate__slideInLeft">
          

                <div className="sm:text-[2.5rem]  text-[1.8rem] font-bold">
                  Artificial Intelligence <br/>Digitally Transforming <br/> Your Business
                </div>
                <p className="text-sm leading-7 max-w-sm">
                
            Trusted domain-centric data cloud platform solution and service provider </p>


              </div>

            </div>
            </div>

           </section>
        <section className="et-slide" id="tab-a">
          <h1>DATA</h1>

        </section>
        <section className="et-slide" id="tab-other">
          <h1>Other</h1>
          <h3>something about other</h3>
        </section>
      </main>
    </div>
  );
};

export default Sticky;
