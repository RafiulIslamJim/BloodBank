import { useEffect, useState, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgimage1 from '../assets/sec1.jpg';
import bgimage2 from '../assets/sec2.jpg';
import bgimage3 from '../assets/sec3.jpg';
import bgimage4 from '../assets/sec4.jpg';
import bgimage6 from '../assets/sec6.jpg';
import bgimage7 from '../assets/sec7.jpg';
import bgimage8 from '../assets/sec8.jpg';
import bgimage9 from '../assets/sec9.jpg';

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState(bgimage1);

  // Memoize the bgImages array to prevent unnecessary re-creation
  const bgImages = useMemo(
    () => [
      bgimage1,
      bgimage2,
      bgimage3,
      bgimage4,
      bgimage6,
      bgimage7,
      bgimage8,
      bgimage9
    ],
    []
  );

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });

    // Change background image every 5 seconds
    const interval = setInterval(() => {
      setBackgroundImage((prevImage) => {
        const currentIndex = bgImages.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % bgImages.length; // Loop to the first image after the last
        return bgImages[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [bgImages]);
  // md:px-10 py-10 sm:py-12 md:py-16 lg:py-20
  return (
    <section
    id="home"
    data-aos="fade-up"
    className="h-[35vh] md:h-[65vh] container mx-auto mb-10 flex justify-between items-center shadow-2xl text-white relative top-16 sm:px-8 overflow-hidden md:rounded-badge"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'background-image 1s ease-in-out', // Smooth transition effect
    }}
  >
    <div className="flex flex-col justify-center items-center lg:items-start gap-6 sm:gap-8 md:gap-10 w-full lg:w-2/3">
      <h1
        data-aos="zoom-in"
        className="sm:text-4xl  md:text-5xl lg:text-6xl font-bold text-center lg:text-start"
      >
        <br /> 
      </h1>
      <h1
        data-aos="zoom-in-down"
        className="text-lg sm:text-xl md:text-2xl  font-semibold"
      >
       
      </h1>
    </div>
  </section>
  );
};

export default Hero;
