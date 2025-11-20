"use client";
import React, { useState } from "react";
import { FaCommentAlt, FaTimes } from "react-icons/fa";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input }]);
    setInput("");
  };

  return (
    <>
      {/* Chat Box */}
      <div
        className={`fixed bottom-20 right-5 md:right-10 w-[300px] md:w-[350px] bg-white shadow-lg rounded-lg flex flex-col transition-transform duration-300 z-50 ${
          isOpen ? "translate-y-0" : "translate-y-96"
        }`}
      >
        <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
          <span>Chat with us</span>
          <button onClick={toggleChat}>
            <FaTimes />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-2 h-64">
          {messages.length === 0 && (
            <p className="text-gray-400 text-sm text-center">No messages yet</p>
          )}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-gray-200 text-gray-800 rounded-lg px-3 py-2 text-sm"
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-gray-300 flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded-lg px-2 py-1 focus:outline-none text-sm"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            Send
          </button>
        </div>
      </div>

      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-5 right-5 md:right-10 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 hover:bg-blue-700 transition"
        >
          <FaCommentAlt size={20} />
        </button>
      )}
    </>
  );
}
