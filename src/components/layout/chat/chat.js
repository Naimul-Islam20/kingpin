"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaCommentAlt, FaTimes } from "react-icons/fa";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatRef = useRef(null);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Ready Questions + Static Answers
  const qaList = [
    {
      q: "How to contact support?",
      a: "You can reach our support team 24/7 through email or live chat.",
    },
    {
      q: "What services do you provide?",
      a: "We provide website development, mobile apps, UI/UX design & more.",
    },
    {
      q: "How long does a project take?",
      a: "Project time depends on complexity, usually 3–10 weeks.",
    },
    {
      q: "Do you offer discounts?",
      a: "Yes! We offer seasonal and referral discounts.",
    },
  ];

  // Scroll to bottom on new message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { id: Date.now(), text, sender: "user" }]);
  };

  const simulateBotResponse = (answer) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: answer, sender: "bot" },
      ]);
    }, 1200);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    addUserMessage(input);
    simulateBotResponse("Thanks! We received your message.");
    setInput("");
  };

  const handleQuestionClick = (item) => {
    addUserMessage(item.q);
    simulateBotResponse(item.a);
  };

  return (
    <>
      {/* Chat Box */}
      <div
        ref={chatRef}
        className={`fixed bottom-20 right-5 md:right-10 w-[300px] md:w-[350px] bg-white shadow-lg rounded-lg flex flex-col transition-all duration-300 z-50 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-[150%] opacity-0"
        }`}
        style={{ height: "450px" }}
      >
        {/* Header */}
        <div className="bg-[#C27D2A] text-white p-3 rounded-t-lg flex justify-between items-center">
          <span>Chat with us</span>
          <button onClick={toggleChat}>
            <FaTimes />
          </button>
        </div>

        {/* Suggested Questions */}
        <div className="p-3 border-b border-gray-300 space-y-2">
          <p className="text-xs font-semibold text-gray-600 mb-1">
            Quick Questions:
          </p>
          <div className="flex flex-col gap-2">
            {qaList.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleQuestionClick(item)}
                className="text-left text-sm bg-gray-100 hover:bg-gray-200 p-2 rounded-lg"
              >
                {item.q}
              </button>
            ))}
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 flex flex-col overflow-y-auto p-3 space-y-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`px-3 py-2 text-sm rounded-lg w-fit max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-[#C27D2A] text-white self-end ml-auto"
                  : "bg-gray-200 text-gray-800 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {isTyping && (
            <div className="px-3 py-2 text-sm rounded-lg w-fit bg-gray-200 text-gray-600 self-start">
              typing...
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Box */}
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
            className="bg-[#C27D2A] text-white px-3 py-1 rounded-lg focus:outline-none text-sm"
          >
            Send
          </button>
        </div>
      </div>

      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-5 right-5 md:right-10 bg-[#C27D2A] text-white p-4 rounded-full shadow-lg z-50 hover:bg-[#bb6f12] transition"
        >
          <FaCommentAlt size={20} />
        </button>
      )}
    </>
  );
}
