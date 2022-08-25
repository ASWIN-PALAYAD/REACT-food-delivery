import React from 'react'
import Delivery from '../images/delivery.png'
import HeroBg from '../images/heroBg.png'


const HomeContainer = () => {
  return (
    <section id='home' className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>

        {/* left side view */}

      <div className="py-2 flex-1 flex flex-col items-start  justify-center gap-6">
        <div className='flex items-center gap-2 justify-center bg-orange-100 p-2
          px-4 py-1 rounded-full'>
          <p className=' text-orange-500 font-semibold'>Bike Delivery</p>
          <div className='w-6 h-6 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img src={Delivery} className='w-full h-full object-contain' alt="delivery" />

          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>
          The Fastest Delivery in
          <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span>
        </p>

        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorum commodi adipisci quis nam velit ex perferendis facere dolore provident nostrum voluptate aliquid, repudiandae perspiciatis? Quis architecto laborum atque perspiciatis!
        </p>

        <button type='button'
                className='bg-gradient-to-br from-orange-300 to-orange-500 w-full md:w-auto px-4 py-2
                rounded-2xl hover:shadow-lg transition-all ease-in-out'
        >
          Order Now
          </button>


      </div>


        {/* right side view */}

      <div className="py-2 flex-1 flex items-center">

            <img src={HeroBg} className=' h-400 w-full lg:w-auto lg:h-650 ml-auto ' alt="herobg" />

            <div className='w-full h-full absolute flex items-center justify-center'>

            </div>
         
      </div>


    </section>
  )
}

export default HomeContainer