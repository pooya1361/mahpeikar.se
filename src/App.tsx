// src/App.tsx
import { faCaretUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';
import makespaceLogo from './assets/Uppsalamakerspace.png';
import { PhotoGallery } from './components/PhotoGallery';
import './fa-icons'; // Import your icon library
import { getSketchingPhotos, getWoodWorkingPhotos } from './photos';
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

        <section className='section' id='portfolio'>
          <h1 className="text-4xl font-bold text-white mb-8 text-primary">PORTFOLIO</h1>
          <div className='flex flex-col sm:flex-row gap-8 min-h-min border-2 rounded-3xl p-8 border-[var(--primary-color)] bg-gray-800 h-full'>
            <div className='block w-full'>
              <div className='flex justify-center items-center bg-white md:min-w-72 md:min-h-72 rounded-2xl'>
                <img className="origin-top-left" src={makespaceLogo}></img>
              </div>
            </div>
            <div className='flex flex-col'>
              <h3 className='text-3xl font-bold capitalize mb-6'>Uppsala Makerspace lesson scheduler</h3>
              <p className='mb-6 flex-1'>
                This project, "Makerspace," is a full-stack application designed to manage scheduled lessons, proposed time slots, and user interactions with comprehensive authentication and authorization. It demonstrates a modern technology stack deployed on AWS with robust security, testing practices, and dual API architecture supporting both REST and GraphQL.
              </p>
              <h3 className='text-2xl font-bold capitalize mb-2'>Background</h3>
              <p className='mb-6 flex-1'>
                There are lessons in makerspace offered by skilled members for new members to learn how to use the machinery in the workshops (a.k.a introdution lessons) and other lessons for a specific skill. There's no system to organize these lessons. Members usually write to a Slack channel and show their interest. A instructor announces a lesson in the channel and suggested a few time slots. Members have to have an eye on the channel and hope for the best to match their time with one of suggested times. If you miss it, you might be lucky next time!
              </p>
              <h3 className='text-2xl font-bold capitalize mb-2'>Solution</h3>
              <p className='mb-6 flex-1'>
                This app makes it easy for instructors and members. Here's what can be done with Uppsala Makerspace lesson scheduler:
              </p>
              <div className='md:px-8'>
                <span>As a member:</span>
                <ul className='list-disc list-inside'>
                  <li>Register an account</li>
                  <li>See workshops, activities, lessons, scheduled lessons and proposed time slots</li>
                  <li>Apply for desired lessons</li>
                  <li>Vote for proposed time slots</li>
                  <li>Get notified when a new lesson is scheduled or a scheduled lesson gets start time</li>
                </ul>
                <span className='block mt-3'>As an instructor:</span>
                <ul className='list-disc list-inside'>
                  <li>See, add and modify workshops, activities, lessons, scheduled lessons and proposed time slots</li>
                  <li>Register vote for members</li>
                  <li>Choose a start time from proposed time slots based on the votes</li>
                </ul>
              </div>
              <div className='flex flex-col mt-8'>
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

        <section className='section' id='resume'>
          <h1 className="text-4xl font-bold text-white mb-8 text-primary">RESUMÉ</h1>
          <div className='flex flex-col gap-8 border-2 rounded-3xl p-8 border-[var(--primary-color)] bg-gray-800 h-full md:min-h-screen'>
            <p>
              Download my CV from <a href="/Pouya_Mahpeikar_CV_EN_2025_09.pdf" className='link' target='_blank'>here</a>
            </p>
            <iframe
              src={`https://docs.google.com/gview?url=${encodeURIComponent(
                "https://pouya.mahpeikar.se/Pouya_Mahpeikar_CV_EN_2025_09.pdf"
              )}&embedded=true`}
              className="w-full h-screen"
              frameBorder="0"
            />
          </div>
        </section>

        <section className='section' id='freetime'>
          <h1 className="text-4xl font-bold text-white mb-8 text-primary">When I'm not coding ...</h1>
          <div className='flex flex-col gap-4 border-2 rounded-3xl p-4 md:p-8 border-[var(--primary-color)] bg-gray-800 h-full'>
            <p>In my free time:</p>

            <div className='flex flex-col gap-8'>
              <div className='flex flex-col w-full max-h-[80vh] min-h-[80vh] overflow-hidden'>
                <PhotoGallery
                  photos={getSketchingPhotos()}
                  title="Sketching and painting"
                />
              </div>

              <div className='flex flex-col w-full max-h-[80vh] min-h-[80vh] overflow-hidden'>
                <PhotoGallery
                  photos={getWoodWorkingPhotos()}
                  title="Woodworking at MakerSpace"
                />
              </div>
            </div>
          </div>
        </section>

        <section className='section' id='contact'>
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