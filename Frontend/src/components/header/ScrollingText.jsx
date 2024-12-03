import "./ScrollingText.css";

const ScrollingText = () => {
  return (
    <div className=" container mx-auto fixed top-16 left-0 right-0 z-50">
      <div className="flex items-center bg-[#010d6e] text-white overflow-hidden whitespace-nowrap w-full ">
        <h1 className="bg-red-600 text-white px-2 py-1 inline-block z-10">
          Notice:
        </h1>
        <div className="scrolling-text inline-block ml-4">
          <span className="text-red-600 font-bold">SECBloodBond</span>
          <span className="text-sm ml-2">

          </span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
