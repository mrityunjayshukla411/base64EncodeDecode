import { useState } from "react"; 

const ActionCard = (props) => {
    const [currentText,setCurrentText] = useState("");
    const [outputText,setOutputText] = useState("");
  return (
    <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
      <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
        <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
          {props.heading}
        </h2>
        <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">
          {props.subHeading}
        </h1>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-400">
            {props.message}
          </label>
          <textarea
          onChange={(e) => setCurrentText(e.target.value)}
            id="message"
            name="message"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded"
        onClick={() => props.subHeading === 'Encode' ? setOutputText(btoa(currentText)) : setOutputText(atob(currentText))}>
          {props.buttonLabel}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-auto"
            viewBox="0 0 24 24"

          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-400">
            OUTPUT
          </label>
          <textarea
            value={outputText}
            id="message"
            name="message"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
