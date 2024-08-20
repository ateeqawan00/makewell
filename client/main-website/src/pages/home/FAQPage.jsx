import { faqData } from "../../../data/faqData";
const FAQPage = () => {
  return (
    <div className="flex flex-col items-start mx-auto p-4 md:p-8">
      <h1 className="text-[1.8rem] md:text-[3rem] font-semibold self-center mb-4">
        Frequently Asked Questions
      </h1>
      {faqData.map((item, index) => (
        <div
          className="flex flex-col items-start gap-4 mb-8"
          key={index + 0.0236}
        >
          <h2 className="md:text-[1.5rem] font-semibold">{item.title}</h2>
          {item.data.map((subItem, subIndex) => (
            <div
              className="collapse collapse-arrow border-2 border-primary"
              key={subIndex + 0.00589}
            >
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title md:text-xl font-medium text-primary">
                {subItem.question}{" "}
              </div>
              <div className="collapse-content text-sm md:text-lg">
                <p>{subItem.answer}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
