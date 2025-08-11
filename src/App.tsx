// src/App.tsx
import { faCaretUp, faEnvelope, faPersonDigging, faRoadBarrier, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';
import './fa-icons'; // Import your icon library



function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, [location]);

  const blurIntensity = Math.min(scrollY / 50, 20);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      if (scrollContainer) {
        const currentScrollY = scrollContainer.scrollTop;
        setScrollY(currentScrollY);
        setShowBackToTop(currentScrollY > 300);
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }

  }, [scrollY, blurIntensity]);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState("Home", document.title, "/")
    }
  };

  return (
    <>
      <div className="hidden md:flex bg-[url('/images/FB_IMG_1684766406056.jpg')] bg-no-repeat bg-right min-h-screen min-w-screen fixed top-0 left-0 right-0 bottom-0 z-0"
        style={{
          filter: `blur(${blurIntensity}px) grayscale(100%)`,
          backgroundPositionX: window.innerWidth < 1920 ? window.innerWidth / 3 : undefined
        }}
      ></div>

      <div className="flex md:hidden bg-[url('/images/matrix-bg.webp')] bg-cover min-h-screen min-w-screen fixed top-0 left-0 right-0 bottom-0 z-0 grayscale-100 brightness-50"
      ></div>

      <div className='fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col overflow-y-auto' ref={scrollContainerRef}>
        <div className="flex gap-3 min-h-screen text-primary p-4">
          <div className='flex 2xl:flex-col 2xl:w-1/2 2xl:items-center 2xl:justify-center'>
            <div className="hidden md:flex w-1/3 2xl:w-1/2 bg-[url('/images/matrix-bg.webp')] bg-cover h-full fixed top-0 left-0 bottom-0 z-0 grayscale-100 brightness-50"
            ></div>
            <div className='flex flex-col items-center justify-center gap-3 z-10'>
              <h1 className="text-6xl font-bold text-center">Pouya Mahpeikar</h1>
              <p className="mt-4 text-xl text-center text-white">A developer crafting modern web experiences.</p>
              <div className='mt-4 flex flex-col gap-5 w-72 text-primary'>
                <Link className="main-button" to={'/#portfolio'}>
                  Portfolio
                </Link>
                <Link className="main-button" to={'/#resume'}>
                  Resumé
                </Link>
                <Link className="main-button" to="/#freetime">
                  When I'm not coding
                </Link>
                <Link className="main-button" to={'/#contact'}>
                  Contact me
                </Link>
              </div>
            </div>
          </div>
          <div className='hidden md:flex flex-2/3'></div>
        </div>

        <section className='flex flex-col h-full grow z-10 p-8 md:p-16' id='portfolio'>
          <h1 className="text-4xl font-bold text-white mb-8 text-primary">PORTFOLIO</h1>
          <div className='flex flex-col sm:flex-row gap-8 min-h-min border-2 rounded-3xl p-8 border-[var(--primary-color)] bg-gray-800 h-full'>
            <div className='w-full h-60 md:w-72 md:h-64 sm bg-white overflow-hidden rounded-2xl'>
              <img className="bg-white md:scale-120 origin-top-left" src="https://www.uppsalamakerspace.se/wp-content/uploads/2014/05/Uppsalamakerspace_2-01.png"></img>
            </div>
            <div className='flex flex-col'>
              <h3 className='text-2xl capitalize mb-6'>Uppsala Makerspace lesson scheduler</h3>
              <p className='mb-4 flex-1'>
                A project to assist organizing lessons at Makerspace
              </p>
              <div className='flex flex-col'>
                <span>
                  Live demo: <Link to={'https://master.d31o1td403e37h.amplifyapp.com/'} target='_blank' className='link'>here</Link>
                </span>
                <span>
                  Source code and descriptions on my <Link to={'https://github.com/pooya1361/makerspace'} target='_blank' className='link'>github</Link>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className='flex flex-col min-h-screen z-10 p-8 md:p-16' id='resume'>
          <h1 className="text-4xl font-bold text-white mb-8 text-primary">RESUME</h1>
          <div className='flex gap-8 border-2 rounded-3xl p-8 border-[var(--primary-color)] bg-gray-800 h-full'>
            <p>Coming soon ... <FontAwesomeIcon icon={faPersonDigging} /> <FontAwesomeIcon icon={faRoadBarrier} /> <FontAwesomeIcon icon={faTruck} /></p>
          </div>
        </section>

        <section className='flex flex-col z-10 p-8 md:p-16' id='freetime'>
          <h1 className="text-4xl font-bold text-white mb-8 text-primary">When I'm not coding ...</h1>
          <div className='flex flex-col gap-4 border-2 rounded-3xl p-8 border-[var(--primary-color)] bg-gray-800 h-full'>
            <p>In my free time:</p>

            <div className='flex flex-col lg:flex-row gap-8'>
              <div>
                <h3 className='text-2xl capitalize mb-2'>Sketching and painting</h3>
                <div className='flex'>
                  <script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js" async></script>
                  <div className="pa-gallery-player-widget w-128 h-128"
                    data-link="https://photos.google.com/share/AF1QipMl1gE8BenKVbnyRwY9BGrYR5fLmJQWqRAV6lLInCI1CwPDcxTPw7V9fY1IVJ1dUA?key=eTRCX0FEWGpMblRzcS11aGQ1N0ZRaVVFbnN6Y1lB"
                    data-title="Sketches and paintings 📸"
                    data-description="Shared album · Tap to view!">
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczOgHwY3ySE265PjoV7Sa0Sd612YK2oTzUlMI5avMLM-hbIdecOgkJVTqwwOJ1R5ifVBJOVJ-3Dwjaokj4fqAnTQ8kfBEctbgzfjGxAxb6SZaSrU8U9m=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczNEnoN1iP6PUK-wIih5XlRRE3jnvfMv3Sjc6ZyuJBxlK6dhst_5d3uqYqSu4pGbcqkb8PlNC6Rvcx0tHcgyoivIQun6S4EiNOFuBbn4xG6FoQMfi_MB=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczMyB0CQ4sjpFiI4QwVon1VYIoGeGZZhgADuGcktnu9cupUoYxV7c1vHtWXy55-CS64jNF1LIyl1t7MbWwwvDaSsOsz7hvGAcEUPDsOV3B0-xacIV-JO=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczNHX-sD_--IzurG6TBhGG6_lEBMSwOqmkYlwDgxnIO9KKSTlUk4L8BKpq563FZkWvk0_UFxeAgR6Bn7L2GWmaY2mPWagd5gP992OXfzZhXieA4yNpuA=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczPJ3dIVv6r98fyNsLEm2nnBK5dgBKN_nwYPH6eejA4azC_yVfHEoT2vn1lokvFFgs_G8PZWsNdbwrMLxGYXeSMPwIBCwe7CFQwfXTKXYEUW_c9D1aqw=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczO65bSLc9WXKLLy9vGmOXmsCYmV0orU3SntGq8cS6f71T08RXbzw-p-Nmhn5cu-ts7GGBUwdsuVzYLKPE7re5uFLYah0xBJyux5N_ZwtB1Ck2BeopQd=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczMPQBXBHFvDaQIED1cKi0P66NXmuPoqRFmIozPIHn0BW-Plpl4lzWA2BAWrEGkgo3vyOml_NgkG0OM5gYjtS_jiZE-dmY0q98Hxd_oz3SOhkGDzbdC9=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczPaQMUyv_3NnjujS9E32G8IKiDrVq-nvDIeAbc0UkGkcxEgc7vc5NsntteoRo4klvfLb2RbPVOY4NsbZV1Am4l1VvF-FGYLPzc0DCgQY4_knt2rDCTh=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczNvl_1_VX8Gh9BZpEFae3hSBhYuudq5h2Di8CSL3aBmzMi_OSKwuPdeDawF4Kgpraum4yDgtAc9RES2zZH7GQ2POthpOfo5ooO8Qe_Lw9VaiCgN_QB_=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczO6xpx9nVrKWLqiWeMsI3YjsQ1seXYsWKlodjkat4NBd0bxfO5y6gSzBdcsSPlL4cb8jRjkZq0MWMtFTxuKJ7JrT56hg1VX5BlBErBBL38cdvKlbiIT=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczPTZlQBh-lzdwTNrq1e1bXSCos-zhNFrxpMqYNNDfi4MtrQ1TXn67bhlnhXxlcpzgL4vnWrBxLdLfb-vETdJX2W91nD2KfESYI3A-NQIujybQ0WsuQc=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczPuitRj9rqgQPHz4MM8U8Ps0F2OoajaMgePqUpPJRRssSnfG5ftNG1DdhXQZP2py3K76tkmDL7a3fwPvpWC02PkhqX_zrBe05_-2HKbZbbhdrUgu3CP=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczNW4LJfCT-MjMDvJQHurVHeyUPglDDbn5MNwH75SE2gHKteXCNJI-sG8N0BB2TY7AMSXJoLTBxQoLBMAW1o2_w6ZtnN9JEz97oZaMG5pC3YnxEHBag_=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczNIT2UgKyAYYc4Ppra5tPJNqy2hCkOzSGz7R8k1XuHplulPRzLAuZGti1_BfmCtA5-Bbh0B-3rdNdOaQqEkQ8ytKdG_04csM4h4AhYrooEC83bmyRPa=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczMCuB1kPs-wx8CK6_4aHXyo91Ny1uQ73fOCmJU_uUoXDJ6KgrcMDp-siU3ljJ858VEM0Z9h0u6Hz5NyeA640cdQ-_VJvbXZsnQtGgfk7DR03VW3DzHm=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczPc3cHMNS9WauzvJu2tznP8tR4QdMnLE626sQ9YFlL_TVugKnpLGK89sTwTSILkuDH1uGPuqGR2DZo2vi3zK1b0KyQG5IiQcsiz9sEA4KiWJFKj-CIo=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczM6BjweceDPtlRMdUcFLKqc4PhL1bLPG0Pdde12OGwx-811MdQ2mPts0L0aW7nqu3t1eqbaJgRuBfAjGfkt9NQo6tKydfWbQiBP4q-DKwNn6JqcMsrq=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczMY6T4tvV8DgFb25TZjQ451RuqzAc3UGXKDFGuadYM-d3I76t9MrtcGm0zHKWAZIJovCs1ik3NKG_78LmvBTCdq5kGrWzMfeixM44yNka9zQ5-rYhai=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczP0iqd22gufa1Od7D2jsMWC5zvvPJxkaEOr3J8FPieERvv_4_uiyll_b8IpJ0-obkVo4CR3xzAwyKShE7QfPLYvmaaf8rTuhnjAc5_d2bsbzPzXh6x8=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczNvgQMk5t6iI9HIL-az_6brL6ezLSoOu0D1mnQANr15paA2-YtilX1K9D1sDbJkub5nY2wetFKs-dSPHDIP1NSBwcQO4mGkyHN5LFkh9cYkXAkCBjbY=w1920-h1080"></object>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-2xl capitalize mb-2'>Woodwork at makerspace</h3>
                <div className='flex'>
                  <script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js" async></script>
                  <div className="pa-gallery-player-widget w-128 h-128"
                    data-link="https://photos.google.com/share/AF1QipOxTJT7Y50Jfe3jnULKIy8JSB61YxTScEGBzNV1rCNhL3-RzuQZIjXzi5X0H2zTnw?key=SWh1UDJlMk83MmpNcHk2VHpaa1pleDY3eGlNX2pR"
                    data-title="Woodwork · Sep 22, 2020 – Jun 18, 2025 📸"
                    data-description="Shared album · Tap to view!">
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczP66iCgL78ZVadbqIfSl75nO437LmROx6FA7vah6Pr4Ams4b9q37Nvw--i1tqXsxsuQbhgLYVx47DebN2UPjlP0G2PFARx-13Myc5Qic3crOB1HnRuu=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczN8GRiBW6X925LWSKdvAKxGjGQWXibOMybAn39uh6fDa9cOYUpxUGhFC4igvyJ2pYl2x5Y0mum1t2VO7S4n99Y0bTF9Iw9yQ3eaGULZVdqykj_acOHb=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczO5BjxyPF4XbCDqe0f1Ou94B7WJjmwG4yKpMfD-xj31wTORgErO4MuFFYQyoj_wvq16Al655J-28AOJIsW2W6JxENUlLC-ZC7iyev4zziYUPPh3MnHa=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczOxyH4KvDIWC91C43FPPdwhRYKIkRQ3Ms2qViit3IAqy0hZcXMJpj4WMYdSkrlXxZ1CCH8tAPC8zciilbx1peQWZjSS9OU-GrvOCwi9w4JvPvXp3Z6t=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczMP2kYw-WohNapo_jPViwGcck8ZMCJ-gW1CRBGH-38mgASD3mUUboyTWag0eoCInYO73DpX0S16quLYfyIlP4cUUKLApBMWcTOjliVCmhrBJ6ymP-1F=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczNhyaxtBxlnIUhDZHD6Hm6VwnW_jAkwZ2nD1S35dh3vus-jfRGFSNjkBTm0id8_EbDT8qQsVM5dGBeKqvPi2YkA1nMI5crEGS4sRByadDqSsH7TzSjS=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczNaHY8KN-1OXqjzuB3gaH_xzTuwhjkmGQNr9tmweZzS0OCh3clyhiYtcs2nKnkKcGtBBRwdnWB-evvnRZUSUAo8jwLtj4oQnG3LMeZO16OJhtl4f9Zi=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczOUI4cRjAI8Lub2hCGVSy-jPqpJXWjP2EHY-8Y3xoqpwo-QmQn_Lm8Wamz-GB_lGrKdj8VeV1UsiiZjyUU2ii4oDMS7mdjsgI7dXKTuwa0HJBC-ZwoX=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczOZcP1YLf7SOHe6mWjV5zYf1brA8Gn8Q8ZteBexwXM4fVBJ4g_8xKiCxpA0MM2ex1RZ8t9aP-dSRx19lfIQzIZa8uqlZNVfECIYX4TyY6CZHjzMwA-s=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczOu24hBGWDXNRKYtYLWPcUd_83UBHgxbDeWTupnPKRVFBuP2UY_rlF004F7dPlDyCGaErgus_DqoGYt9hwGrm8rPCQXxeCTZcc7hDzFwWnLsYMwniUe=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczNo1QXLyQCC3QZU9FVe3WjU4jczNh8_vk6zN7uzdCyOs2ZsD3407mRDc4TEYxiTArSeIK3DFPZFl6wj2mitP_36DWb8dlPnQ8bdP7mX42jRS49NVl7E=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczO0H-d6CHlieiIsOV5apw_yj-krsWq1Ss-OKSNMpSzaHbZ3SCV1z1jXHNQyVMUEiy6INWnugDjyrKPloDAcNnTn93ysn6bfBI181PMeh1Uqu8N7qJ23=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczMGQHMlWsPo0y5AQS9ItBahrxXAmyj8pyy2VWNX9BtaNU9-w1l0cbRohFBdDAqSVf5yiRV4WZbnfdYeSZMfTytXom3bwGBly6JrkHrd0WW31o9YvSVx=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczN5XKXWzm45I1WIU6MeAtm1sLUuyVYarIA7UJnJgKcrrPyKOximGwsDIgZIyLypjakOKsd96l6dNH5JQ0yhN5nkRN5uzNjJDaJ2wiamgxX8C1n984Jz=w1920-h1080"></object>
                    <object data="https://lh3.googleusercontent.com/pw/AP1GczPj1MQnhMQsCr6DyWamEzx5ftRVCzY20H709zBhIRKJC-N5bW_Uou0tDZsSzJnfir2tGTSK8o8AUaAHNeqBNTYWF4nR2Wl3hkelOAB6DvV4fGdlpUuV=w1920-h1080"></object>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='flex flex-col z-10 p-8 md:p-16' id='contact'>
          <h1 className="text-4xl font-bold text-white mb-8 text-primary">Contact me</h1>
          <div className='flex gap-8 border-2 rounded-3xl p-8 border-[var(--primary-color)] bg-gray-800 h-full'>
            <p><FontAwesomeIcon icon={faEnvelope} /> Send me an email to <Link to={'mailto:pouya@mahpeikar.se'} className='link' target='_blank'>pouya@mahpeikar.se</Link></p>
          </div>
        </section>

      </div >

      {/* Back to Top Button */}
      {
        showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 border-2 border-[var(--primary-color)] backdrop-blur-sm text-primary p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 z-50 cursor-pointer"
          >
            <FontAwesomeIcon className='text-2xl' icon={faCaretUp} />
          </button>
        )
      }
    </>
  );
}

export default App;