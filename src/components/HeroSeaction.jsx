
const HeroSeaction = () => {
    return (
        <div className="relative flex justify-center">
          <img className=" w-full  " src="https://i.postimg.cc/B6NDdN4Q/hghg.jpg" alt="" />  
          <div className="w-1/3 text-center space-y-1 absolute  top-0  ">
            <h1 className="text-[50px] font-bold">Apple 2030 </h1>
            <p className="text-[25px]">A plan as innovative as our products.</p>
            <button className="bg-blue-600 text-[17px] text-white px-4 py-2 rounded-full">Learn more</button>
          </div>
        </div>
    );
};

export default HeroSeaction;