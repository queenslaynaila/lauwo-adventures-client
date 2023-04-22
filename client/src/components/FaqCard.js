import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const FaqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => setIsOpen(!isOpen);

  return (
    <div className="border rounded-lg shadow-lg mb-4">
      <div
        className="flex justify-between items-center px-4 py-3 cursor-pointer"
        onClick={toggleCard}
      >
        <h2 className="text-lg font-medium">{question}</h2>
        <FaAngleDown
          className={`text-xl transition-transform duration-500 ease-in-out transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      {isOpen && <div className="px-4 py-3 bg-gray-100">{answer}</div>}
    </div>
  );
};

export default FaqCard;
