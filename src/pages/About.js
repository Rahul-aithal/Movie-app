import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const About = () => {
  const [idx, setIdx] = useState(0)
  const imgaes = [
    {
      id: 3183150,
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 1679618,
      image: "https://images.pexels.com/photos/1679618/pexels-photo-1679618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2306897,
      image: "https://images.pexels.com/photos/2306897/pexels-photo-2306897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  return (
    <div className="container mx-auto p-4 h-screen ">
      <h1 className="text-3xl font-bold mb-4 text-white">About Our Team</h1>
      <div className='grid grid-cols-1 gap-4 place-items-center'>
        <div className='bg-black bg-opacity-30 flex items-center px-2 py-1 rounded shadow-xl '>
          <div className='text-white m-2 cursor-pointer' onClick={() => { console.log(idx);
          setIdx(idx !== 0 ? idx - 1 : idx)
             }} ><FaArrowLeft /></div>
          <img className='h-96 ' src={imgaes[idx]?.image} alt={imgaes[idx]?.id} />
          <div className='text-white m-2 cursor-pointer' onClick={() => { console.log(idx);
           setIdx(idx !== 2 ? idx + 1 : idx)  }}>
<FaArrowRight />
           </div>

        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
          <p className="text-lg">
            We are a dedicated team passionate about creating innovative solutions for our users.
          </p>
          <p className="text-lg mt-4">
            Meet the Team:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Rahul Aithal</h2>
              <p>Founder & Developer</p>
              <p className="text-gray-600">Lead developer and creative mind behind the project.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
