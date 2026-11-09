import React from 'react'

// import images
import Headset1 from '../assets/img/headset-1.png'
import Headset2 from '../assets/img/headset-2.png'
import Headset3 from '../assets/img/headset-3.png'
import Headset4 from '../assets/img/headset-4.png'

const Headsets = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        {/* title */}
        <h2
          className="text-3xl font-bold mb-6"
          data-aos="fade-down"
          data-aos-offset="300"
        >
          Mixed Reality Headsets
        </h2>
        {/* grid */}
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          {/* item */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1000"
          >
            <img src={Headset1} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">Metaverse</h4>
              <p>
                Explore shared virtual spaces, attend live concerts and meet friends as
                lifelike avatars, all from your living room.
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1300"
          >
            <img src={Headset2} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">AIoT</h4>
              <p>
                Connect your smart home devices and control lights, music and climate
                with a simple gesture while you play.
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1600"
          >
            <img src={Headset3} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">HoloLens</h4>
              <p>
                Overlay digital models onto the real world: perfect for designers,
                engineers and students who learn by doing.
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1900"
          >
            <img src={Headset4} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">TPCASTT</h4>
              <p>
                Turn any room into a private cinema with immersive sound and a giant
                virtual screen that follows your gaze.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Headsets
