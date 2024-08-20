const SingleDoctor = () => {
  return (
    <>
      <div className="px-12 flex items-start gap-4">
        {/* FILTER  */}
        <div className="800px:flex hidden w-[25%]  flex-col items-start gap-4">
          {/* HOSPITAL CITY FILTER  */}
          <div className="p-4 bg-[#DBDADE]/30 rounded-xl w-full">
            <img
              src="https://i.ibb.co/f4zcKQ8/doctor-Img.webp"
              alt="doctor image "
              className="object-cover w-[220px] h-[220px] rounded-md object-center"
            />
            <h1 className="text-[1.2rem] font-semibold mb-1">
              Dr. Balbir Singh
            </h1>
            <button className="rounded-2xl mt-4 flex-grow text-white px-6 py-3 bg-gradient-to-b gap-4 from-[#7E68C5] to-[#503AA7] flex items-center justify-center w-full max-w-[300px]">
              Book Appointment
            </button>
            <div className="flex flex-col items-start gap-2 mt-2">
              <h1 className="hover:underline hover:cursor-pointer font-[400]">
                About Doctor
              </h1>
              <h1 className="hover:underline hover:cursor-pointer font-[400]">
                Special Interest
              </h1>{" "}
              <h1 className="hover:underline hover:cursor-pointer font-[400]">
                Treatments
              </h1>{" "}
              <h1 className="hover:underline hover:cursor-pointer font-[400]">
                Previous Work Experience
              </h1>{" "}
              <h1 className="hover:underline hover:cursor-pointer font-[400]">
                Awards
              </h1>{" "}
              <h1 className="hover:underline hover:cursor-pointer font-[400]">
                Education
              </h1>
            </div>
          </div>
          {/* HOSPITAL NAME FILTER  */}
        </div>
        {/* CONTENT  */}
        <div className="flex flex-col gap-2 w-full">
          <h1 className="font-semibold text-center text-[2rem] mb-4">
            Doctors
          </h1>
          <div>
            <h1 className="text-[1.5rem] font-semibold mb-1">
              Dr. Balbir Singh
            </h1>
            <h2>Cardiologist</h2>
            <p>Chairman: Delhi Hospital, Gurgaon, India</p>
            <p>Years of Experience: 40</p>

            <h2 className="text-[1.5rem] font-semibold mb-1">
              About Dr. Balbir Singh
            </h2>
            <p>
              Dr. Balbir Singh is a renowned cardiologist and a prominent figure
              in the field of healthcare. He currently serves as the Chairman of
              Cardiology at Pan Max, where he plays a pivotal role in the
              development, quality assurance, clinical governance, physician
              recruitment, credentialing, research, and training. In addition,
              he oversees the prestigious DNB (Diplomate of National Board)
              program in Cardiology, benefiting all Max hospitals under his
              purview.
            </p>

            <h3 className="text-[1.5rem] font-semibold mb-1">Speciality:</h3>
            <p>
              Dr. Balbir Singh specializes in Cardiology, with a wealth of
              expertise in interventional cardiology and electrophysiology. His
              contributions to these subfields have garnered significant
              recognition both nationally and internationally.
            </p>

            <h3 className="text-[1.5rem] font-semibold mb-1">Treatments:</h3>
            <p>
              Dr. Singh offers a comprehensive range of treatments in the field
              of Cardiology, including but not limited to interventional
              cardiology procedures, electrophysiology interventions, and the
              management of various cardiovascular conditions.
            </p>

            <h2 className="text-[1.5rem] font-semibold mb-1">
              Previous Work Experience
            </h2>
            <p>
              Dr. Balbir Singh’s illustrious career spans several prestigious
              healthcare institutions, with his notable contributions as
              follows:
            </p>
            <ul className="list-disc p-4">
              <li>
                Medanta – The Medicity: Chairman of Cardiology &
                Electrophysiology (2009 to 2019)
              </li>
              <li>Apollo Hospital: Senior Consultant (2007 to 2009)</li>
              <li>
                Fortis Heart Institute & Research Center: Principal Consultant
                (December 2004 to April 2007)
              </li>
              <li>Batra Hospital: Senior Consultant (1998 to 2004)</li>
              <li>
                AIIMS (All India Institute of Medical Sciences): Senior
                Professor (1993 to 1997)
              </li>
            </ul>
            <p>
              His leadership and expertise have left an indelible mark on each
              institution he has served.
            </p>

            <h2 className="text-[1.5rem] font-semibold mb-1">Awards</h2>
            <p>
              Dr. Balbir Singh’s exceptional contributions to the field of
              Cardiology have earned him numerous prestigious awards, including:
            </p>
            <ul className="list-disc p-4">
              <li>
                Padma Shri Award (2007): A highly esteemed Indian civilian award
                recognizing his significant contributions to healthcare.
              </li>
              <li>
                Best Operator at India Live 2016: An acknowledgment of his
                exemplary skills and expertise in interventional cardiology.
              </li>
              <li>
                Golden Hand Award at AICT, Singapore (2012): An international
                accolade for his outstanding achievements in the field.
              </li>
              <li>
                Best late-breaking trial at APHRS, Taiwan (2018): Recognition of
                his groundbreaking research and advancements in the area of
                electrophysiology.
              </li>
            </ul>

            <h2 className="text-[1.5rem] font-semibold mb-1">Education</h2>
            <p>
              Dr. Balbir Singh’s academic and professional journey includes:
            </p>
            <ul className="list-disc p-4">
              <li>MBBS from Maulana Azad Medical College, Delhi (1983)</li>
              <li>
                MD in Internal Medicine from Maulana Azad Medical College, Delhi
                (1987)
              </li>
              <li>
                DM in Cardiology from Govind Ballabh Pant Hospital, New Delhi
                (1992)
              </li>
              <li>
                Fellowship from the American College of Cardiology, USA (2005)
              </li>
            </ul>
            <p>
              Dr. Balbir Singh’s educational background reflects his commitment
              to continuous learning and staying at the forefront of medical
              advancements.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#4A3AFF2E] p-16 mt-8">
        <h1 className="text-[2rem] font-semibold text-primary text-center">
          Ask us anything about the Doctor
        </h1>
        <p className="text-primary text-center">
          We will give you every information you need to know about doctors.
        </p>
        <button className="rounded-2xl mt-4 flex-grow text-white px-6 py-3 bg-gradient-to-b gap-4 from-[#7E68C5] to-[#503AA7] flex items-center justify-center w-fit mx-auto">
          Purchase Now
        </button>
      </div>
    </>
  );
};

export default SingleDoctor;
