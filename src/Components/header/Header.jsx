import PropTypes from "prop-types";


const Header = ({price,handleSetPr}) => {

 

  return (
    <div className="mb-2 ">
 
        
        
        {/* navbar  */}
       
      <div className=" w-11/12 mx-auto ">
        


  <div className="flex items-center justify-between sticky mt-0 rounded-lg p-4 top-0 border-2 bg-white bg-opacity-90  ">
<div> <img className="w-14" src="https://i.ibb.co.com/1KdpTgJ/logo.png" alt="player icon" /></div>
{/* nav right */}
<div>
<ul className=" flex items-center gap-4 text-[#131313B3]">
<li>Home</li>
<li>Fixture</li>
<li>Teams</li>
  <li>Schedules</li>
 <button  className="btn font-semibold"> {price} Coin <img className="w-6" src="https://img.icons8.com/?size=32&id=iidAQg5uv1BW&format=png" alt="" /></button>

 </ul>                
</div>
              

 </div>
 {/* Banner part */}
        <div className=" flex items-center justify-center flex-col space-y-5  text-center mt-10 bg-black  bg-[url('https://i.ibb.co.com/5WVpGQr/bg-shadow.png')] rounded-lg p-5">
          
        
          <div className="flex items-center justify-center"><img className="w-40" src="https://i.ibb.co.com/BCZJ4Y3/banner-main.png" alt="" /></div>  
          
          <h1 className="text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team </h1>

          <p className="text-white font-semibold ">Beyond Boundaries Beyond Limits</p>


          <div className=" border-2 border-yellow-300 rounded-lg  w-[190px] h-[80px] p-4 flex items-center justify-center ">
            <button className="w-[180px] h-[60px] font-semibold  bg-[#E7FE29]  rounded-lg px-2 py-2 " onClick={() => handleSetPr(6000000)}>Claim Free Credit</button>         
</div>
</div>      
            
</div>
       
</div>
  );
};
Header.propTypes = {
  price: PropTypes.number,
  handleSetPr:PropTypes.func
}

export default Header;