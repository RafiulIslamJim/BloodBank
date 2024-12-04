import "./ScrollingText.css";

const ScrollingText = () => {
  return (
    <div className="  mx-auto fixed top-16 left-0 right-0 z-50">
      <div className="flex items-center bg-[#010d6e] text-white overflow-hidden whitespace-nowrap w-full ">
        <h1 className="bg-red-600 text-white px-2 py-1 inline-block z-10">
          Notice:
        </h1>
        <div className="scrolling-text inline-block ml-4">
          <span className="text-red-600 font-bold">SECBloodBond</span>
          <span className="text-sm ml-2">
        এ আপনাকে স্বাগতম । SECBloodBond সিলেট ইঞ্জিনিয়ারিং কলেজের সাধারণ শিক্ষার্থীদের দ্বারা তৈরি একটি অনলাইন রক্ত দানের মাধ্যম । আপনারা যারা হলে থাকেন তাদের কেঊ রক্তের জন্য ফোন করলে রক্ত দিতে যাওয়ার পূরবে অবশ্যই সিনিয়রদের জানাবেন এবং বাসায় থাকলে অভিভাবকে জানিয়ে রক্ত দিতে যাবেন , যাতে পরাবর্তিতে কোন অনাকাঙ্ক্ষিত বিপদে না পরেন । 
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
