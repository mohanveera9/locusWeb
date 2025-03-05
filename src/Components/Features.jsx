import { useState } from "react";

export default function Features() {
  const [flipped, setFlipped] = useState(Array(6).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  // Array of unique images for each card
  const images = [
    "https://source.unsplash.com/300x300/?nature",
    "https://source.unsplash.com/300x300/?technology",
    "https://source.unsplash.com/300x300/?architecture",
    "https://source.unsplash.com/300x300/?travel",
    "https://source.unsplash.com/300x300/?food",
    "https://source.unsplash.com/300x300/?sports",
 
  ];

  return (
    <section className="p-8 text-center mx-4 sm:mx-10 md:mx-20 mt-[-25px]">
      <div className="lg:text-6xl text-3xl font-josefin font-semibold mt-3 text-[#00BF63]">
        Features
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10 mt-12">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[246px] [perspective:1000px]"
            onClick={() => handleFlip(index)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                flipped[index] ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front Side - Image */}
              <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden]">
                <img
                  src={image} // Each card gets a unique image
                  alt="Feature Image"
                  className="w-full h-full object-cover rounded-md"
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#00BF63] px-4 py-2 rounded-md font-semibold shadow-md hover:bg-gray-200 transition">
                Read more
                </button>
              </div>

              {/* Back Side - Text */}
              <div className="absolute w-full h-full bg-[#00BF63] text-white flex items-center justify-center rounded-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <p className="text-lg font-josefin px-4">This is a description about the feature.</p>
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-[#00BF63] px-4 py-2 rounded-md font-semibold shadow-md hover:bg-gray-200 transition">
                  Back
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
