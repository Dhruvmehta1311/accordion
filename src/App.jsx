import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Our chairs are assembled in our state-of-the-art facility located in Germany, ensuring the highest quality and craftsmanship.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "You have 30 days from the date of delivery to return your chair for a full refund, provided it is in its original condition.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Yes, we ship to many countries outside the EU. Please check our shipping policy for more details on international shipping.",
  },
];

function App() {
  return <Accordian data={faqs} />;
}

function Accordian({ data }) {
  return (
    // <AccordianComponent />
    <div className="min-h-screen bg-blue-200 gap-4 py-7 flex flex-col items-center justify-center">
      {data.map((el, i) => (
        <AccordianComponent title={el.title} key={i} index={i} text={el.text} />
      ))}
    </div>
  );
}

function AccordianComponent({ title, text, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white w-[90%] p-6 max-w-[460px] mx-auto">
        <section className="flex gap-8 font-semibold sm:font-bold text-sm sm:text-lg">
          <p>{index + 1}</p>
          <p>{title}</p>
          <p className="cursor-pointer">-</p>
        </section>
        {isOpen ? <p tracking-tight>{text}</p> : null}
      </div>
    </>
  );
}

export default App;
