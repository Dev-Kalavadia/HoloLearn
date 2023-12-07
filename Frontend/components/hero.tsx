import VideoThumb from '@/public/images/hero-image-01.jpg';
import ModalVideo from '@/components/modal-video';
import Image from 'next/image'; // Import the Image component from Next.js
import { Link } from 'react-router-dom';

// ...


export default function Hero() {
  return (
    <section className="text-white bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative py-18 mt-10">
        {/* Header - could be a separate component */}
        <div className="flex flex-row-reverse items-center justify-center mt-20">
          {/* Image */}
          <div className="w-1/2" data-aos="fade-up" data-aos-delay="400">
            <Image
              src="/images/virtual-reality.png"
              alt="Virtual Reality Experience"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
          {/* Text */}
          <div className="w-1/2 text-left mt-20" data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">HoloLearn: Gateway to Future Learning</h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8">
              Revolutionizing the study experience, our platform transforms static textbook content into dynamic, interactive 3D visuals. With an integrated chatbot that serves as a personalized tutor, learners can engage with immersive content and receive guided assistance, turning every page into a journey of exploration and personalized learning.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-8 mt-8 pb-8">
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4" data-aos="fade-up" data-aos-delay="600">
            <a className="btn bg-blue-600 hover:bg-blue-700 w-full sm:w-auto py-3 px-8 rounded-lg transition-all duration-300 mb-4 sm:mb-0" href="/bookDemo">Book A Demo</a>
            <a className="btn bg-gray-700 hover:bg-gray-800 w-full sm:w-auto py-3 px-8 rounded-lg transition-all duration-300" href="/aboutUs">Learn more</a>
          </div>
        </div>

        <ModalVideo
          thumb={VideoThumb}
          thumbWidth={1920}
          thumbHeight={1080}
          thumbAlt="Modal video thumbnail"
          video="/videos/video.mp4"
          videoWidth={1920}
          videoHeight={1080}
        />
      </div>
    </section>
  );
}
