import Image from 'next/image';

import TestimonialImage01 from '@/public/images/founder1.png'; // Replace with images relevant to HoloLearn
import TestimonialImage02 from '@/public/images/founder2.png';

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Meet the Founders</h2>
            <p className="text-xl text-gray-400">
              {/* Content updated to reflect HoloLearn's offerings */}
              HoloLearn was founded by two Computer Science seniors from the New York University Abu Dhabi. We are passionate about education and believe that learning should be fun and engaging. We are excited to bring the future of education to you today!
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex h-full p-6 bg-gray-800" data-aos="fade-up">
              <div className="relative inline-flex flex-col mr-4">
                <Image className="rounded-full" src={TestimonialImage01} width={450} height={450} alt="Testimonial 01" />
              </div>
              <div className="flex flex-col justify-between">
                <blockquote className="text-lg pt-10 text-gray-400 grow">
                  "HoloLearn is the future of education. It's a great way to learn complex concepts in a fun and engaging way."
                </blockquote>
                <div className="text-gray-700 font-medium mt-20 pt-2 border-t border-gray-700 ml-[-150px]">
                  <cite className="text-gray-200 not-italic">Dev Kalavadiya</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="/">Co-founder - Web Developer</a>
                </div>
              </div>
            </div>

            {/* 2st testimonial */}
            <div className="flex h-full p-6 bg-gray-800" data-aos="fade-up">
              <div className="relative inline-flex flex-col mr-4">
                <Image className="rounded-full" src={TestimonialImage02} width={450} height={450} alt="Testimonial 02" />
              </div>
              <div className="flex flex-col justify-between">
                <blockquote className="text-lg pt-5 text-gray-400 grow">"HoloLearn aims to rethink and add a whole new dimension to the physical classroom environment, bringing traditional 2D educational content into a 3D virtual space"</blockquote>
                <div className="text-gray-700 font-medium mt-[3-rem] pt-2 border-t border-gray-700 ml-[-150px]">
                  <cite className="text-gray-200 not-italic">Hassan Hamdani Hussain</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="/">Co-founder - Game Developer</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

