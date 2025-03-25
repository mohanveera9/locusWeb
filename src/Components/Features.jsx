import { useState } from "react";
import Loctionw from "../assets/location.png";
import Community from "../assets/community.jpg";
import Message from "../assets/message.png";

export default function Features() {
  const [flipped, setFlipped] = useState(Array(3).fill(false));

  const handleFlip = (index, e) => {
    e?.stopPropagation();
    setFlipped((prev) => {
      const newFlipped = [...prev].map((_, i) => i === index ? !prev[index] : false);
      return newFlipped;
    });
  };

  // Feature data with images and descriptions
  const features = [
    {
      image: Community,
      title: "Explore",
      description: "Dive into local events, community groups, and neighborhood insights. Stay informed about what's happening around you in real-time.",
      details: "Uncover local events, join community groups, and gain deep insights into your neighborhood. Your gateway to local discoveries and connections."
    },
    {
      image: Loctionw,
      title: "Map",
      description: "Select your preferred radius and discover people, events, and connections within your local area. Control your social exploration with precise geographical targeting.",
      details: "Customize your social radius and explore your neighborhood. Choose the area you want to interact in, and connect with nearby communities effortlessly."
    },
    {
      image: Message,
      title: "Chat",
      description: "Interact with people in your selected radius through real-time messaging. Send posts, receive interactions, and connect personally.",
      details: "Send friend requests, engage in personal chats, and build meaningful connections with people nearby. Your local communication hub."
    }
  ];

  return (
    <section className="p-8 text-center mx-4 sm:mx-10 md:mx-20 mt-[-25px]">
      <div className="lg:text-6xl text-3xl font-josefin font-semibold mt-3 text-[#00BF63]">
        Features
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative w-full h-[400px] [perspective:1000px]"
            onClick={() => handleFlip(index)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                flipped[index] ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front Side - Image */}
              <div className="absolute w-full h-full backface-hidden [backface-visibility:hidden] flex flex-col">
                <div className="w-full h-[250px] flex items-center justify-center rounded-t-md overflow-hidden bg-gray-100">
                  <img
                    src={feature.image}
                    alt={`Feature: ${feature.title}`}
                    className="w-auto h-[200px] max-w-full object-contain"
                  />
                </div>
                <div className="flex-grow bg-white border-x border-b rounded-b-md flex flex-col justify-between p-4 shadow-md">
                  <div>
                    <h3 className="text-xl font-bold text-[#00BF63] mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{feature.description}</p>
                  </div>
                  <button 
                    className="mt-2 bg-[#00BF63] text-white px-4 py-2 rounded-md font-semibold shadow-md hover:bg-[#00a854] transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFlip(index, e);
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>

              {/* Back Side - Description */}
              <div 
                className="absolute w-full h-full bg-[#00BF63] text-white flex flex-col justify-between rounded-md [backface-visibility:hidden] [transform:rotateY(180deg)] p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg font-josefin text-center mb-6">
                    {feature.details}
                  </p>
                </div>
                <button
                  onClick={(e) => handleFlip(index, e)}
                  className="w-full bg-white text-[#00BF63] px-4 py-2 rounded-md font-semibold shadow-md hover:bg-gray-200 transition"
                >
                  Back to Features
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}