

const Subscribe = () => {
  return (
    <div className="relative  ">
      <div className=" border rounded-lg lg:w-[1020px] lg:h-[380px]  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  absolute  ">
        <div className="lg:w-[1000px]   h-[330px] space-y-5 text-center absolute    bg-[url('https://i.ibb.co.com/5WVpGQr/bg-shadow.png')]  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-lg p-5">
        <h2>Subscribe to our Newsletter</h2>
        <p>Get the latest updates and news right in your inbox!</p>
         <div className="">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered " />
       <button className="btn ml-2
        bg-[red] font-bold text-lg
        join-item text-white">Subscribe</button>
      </div>


      </div>
      </div>
    </div>
  );
};

export default Subscribe;