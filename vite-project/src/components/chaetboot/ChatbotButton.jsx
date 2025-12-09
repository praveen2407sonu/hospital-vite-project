import { FaWhatsapp } from "react-icons/fa";

const ChatbotButton = () => {
  const whatsappNumber = "919876543210"; // Replace with your number
  const message = "Hello! I need help."; // Default message

  return (
    <div className="fixed bottom-6 right-6 z-50"> {/* z-50 ensures button stays on top */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
      >
        <FaWhatsapp className="w-6 h-6 mr-2" />
        <span className="font-medium hidden sm:inline">May I Help You?</span>
      </a>
    </div>
  );
};

export default ChatbotButton;
