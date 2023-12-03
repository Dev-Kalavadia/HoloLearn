export default function Blocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Discover the New Dimension of Learning</h2>
            <p className="text-xl text-gray-400">
              Experience our immersive VR platform that transforms how knowledge is absorbed. Dive into a world where learning is no longer confined to pages but enveloped in interactive, holographic realities.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              {/* ... Rest of the SVG icon */}
              <h4 className="h4 mb-2">Interactive Learning</h4>
              <p className="text-lg text-gray-400 text-center">
                Step into interactive sessions where every concept is visualized in 3D, enabling a deeper understanding and a stronger retention of the material.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              {/* ... Rest of the SVG icon */}
              <h4 className="h4 mb-2">Personalized Tutoring</h4>
              <p className="text-lg text-gray-400 text-center">
                Our intelligent chatbot tutor adapts to your pace and style, offering customized support and guidance throughout your learning journey.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              {/* ... Rest of the SVG icon */}
              <h4 className="h4 mb-2">Engaging Curriculum</h4>
              <p className="text-lg text-gray-400 text-center">
                Engage with an ever-expanding curriculum across various subjects, making complex information accessible and enjoyable.
              </p>
            </div>

            {/* 4th item */}
            {/* ... Additional items as needed, following the same pattern */}

          </div>

        </div>
      </div>
    </section>
  )
}
