import { images } from './CarouselItems'
import { useState, useEffect } from 'react'
import { Circle, MoveRight, MoveLeft } from 'lucide-react'

/**
 * Carousel component that displays a rotating set of images with navigation buttons.
 *
 * @component
 * @returns {JSX.Element} The Carousel component rendering images with navigation and text.
 */
function Carousel() {
  /**
   * State to track the index of the currently displayed image.
   * 
   * @type {number}
   */
  const [imageIndex, setImageIndex] = useState(0);

  /**
   * Function to handle the selection of an image when a circle button is clicked.
   *
   * @param {number} imageIdx - The index of the selected image.
   */
  const handleCircleBtn = (imageIdx) => {
    setImageIndex(imageIdx);
  }

  /**
   * Function to handle the left/right arrow button click to change the image.
   * 
   * The image index is incremented and wraps around using the modulo operator.
   */
  const handleArrowBtn = () => {
    setImageIndex((imgIdx) => (imgIdx + 1) % images.length);
  }

  // Duration for the automatic slide change (4 seconds)
  const autoSlideDuration = 4000;

  /**
   * useEffect hook to automatically slide to the next image after a set interval.
   * 
   * The timer is cleared when the component unmounts or the imageIndex changes.
   */
  useEffect(() => {
    const timerId = setTimeout(() => {
      setImageIndex((imageIndex + 1) % images.length)
    }, autoSlideDuration);
    
    return () => clearTimeout(timerId);
  }, [imageIndex, images]);

  return (
    <section className="relative w-full carousel-container" style={{ height: "35rem" }}>
      <div className="image-container m-auto w-full" style={{ height: "35rem" }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.name}
            alt={`carousel image ${image.id}`}
            className={`absolute inset-0 w-full transition-all duration-1000 ease-in-out ${imageIndex === image.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ height: "35rem" }}
          />
        ))}
      </div>

      {/* Left Arrow Button */}
      <div className="sm:hidden absolute z-30 top-1/2 transform -translate-y-1/2 p-1 bg-slate-200 rounded-full left-1" onClick={handleArrowBtn}>
        <MoveLeft size={10} strokeWidth={2} />
      </div>

      {/* Right Arrow Button */}
      <div className="sm:hidden absolute z-30 top-1/2 transform -translate-y-1/2 p-2 bg-slate-200 rounded-full right-1" onClick={handleArrowBtn}>
        <MoveRight size={10} strokeWidth={2} />
      </div>

      {/* Circle Navigation Buttons */}
      <div id="circle-buttons" className="hidden sm:visible absolute bottom-0 w-full sm:flex justify-center items-center z-30">
        {images.map((image, index) => (
          <div key={index + 100} className="">
            <button onClick={() => handleCircleBtn(image.id)} className="p-2">
              <Circle color={index === imageIndex ? 'black' : "white"} strokeWidth={3} />
            </button>
          </div>
        ))}
      </div>

      {/* Overlay for visual effect */}
      {/* <div id="overlay" className="absolute bottom-0 top-0 w-full bg-black z-20 bg-opacity-30" style={{ height: "35rem" }}></div> */}

      {/* Text Content Over Carousel */}
      <div id="carousel-text" className="absolute top-0 w-full" style={{ height: "35rem" }}>
        <div id="text-body" className="flex flex-col justify-center items-center w-full p-10 z-30" style={{ height: "35rem" }}>
          {/* Welcome Message */}

          <div id="welcome-note" className="z-30 w-full">
            <h2 style={{WebkitTextStroke:"2px rgba(0,0,0,8)"}} className="text-3xl tracking-wider md:text-4xl w-full flex flex-wrap justify-center text-center space-x-2 font-black bg-gradient-to-r from-sky-700  to-sky-950 bg-clip-text text-transparent">
              <span>Welcome</span> <span>To</span> <span>TEMSMET 2025</span>
            </h2>
          </div>

          {/* Conference Name */}
          <div className="relative z-30 mt-0.5 p-[10px] sm:p-[15px]">
            <div className="absolute inset-0 bg-black bg-opacity-60  z-[-1]"></div>
            <p className="flex flex-col text-center text-[#FEE2E2] leading-relaxed px-1.5 text-sm md:text-lg lg:text-xl xl:text-2xl">
              <span>IEEE 4th International Conference</span>
              <span>on</span>
              <span>Technology, Engineering, Management for Societal Impact</span>
              <span>using</span>
              <span>Marketing, Entrepreneurship, and Talent (TEMSMET)</span>
            </p>
          </div>


          {/* Date and Venue */}
          <div className="relative z-30 mt-1.5 p-[10px] sm:p-[15px]">
            <div className="absolute inset-0 bg-black bg-opacity-60 z-[-1]"></div>
            <p className="flex flex-col text-center text-[#FEE2E2] leading-relaxed px-1.5 text-sm md:text-lg lg:text-xl xl:text-2xl">
              <span>08-10 October 2025</span>
              <span>National Institute of Technology Delhi</span>
              <span>New Delhi, India</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel;
