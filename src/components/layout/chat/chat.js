"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FaCommentAlt,
  FaTimes,
  FaPaperPlane,
  FaSmile,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hi! I'm your smart assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
      type: "welcome",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showEmoji, setShowEmoji] = useState(false);

  const chatRef = useRef(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

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

  // Smart Responses Database
  const smartResponses = {
    greetings: [
      "hello",
      "hi",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
      "howdy",
      "assalamualaikum",
      "namaste",
    ],
    services: [
      "services",
      "what do you do",
      "what can you help",
      "offerings",
      "solutions",
      "products",
    ],
    contact: [
      "contact",
      "phone",
      "email",
      "address",
      "location",
      "reach",
      "support",
    ],
    pricing: [
      "price",
      "cost",
      "pricing",
      "fee",
      "rate",
      "budget",
      "expensive",
      "cheap",
    ],
    time: ["time", "duration", "how long", "deadline", "timeline", "schedule"],
    booking: ["book", "reservation", "appointment", "schedule", "meeting"],
  };

  // Smart Response Generator
  const getSmartResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Greeting responses
    if (smartResponses.greetings.some((word) => message.includes(word))) {
      const greetings = [
        "Hello! 👋 Welcome to Kingpin. How can I assist you today?",
        "Hi there! 🌟 I'm here to help you with anything related to our services.",
        "Hey! 😊 Great to see you. What can I help you with?",
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // Services responses
    if (smartResponses.services.some((word) => message.includes(word))) {
      return "🚀 We specialize in:\n• Premium Nightlife Experiences\n• Event Management\n• VIP Services\n• Restaurant & Bar Experiences\n• Exclusive Parties\n\nWhat specific service interests you?";
    }

    // Contact responses
    if (smartResponses.contact.some((word) => message.includes(word))) {
      return "📞 Contact Information:\n• Phone: +1 (555) KING-PIN\n• Email: info@kingpin.com\n• Location: Downtown Luxury District\n\nOur team is available 24/7! 🌙";
    }

    // Pricing responses
    if (smartResponses.pricing.some((word) => message.includes(word))) {
      return "💰 Our pricing varies by service:\n• VIP Table: $500-$2000/night\n• Event Packages: $1000-$5000\n• Custom Experiences: Contact for quote\n\nWe offer exclusive member discounts! ✨";
    }

    // Time responses
    if (smartResponses.time.some((word) => message.includes(word))) {
      return "⏰ Response times:\n• Chat: Instant\n• Email: 2-4 hours\n• Custom requests: 24-48 hours\n\nFor urgent matters, call us directly! 📱";
    }

    // Booking responses
    if (smartResponses.booking.some((word) => message.includes(word))) {
      return "📅 Ready to book?\n• Call: +1 (555) KING-PIN\n• Email: bookings@kingpin.com\n• Live Chat: You're here! 😉\n\nWhat's your preferred date and service?";
    }

    // Hours responses
    if (
      message.includes("hour") ||
      message.includes("time") ||
      message.includes("open")
    ) {
      return "🕐 Our Hours:\n• Mon-Thu: 5PM - 2AM\n• Fri-Sat: 5PM - 4AM\n• Sun: 4PM - 12AM\n\nWe also host special events! 🌟";
    }

    // Packages responses
    if (message.includes("package") || message.includes("deal")) {
      return "🎁 Special Packages:\n• VIP Table Package: $800 (includes bottle service)\n• Couples Package: $150 (romantic dinner + drinks)\n• Group Package: $50/person (min 8 people)\n\nContact us for custom packages! 📞";
    }

    // Location responses
    if (
      message.includes("location") ||
      message.includes("where") ||
      message.includes("address")
    ) {
      return "📍 Our Location:\n🏢 Downtown Luxury District\n📌 123 King Street, Suite 456\n🚗 Valet parking available\n\nEasy access from all major highways! 🗺️";
    }

    // Payment responses
    if (
      message.includes("payment") ||
      message.includes("pay") ||
      message.includes("card")
    ) {
      return "💳 Payment Methods:\n• 💳 All major credit cards\n• 💵 Cash\n• 📱 Digital wallets (Apple Pay, Google Pay)\n• 🏦 Bank transfers for large bookings\n\nSecure & hassle-free payments! 🔒";
    }

    // Events responses
    if (
      message.includes("event") ||
      message.includes("special") ||
      message.includes("party")
    ) {
      return "🎉 Special Events:\n• 🎂 Birthday Parties\n• 💍 Bachelor/Bachelorette Parties\n• 🏆 Corporate Events\n• 🎤 Live Music Nights\n• 🌟 Theme Nights\n\nLet us make your event unforgettable! ✨";
    }

    // Menu responses
    if (
      message.includes("menu") ||
      message.includes("food") ||
      message.includes("drink")
    ) {
      return "🍽️ Our Menu:\n• 🍸 Signature Cocktails\n• 🍷 Premium Wine Selection\n• 🍺 Craft Beers\n• 🥘 Gourmet Small Plates\n• 🍰 Decadent Desserts\n\nFull menu available at your table! 📋";
    }

    // Group booking responses
    if (
      message.includes("group") ||
      message.includes("reservation") ||
      message.includes("party size")
    ) {
      return "👥 Group Bookings:\n• Up to 20 people: Standard seating\n• 20-50 people: Private area\n• 50+ people: Full venue rental\n\nEarly booking recommended! 📞 Call us to reserve.";
    }

    // Default responses
    const defaultResponses = [
      "That's interesting! 🤔 Can you tell me more about what you're looking for?",
      "I'd love to help! 💫 Could you provide more details about your needs?",
      "Great question! 🎯 Let me connect you with our experts. What's the best way to reach you?",
      "Thanks for reaching out! 🌟 I'm here to make your experience amazing. What can I assist with?",
    ];

    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  };

  // Quick Questions for UI
  const quickQuestions = [
    "What services do you offer?",
    "How can I contact you?",
    "What's your pricing?",
    "How do I book?",
    "Tell me about VIP experiences",
    "What are your hours?",
    "Do you have packages?",
    "Location details",
    "Payment methods",
    "Special events",
    "Menu options",
    "Group bookings",
  ];

  // Scroll to bottom on new message only (not on typing state change)
  useEffect(() => {
    if (messagesEndRef.current && messages.length > 0) {
      // Scroll immediately when new message is added
      requestAnimationFrame(() => {
        messagesEndRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      });
    }
  }, [messages.length]); // Only depend on messages length, not typing state

  // Sound notification
  const playSound = () => {
    if (soundEnabled) {
      // Simple beep sound using Web Audio API
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800;
      oscillator.type = "sine";

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.1
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    }
  };

  const addUserMessage = (text) => {
    const newMessage = {
      id: `user-${Date.now()}-${Math.random()}`,
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
      status: "sent",
    };
    setMessages((prev) => [...prev, newMessage]);
    playSound();
  };

  const addBotMessage = (text, type = "response") => {
    const newMessage = {
      id: `bot-${Date.now()}-${Math.random()}`,
      text,
      sender: "bot",
      timestamp: new Date(),
      type,
    };

    // Use functional update to ensure we get the latest state
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, newMessage];
      return updatedMessages;
    });

    // Play sound immediately for instant feedback
    playSound();
  };

  const simulateBotResponse = (userMessage) => {
    setIsTyping(true);
    const response = getSmartResponse(userMessage);
    const typingTime = Math.min(1000 + response.length * 20, 3000); // Dynamic typing time

    // First stop typing indicator
    setTimeout(() => {
      setIsTyping(false);

      // Add bot message immediately after typing stops for smooth transition
      setTimeout(() => {
        addBotMessage(response);
      }, 50); // Very small delay for smooth transition
    }, typingTime);
  };

  const handleSend = () => {
    const messageText = input.trim();
    if (!messageText) return;

    // Prevent sending if already sending
    if (isTyping) return;

    addUserMessage(messageText);
    simulateBotResponse(messageText);

    // Clear input after a small delay to ensure message is processed
    setTimeout(() => {
      setInput("");
      inputRef.current?.focus();
    }, 50);
  };

  const handleQuestionClick = (question) => {
    addUserMessage(question);
    simulateBotResponse(question);
  };

  const handleEmojiClick = (emoji) => {
    setInput((prev) => prev + emoji);
    setShowEmoji(false);
    inputRef.current?.focus();
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Enhanced Typing Indicator
  const TypingIndicator = () => (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
        <span className="text-white text-xs font-bold">🤖</span>
      </div>
      <div className="px-4 py-3 text-sm rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200/60 shadow-gray-300/40 shadow-lg backdrop-blur-sm relative">
        <div className="flex items-center justify-center py-1">
          <div className="flex space-x-1">
            <div
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>
        <div className="absolute -bottom-1 left-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-100"></div>
      </div>
    </div>
  );

  // Emoji Picker Component
  const EmojiPicker = () => {
    const emojis = ["😊", "👍", "👋", "❤️", "🎉", "⭐", "🔥", "💫", "🌟", "✨"];

    return (
      <div className="absolute bottom-full left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-2 grid grid-cols-5 gap-1 z-10">
        {emojis.map((emoji, idx) => (
          <button
            key={idx}
            onClick={() => handleEmojiClick(emoji)}
            className="w-8 h-8 hover:bg-gray-100 rounded flex items-center justify-center text-lg transition-colors"
          >
            {emoji}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Enhanced Chat Box with Glassmorphism */}
      <div
        ref={chatRef}
        className={`fixed bottom-20 right-5 md:right-10 w-[320px] md:w-[380px] backdrop-blur-md bg-white/95 border border-white/20 shadow-2xl rounded-2xl flex flex-col transition-all duration-500 z-50 ${
          isOpen
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-[200%] opacity-0 scale-95"
        }`}
        style={{ height: "720px" }}
      >
        {/* Enhanced Header */}
        <div className="bg-gradient-to-r from-[#C27D2A] to-[#B8731A] text-white p-4 rounded-t-2xl flex justify-between items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div>
              <h3 className="font-semibold text-sm">Kingpin Assistant</h3>
              <p className="text-xs opacity-90">Online • Reply in ~2 min</p>
            </div>
          </div>
          <div className="relative z-10 flex items-center space-x-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              {soundEnabled ? (
                <FaVolumeUp size={14} />
              ) : (
                <FaVolumeMute size={14} />
              )}
            </button>
            <button
              onClick={toggleChat}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              <FaTimes size={14} />
            </button>
          </div>
        </div>

        {/* Compact Quick Questions */}
        <div className="px-3 py-2 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-gray-600">
              Quick Questions
            </p>
            <div className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full text-[10px]">
              💡
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {quickQuestions.map((question, idx) => (
              <button
                key={idx}
                onClick={() => handleQuestionClick(question)}
                className="text-left text-xs bg-white hover:bg-[#C27D2A]/5 border border-gray-200 hover:border-[#C27D2A]/30 px-2 py-1.5 rounded-lg transition-all duration-200 hover:shadow-sm group whitespace-nowrap"
              >
                <span className="group-hover:text-[#C27D2A] transition-colors">
                  {question}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Messages Container */}
        <div className="flex-1 flex flex-col overflow-y-auto p-3 space-y-3 bg-gradient-to-b from-white to-gray-50 break-words">
          {messages.map((msg, idx) => (
            <div
              key={msg.id}
              className={`flex flex-col space-y-1 ${
                msg.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div className="flex items-start space-x-3">
                {msg.sender === "bot" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg ring-2 ring-white/50">
                    <span className="text-white text-xs font-bold">
                      {msg.type === "welcome" ? "👑" : "🤖"}
                    </span>
                  </div>
                )}
                <div
                  className={`px-3 py-2 text-xs rounded-2xl min-w-[120px] max-w-[280px] break-words relative ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-[#C27D2A] to-[#B8731A] text-white rounded-br-md shadow-[#C27D2A]/30 shadow"
                      : msg.type === "welcome"
                      ? "bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 text-white rounded-bl-md shadow-blue-500/40 shadow border border-white/20 ring-1 ring-white/30"
                      : "bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200/60 text-gray-800 rounded-bl-md shadow-gray-300/40 shadow backdrop-blur-sm  transition-all duration-200 "
                  }`}
                >
                  <div
                    className={`break-words leading-relaxed max-w-full ${
                      msg.type === "welcome" ? "font-medium" : ""
                    }`}
                  >
                    {msg.type === "welcome" ? (
                      <span>
                        {msg.text}
                        <span className="ml-1 animate-pulse">✨</span>
                      </span>
                    ) : (
                      msg.text
                    )}
                  </div>
                  {msg.sender === "bot" && msg.type !== "welcome" && (
                    <div className="absolute -bottom-1 left-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-100"></div>
                  )}
                  {msg.type === "welcome" && (
                    <div className="absolute -bottom-1 left-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-blue-500/60"></div>
                  )}
                </div>
              </div>
              <div
                className={`text-xs text-gray-500 px-2 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                {formatTime(msg.timestamp)}
                {msg.sender === "user" && msg.status && (
                  <span className="ml-1">✓</span>
                )}
              </div>
            </div>
          ))}

          {isTyping && <TypingIndicator />}

          <div ref={messagesEndRef} />
        </div>

        {/* Enhanced Input Box */}
        <div className="p-4 border-t border-gray-100 bg-white rounded-b-2xl relative">
          {showEmoji && <EmojiPicker />}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-3 items-end"
          >
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#C27D2A] focus:ring-2 focus:ring-[#C27D2A]/20 text-sm transition-all duration-200 pr-12 resize-none"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSend();
                  }
                }}
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
              <button
                type="button"
                onClick={() => setShowEmoji(!showEmoji)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#C27D2A] transition-colors"
              >
                <FaSmile size={16} />
              </button>
            </div>
            <button
              type="submit"
              disabled={!input.trim()}
              className="bg-gradient-to-r from-[#C27D2A] to-[#B8731A] hover:from-[#B8731A] hover:to-[#A66716] disabled:from-gray-300 disabled:to-gray-400 text-white p-3 rounded-2xl focus:outline-none transition-all duration-200 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              <FaPaperPlane size={14} />
            </button>
          </form>

          <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
            <span>Press Enter to send • Shift+Enter for new line</span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Online</span>
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-5 right-5 md:right-10 bg-gradient-to-r from-[#C27D2A] to-[#B8731A] hover:from-[#B8731A] hover:to-[#A66716] text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:shadow-[#C27D2A]/50 hover:scale-110 animate-bounce-slow group"
        >
          <div className="relative">
            <FaCommentAlt size={22} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
          </div>
          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      )}
    </>
  );
}
