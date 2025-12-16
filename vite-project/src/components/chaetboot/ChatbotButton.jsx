import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const ChatbotButton = () => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* CHAT POPUP */}
      {openChat && (
        <div className="mb-4 w-80 bg-white rounded-lg shadow-xl border overflow-hidden">

          {/* Header */}
          <div className="bg-green-500 text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-semibold">Chat Support</h3>
            <button
              onClick={() => setOpenChat(false)}
              className="text-white text-xl"
            >
              ×
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 text-sm text-gray-700 h-48 overflow-y-auto">
            <p className="mb-2">
              👋 Hello! How can I help you today?
            </p>
            <p className="bg-gray-100 p-2 rounded inline-block">
              Please type your query below.
            </p>
          </div>

          {/* Input */}
          <div className="border-t p-3 flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border rounded px-2 py-1 text-sm focus:outline-none"
            />
            <button className="bg-green-500 text-white px-3 rounded text-sm hover:bg-green-600">
              Send
            </button>
          </div>
        </div>
      )}

      {/* WHATSAPP BUTTON */}
      <button
        onClick={() => setOpenChat(!openChat)}
        className="flex items-center bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
      >
        <FaWhatsapp className="w-6 h-6 mr-2" />
        <span className="font-medium hidden sm:inline">
          May I Help You?
        </span>
      </button>

    </div>
  );
};

export default ChatbotButton;
