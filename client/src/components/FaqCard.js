import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import  simpleFormat  from '@/utils/simpleFormat';

const FaqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleCard = () => setIsOpen(!isOpen);

  return (
    <div className="border shadow-lg mb-4 text-white">
      <div
        className="flex justify-between items-center px-4 py-3 cursor-pointer bg-black/50 shadow-xl"
        onClick={toggleCard}
      >
        <h2 className="text-md font-medium">{question}</h2>
        <FaAngleDown
          className={`text-xl transition-transform duration-500 ease-in-out transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      {isOpen && <div className="px-4 py-3 bg-black/80 text-sm leading-7">
        {simpleFormat(answer)}
        </div>}
    </div>
  );
};

export default FaqCard;
