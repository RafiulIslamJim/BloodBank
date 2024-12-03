import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div data-aos="zoom-out-up" >
      <div className="md:w-[100vw] mt-40 mx-auto  flex justify-center items-center py-10">
        <div className="text-[#010d6e] bg-gray-100 rounded-lg p-6 w-full shadow-xl max-w-6xl h-auto md:h-[80vh]">
          <h2 className="text-3xl font-extrabold text-red-600 border-b pb-4 pt-4 mb-4">SECBloodBond</h2>
          <p className="mb-4">
            Welcome to <span className="font-semibold">SECBloodBond</span>, the blood donation platform connecting students and alumni of Sylhet Engineering College. 
            Whether you’re here to register as a donor or to find help during critical moments, we aim to create a life-saving bond among SEC family members.
          </p>

          <h3 className="text-2xl font-bold text-red-600 mb-2">Why SECBloodBond?</h3>
          <p className="mb-4">
            Blood donation saves lives, and as a close-knit community, we can ensure no SECian feels helpless in emergencies. By registering as a donor or searching for available donors, 
            you're contributing to a culture of compassion and support within our community.
          </p>

          <h3 className="text-2xl font-medium text-red-600 mb-2">How Does It Work?</h3>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Register as a donor with your details and blood group.</li>
            <li>Search for donors by blood group and availability in emergencies.</li>
            <li>Contact donors directly and coordinate for help.</li>
          </ol>

          <h3 className="text-2xl font-medium text-red-600 mb-2">Benefits of Joining:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Create a network of life-saving heroes within the SEC community.</li>
            <li>Help ensure no SECian faces a blood crisis alone.</li>
            <li>Receive timely assistance during emergencies.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
