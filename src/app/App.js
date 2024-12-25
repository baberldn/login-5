import React from 'react';

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen relative bottom-5">
      <div className="bg-white w-[1500px] h-[800px] relative">
        <div className="flex justify-between items-center w-full h-[70px] bg-[#095F59] px-5">
          <div className="w-[200px] h-[60px] bg-[#095F59] flex justify-center items-center">
            <p className='text-white text-[40px] font-bold'>SHEY</p>
          </div>
          <div className="w-[400px] h-[60px] bg-[#095F59] flex justify-center items-center">
            <ul className="flex p-0 m-0 list-none">
              <li className="mx-5 text-white cursor-pointer text-[20px]">Home</li>
              <li className="mx-5 text-white cursor-pointer text-[20px]">Services</li>
              <li className="mx-5 text-white cursor-pointer text-[20px]">Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="w-[600px] h-[500px] bg-white absolute top-[55%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-10 shadow-[0px_15px_30px_rgba(0,_0,_0,_0.2),_0px_10px_40px_rgba(0,_0,_0,_0.15),_0px_0px_60px_rgba(0,_0,_0,_0.1),_0px_0px_30px_10px_rgba(255,_255,_255,_0.3)]">
          <h2>
            <div className="text-[70px] font-medium leading-[97.52px] tracking-[2px] text-left text-[#095F59D6] mt-[30px] ml-[20px]">
              <span>L</span>
              <span>O</span>
              <span>G</span>
              <span>I</span>
              <span>N</span>
            </div>
          </h2>
          <form>
         <div className="mb-[15px]">
              <input
                type="email"
                id="email"
                className="w-[80%] p-[0.8rem] text-[1rem] border-[1px] border-[#ccc] rounded-[6px] outline-none ml-[20px]"
                placeholder="Username"
                required
              />
        </div>

        <div className="mb-[15px]">
             <input
                type="password"
                id="password"
                className="w-[80%] p-[0.8rem] text-[1rem] border-[1px] border-[#ccc] rounded-[6px] outline-none ml-[20px]"
                placeholder="Password"
                required
              />
            </div>

        <button type="submit" className="w-[182px] h-[54px] rounded-[10px] bg-[#095F59D6] text-white flex justify-center items-center cursor-pointer ml-[20px]">
              <p className="text-[20px] font-normal leading-[30.48px] text-center bg-transparent border-none opacity-100 cursor-pointer tracking-[2px]">
                LOGIN
              </p>
            </button>
          </form>

        <div className='separator'>
            <div className='flex justify-center items-center w-[550px] mt-[20px]'>
                
        <div className='flex-grow h-[1px] border-t-[1px] border-[#101A1C] opacity-[1] mx-[20px]'></div>
        <div className='text-[20px] font-semibold text-[#101A1C] text-center'>OR</div>
        <div className='flex-grow h-[1px] border-t-[1px] border-[#101A1C] opacity-[1] mx-[20px]'></div>
        </div>

        

        <div className="flex justify-start items-center space-x-10 ml-56 mt-4">
         <img src="./images/image2.png" alt="Google" className="w-[30px] h-[30px] object-cover rounded-[10px]" />
        <img src="./images/image3.png" alt="Facebook" className="w-[30px] h-[30px] object-cover rounded-[10px]" />
        </div>

        <p className="text-[25px] font-normal text-center mt-[40px] ml-[20px] text-[#095F59BF]">
          Not yet registered, <span>Click here to sign up</span>
     </p>
        </div>
        </div>

          <div className='absolute top-[55%] left-[10%] w-[185px] h-[185px] rounded-full bg-[#095F59D6] border-[23px] border-[#02B94B1A] z-[10]'></div>
           </div>

   
           <div className="absolute bottom-[10px] w-[1500px] h-[500px] bg-[#095F59] clip-footer">
        <div className="absolute bottom-[-30px] right-[-50px] w-[185px] h-[185px] rounded-full bg-[#095F59D6] border-[23px] border-[#02B94B1A] z-[10]"></div>
      </div>
    </div>
  );
};

export default App;
