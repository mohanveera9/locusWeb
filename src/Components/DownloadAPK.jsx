export default function DownloadAPK() {
  const handleDownload = () => {
    window.open("#",);
  };

  return (
    <div className="text-center my-8 border border-[#00BF63] p-4">
      <div className="py-6 flex flex-col items-center gap-1">
        <button 
          onClick={handleDownload}
          className="bg-[#00BF63] text-white px-6 py-3 rounded font-josefin flex flex-col items-center gap-1"
        >
          <span className="text-xl md:text-2xl lg:text-3xl font-josefin px-12 no-wrap">Download APK</span>
          <span className="text-sm text-white italic">(click here to download)</span>
        </button>
      </div>
    </div>
  );
}
