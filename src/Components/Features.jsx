export default function Features() {
  return (
    <section className="p-8 text-center mx-4 sm:mx-10 md:mx-20 mt-[-25px]">
      <div className="lg:text-6xl text-3xl font-josefin font-semibold mt-3 text-[#00BF63]">Features</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10 mt-12">
        {Array(6).fill(0).map((_, index) => (
          <div
            key={index}
            className="bg-[#00BF63] rounded-md text-center px-5 pt-5 h-[246px]">
            <div className="text-white text-2xl md:text-3xl lg:text-4xl font-josefin">
              Lorem Ipsum
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
