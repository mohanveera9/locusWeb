export default function About() {
  return (
    <section id="about" className="p-6 md:p-12">
      {/* Heading */}
      <div className="text-3xl md:text-5xl lg:text-6xl font-josefin font-semibold mt-3 text-[#00BF63] text-center">
        About Us
      </div>

      {/* Intro Text */}
      <div className="mt-6 md:mt-8 lg:pl-24 text-gray-700 font-josefin text-xl md:text-2xl lg:text-3xl leading-relaxed">
        <span className="font-[500] text-[#00BF63] text-5xl md:text-8xl ">L</span>
        <span className="font-bold text-[#00BF63] text-[30px] md:text-[40px]">ocus:</span>
        <span className="font-josefin">{" "}Explore where you are. It’s your go-to platform to discover and engage with people around you.</span>
      </div>

      {/* How It Works Section */}
      <div className="text-2xl md:text-3xl font-bold mt-8 text-[#00BF63] lg:pl-20">
        How it works?
      </div>

      {/* List */}
      <ul className="text-lg md:text-2xl lg:text-3xl mt-4 list-disc pl-6 md:pl-14 lg:pl-28 font-josefin text-gray-700 leading-relaxed">
        <li>By selecting the radius of an area on the map, you can interact with people in that radius in real time.</li>
        <li>On the explore tab, you can see local events happening, community groups to know more about your neighborhood, and more.</li>
        <li>On the chat feature, you can interact with people by sending and receiving posts.</li>
        <li>If you want to know more about someone's post, you can send them a friend request for a personal chat. If they accept, you two can interact.</li>
      </ul>
    </section>
  );
}
