import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

// Intelligent client-side response helper for cafe questions
function getCafeReply(query) {
  const q = query.toLowerCase();

  if (q.includes("location") || q.includes("where") || q.includes("address") || q.includes("kalinga")) {
    return "Everbloom Café is located at K-8/796, Near Sum Ultimate Medicare, K8 Kalinga Nagar, Bhubaneswar, Odisha 751029. We're easily accessible with convenient parking!";
  }
  if (q.includes("time") || q.includes("timing") || q.includes("open") || q.includes("hour") || q.includes("close")) {
    return "We are open 7 days a week from 1:00 PM to 11:00 PM. Perfect for late lunches, evening hangouts, and dinners!";
  }
  if (q.includes("menu") || q.includes("food") || q.includes("eat") || q.includes("dish") || q.includes("special")) {
    return "Our top specials include the Everbloom Berry Blossom Cooler, Crispy Peri-Peri Chicken Wrap, Wood-Fired Margherita Pizza, Classic Aglio Olio Pasta, and Blueberry Baked Cheesecake! Check our Menu tab for the full list.";
  }
  if (q.includes("coffee") || q.includes("brew") || q.includes("frappe") || q.includes("latte") || q.includes("cappuccino")) {
    return "We serve handcrafted Arabica coffee including Artisanal Cappuccinos, Hazelnut Frappes, Classic Cold Brews, and Belgian Hot Chocolate!";
  }
  if (q.includes("price") || q.includes("cost") || q.includes("budget") || q.includes("expensive") || q.includes("cheap")) {
    return "Everbloom is very pocket-friendly! The average cost is ₹200–₹400 per person. Dishes range from ₹150 to ₹360.";
  }
  if (q.includes("outdoor") || q.includes("patio") || q.includes("garden") || q.includes("pet") || q.includes("ac") || q.includes("indoor")) {
    return "We have both a cozy climate-controlled Indoor AC Lounge with our signature flower mural and a lush Nature Garden Patio with fairy lights that is open-air and pet-friendly!";
  }
  if (q.includes("contact") || q.includes("phone") || q.includes("call") || q.includes("number") || q.includes("whatsapp")) {
    return "You can call us directly or chat on WhatsApp at +91 94371 64578. We'd love to assist you!";
  }
  if (q.includes("wifi") || q.includes("work") || q.includes("study") || q.includes("laptop")) {
    return "Yes! We provide high-speed complimentary WiFi and comfortable seating zones ideal for remote work, study sessions, and reading.";
  }
  if (q.includes("book") || q.includes("reserve") || q.includes("table") || q.includes("party") || q.includes("birthday")) {
    return "For table bookings or birthday party arrangements, please reach out to us at +91 94371 64578 or drop a note on our Contact page!";
  }
  if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("namaste")) {
    return "Hello there! Welcome to Everbloom Café. How can I brighten your day? Feel free to ask about our location, artisanal coffee, gourmet wraps, or timings!";
  }

  return "Thank you for asking! We are located in Kalinga Nagar, Bhubaneswar, open daily from 1 PM to 11 PM. You can explore our Menu page or contact us at 094371 64578 for quick assistance.";
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hello! Welcome to Everbloom Café. How can I help you today? Ask about our location, artisanal coffees, wraps, pizzas, or timings!",
    },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const userMsg = (textToSend || input).trim();
    if (!userMsg || isTyping) return;

    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getCafeReply(userMsg);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      setIsTyping(false);
    }, 450);
  };

  const quickPills = [
    "Where are you located?",
    "What are your cafe timings?",
    "What are the best coffee brews?",
    "Do you have outdoor seating?",
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 p-2.5 sm:p-3 rounded-full btn-caramel text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300"
        title="Chat with Everbloom AI"
      >
        {open ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-18 sm:bottom-22 right-4 sm:right-6 z-50 w-[340px] sm:w-[360px] max-w-[calc(100vw-32px)] bg-white rounded-3xl shadow-2xl border border-[#e8ded3] overflow-hidden animate-fade-in-down flex flex-col"
          style={{ height: "460px" }}
        >
          {/* Header */}
          <div className="bg-[#24150e] px-5 py-4 flex items-center justify-between shrink-0 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#c88242] flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white font-display text-sm font-bold">Everbloom Assistant</p>
                <p className="text-emerald-400 text-[10px] font-medium">● Open 1 PM – 11 PM</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#faf7f2]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-[#2b1810] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    <Bot className="w-3.5 h-3.5 text-[#e29b5a]" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#2b1810] text-white rounded-br-none shadow-sm"
                      : "bg-white text-[#2b1810] rounded-bl-none border border-[#e8ded3] shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === "user" && (
                  <div className="w-7 h-7 rounded-full bg-[#c88242] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full bg-[#2b1810] text-white flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5 text-[#e29b5a]" />
                </div>
                <div className="bg-white px-4 py-2.5 rounded-2xl rounded-bl-none border border-[#e8ded3] text-xs">
                  <span className="inline-flex gap-1 text-[#c88242] animate-pulse font-medium">
                    Thinking...
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Question Pills */}
          <div className="px-3 py-2 bg-[#f4ede4] border-t border-[#e8ded3] flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPills.map((pill, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(pill)}
                className="whitespace-nowrap px-3 py-1 bg-white border border-[#e8ded3] rounded-full text-[11px] text-[#4a3b32] hover:border-[#c88242] hover:text-[#c88242] transition-colors shrink-0 font-medium"
              >
                {pill}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-[#e8ded3] shrink-0"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 px-4 py-2 rounded-full border border-[#e8ded3] bg-[#faf7f2] text-xs text-[#2b1810] focus:outline-none focus:border-[#c88242]"
              />
              <button
                type="submit"
                disabled={isTyping || !input.trim()}
                className="w-8 h-8 rounded-full btn-caramel text-white flex items-center justify-center disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
