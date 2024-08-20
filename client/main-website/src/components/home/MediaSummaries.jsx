const MediaSummaries = () => {
  return (
    <div className="w-full bg-summaryBg bg-cover bg-no-repeat p-12 flex items-center justify-start mt-16">
      <div className="flex flex-col items-start gap-4 leading-none mb-6">
        <h1 className="text-[3rem] text-white font-semibold 800px:w-[70%]">
          Effortless Medical Case Summaries
        </h1>
        <p className="text-lg text-white 800px:w-[70%]">
          Instantly Generate and Share Free Summaries for Seamless Hospital
          Transfers
        </p>
        <button
          onClick={() =>
            document.getElementById("joinWaitlistModal").showModal()
          }
          className="bg-white py-[18px] px-[30px] rounded-xl font-semibold text-[#503AA7]"
        >
          Join Waitlist{" "}
        </button>
      </div>
    </div>
  );
};

export default MediaSummaries;
