

const Footer = () => {
  return (
    <div>

      <footer className=" bg-black pt-56 text-white rounded-xl p-10 w-11/12 mx-auto">
        
        <div className="mb-7 lg:flex items-center justify-center"> <img className="w-16" src="https://i.ibb.co.com/f94gMYC/logo-footer.png" alt="" /></div>


        <div className="lg:grid grid-cols-3">
           
          <aside className="w-3/5">
            <h3 className="font-bold text-xl">About Us</h3>
        <p>We are a passionate team dedicated to providing the best services to our customers.</p>
          </aside>
          <nav  className="lg:pl-10 ">
            <h3 className="font-bold text-xl">Quick Links</h3>
            <ul className="text-gray-400 list-disc">
                <li> Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          </nav>
          <nav className="space-y-3">
          <h3 className="font-bold text-xl">Subscribe</h3>
            <p className="text-gray-500">Subscribe to our newsletter for the latest updates.</p>
         
                <div className="join">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered join-item" />
       <button className="btn 
        bg-[red] font-bold text-lg
        join-item text-white">Subscribe</button>
      </div>
      

          </nav>
       </div>
  <p className="text-center mt-10 text-white opacity-65">@2024 Your Company All Rights Reserved.</p>
</footer>
    </div>
  );
};

export default Footer;