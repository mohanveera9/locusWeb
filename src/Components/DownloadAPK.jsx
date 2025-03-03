

export default function DownloadAPK() {
  return (
    <div className="text-center my-8 border border-[#00BF63] p-4">
      <div className="py-6 flex flex-col items-center gap-1">
        <button className="bg-[#00BF63] text-white px-6 py-3 rounded font-josefin flex flex-col items-center gap-1">
         
          <span className="text-[30px] font-josefin px-12 mb-[-10px]">Download APK</span>
          <span className="text-sm text-white italic">(click here to download)</span>
        </button>
      </div>
    </div>
  );
}