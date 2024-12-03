import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Totalreg = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="zoom-out-up"
      className=" mb-10 flex items-center justify-center"
    >
      <div className="stats md:w-[91vw] bg-[#010d6e] text-primary-content">
        <div className="stat">
          <div className="stat-title text-white">Total Donars</div>
          <div className="stat-value text-red-600">89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success text-white">Check All</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-white">Available Donars</div>
          <div className="stat-value text-green-500">89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success text-white">Check All</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Totalreg;
