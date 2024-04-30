const ProductSection = () => {
  return (
    <div>
      <div className="relative flex  justify-center">
        <img
          className="w-full h-[514px] object-cover "
          src="https://i.postimg.cc/bJ6D6J9Z/4ede02c489cde9ca7f4c9e878a48665e.jpg"
          alt=""
        />
        <div className="absolute top-4 text-white text-center">
          <h1 className="text-[50px] font-bold ">iPhone 15 Pro</h1>
          <p className="text-[25px]">Titanium. So strong. So light. So Pro.</p>
          <div className="flex gap-4 justify-center mt-4">
            <button className="bg-blue-600 text-[17px] text-white px-4 py-2 rounded-full">
              Learn more
            </button>
            <button className=" text-[17px] text-blue-600 border border-blue-600 hover:text-white hover:bg-blue-600 px-4 py-2 rounded-full">
              Buy
            </button>
          </div>
        </div>
      </div>
      <div className="relative flex  justify-center">
        <img
          className="w-full h-[514px] object-cover "
          src="https://i.postimg.cc/gcsf6QbJ/f6962e6940816d30f8b47b1dbb7d39b6.jpg"
          alt=""
        />
        <div className="absolute top-4  text-center">
          <h1 className="text-[50px] font-bold ">iPhone 15 </h1>
          <p className="text-[25px]">New camera. New design. Newphoria.</p>
          <div className="flex gap-4 justify-center mt-4">
            <button className="bg-blue-600 text-[17px] text-white px-4 py-2 rounded-full">
              Learn more
            </button>
            <button className=" text-[17px] text-blue-600 border border-blue-600 hover:text-white hover:bg-blue-600 px-4 py-2 rounded-full">
              Buy
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductSection;
