import Locus from '../assets/locus.jpeg'


export default function Hero() {
    return (
      <header
        className="relative h-[720px] flex items-center justify-center text-2xl text-white"
        style={{
          backgroundImage: `url(${Locus})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
       
      </header>
    );
  }