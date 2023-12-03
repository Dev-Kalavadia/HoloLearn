import Image from 'next/image';

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'; // Replace with images relevant to HoloLearn
import TestimonialImage02 from '@/public/images/testimonial-02.jpg';
import TestimonialImage03 from '@/public/images/testimonial-03.jpg';
import TestimonialImage04 from '@/public/images/testimonial-04.jpeg';

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Don't take our word for it</h2>
            <p className="text-xl text-gray-400">Discover how HoloLearn is changing the educational landscape by turning every lesson into an immersive and interactive experience.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-4 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              {/* Content updated to reflect HoloLearn's offerings */}
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                {/* ... */}
              </div>
              <blockquote className="text-lg text-gray-400 grow">"HoloLearn's immersive 3D environments make learning complex concepts a breeze. It's like stepping into a new world of knowledge."</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Jordan Lee</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Teacher</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="100">
              {/* Content updated to reflect HoloLearn's offerings */}
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                {/* ... */}
              </div>
              <blockquote className="text-lg text-gray-400 grow">"HoloLearn's interactive modules make learning fun and engaging. I wish I had this when I was in school!"</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Daniel D'souza</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Student</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              {/* Content updated to reflect HoloLearn's offerings */}
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                {/* ... */}
              </div>
              <blockquote className="text-lg text-gray-400 grow">"The personalized learning experience is a game-changer. I can't imagine learning any other way. The interactive Chatbot integrated with AI and summarized notes just makes learning so much easier!"</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Dominica Cruz</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Parent</a>
              </div>
            </div>

            {/* 4th testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              {/* Content updated to reflect HoloLearn's offerings */}
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage04} width={48} height={48} alt="Testimonial 01" />
                {/* ... */}
              </div>
              <blockquote className="text-lg text-gray-400 grow">"HoloLearn's dashboard has transformed my teaching experience. Its seamless asset upload and management, coupled with the innovative QR code generator, provide quick and easy access to educational resources."</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Jessica Jackson</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Educator</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

