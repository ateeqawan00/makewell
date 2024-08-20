const CTASection = () => {
  return (
    <div className="md:px-12 px-6">
      <div className="w-full bg-ctaBg bg-cover bg-no-repeat p-6 md:p-12 flex items-center justify-start rounded-3xl">
        <div className="flex flex-col items-start gap-8 leading-none mb-6">
          <h1 className="md:text-[3rem] 500px:text-[2rem] text-[1.2rem] text-white font-semibold 800px:w-[50%]">
            Ready to Transform Your Healthcare Facilitation Business?{" "}
          </h1>
          <p className="md:text-lg text-white 800px:w-[40%]">
            Explore our platform today to learn more about how Make can help
            you achieve unprecedented success in medical tourism. Sign up now
            and take the first step towards maximizing profits and driving
            growth with MakeWell. Let&apos;s revolutionize healthcare
            facilitation together. Transfers
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
    </div>
  );
};

export default CTASection;
