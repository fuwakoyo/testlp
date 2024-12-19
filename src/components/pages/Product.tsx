import React from 'react'
import Image from 'next/image'

const Product = () => {
  return (
    <div className="py-8" >
        <div className="flex justify-center">
          <p className="text-[50px]">Product</p>          
        </div>
        <div className="mb-10 lg:mb-0 rounded-lg overflow-hidden justify-center flex space-x-8 pt-5 ">
            <div>
                <Image alt="feature" className="object-cover object-center hover:scale-110 transition duration-700 rounded h-[400] w-[400]" width={400} height={400} src="/TWO ROOMS.jpg"/>
                <p className="pt-5 text-center text-[20px]">title</p>
                <div className="max-w-96 pt-5">                    
                    <p className="break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa et alias sit autem rerum tempora adipisci earum iste rem repellat.</p>
                </div>
            </div>
            <div>
                <Image alt="feature" className="object-cover object-center hover:scale-110 transition duration-700 rounded h-[400] w-[400]" width={400} height={400} src="/TWO ROOMS.jpg"/>
                <p className="pt-5 text-center text-[20px]">title</p>
                <div className="max-w-96 pt-5">                    
                    <p className="break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa et alias sit autem rerum tempora adipisci earum iste rem repellat.</p>
                </div>
            </div>
            <div>
                <Image alt="feature" className="object-cover object-center hover:scale-110 transition duration-700 rounded h-[400] w-[400]" width={400} height={400} src="/TWO ROOMS.jpg"/>
                <p className="pt-5 text-center text-[20px]">title</p>
                <div className="max-w-96 pt-5">                    
                    <p className="break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa et alias sit autem rerum tempora adipisci earum iste rem repellat.</p>
                </div>
            </div>
            <div>
                <Image alt="feature" className="object-cover object-center hover:scale-110 transition duration-700 rounded h-[400] w-[400]" width={400} height={400} src="/TWO ROOMS.jpg"/>
                <p className="pt-5 text-center text-[20px]">title</p>
                <div className="max-w-96 pt-5">                    
                    <p className="break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa et alias sit autem rerum tempora adipisci earum iste rem repellat.</p>
                </div>
            </div>
        </div>
        
        <style>
          {`
            @keyframes marquee {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-100%);
              }
            }

            .animate-marquee {
              animation: marquee 15s linear infinite;
            }
          `}
        </style>
    </div>
  )
}

export default Product
