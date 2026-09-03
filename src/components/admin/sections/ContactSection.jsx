import { useState } from "react";
import { 
  Mail, 
  Search, 
  Trash2, 
  CheckCircle, 
  Clock, 
  Reply, 
  X, 
  Calendar,
  MessageSquare
} from "lucide-react";
import { contactApi } from "../../../lib/api";

export default function ContactSection({ messages = [], onRefresh }) {
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  const filteredMessages = messages.filter((m) => {
    const matchesStatus = filterStatus === "all" || m.status === filterStatus;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      m.name?.toLowerCase().includes(query) ||
      m.email?.toLowerCase().includes(query) ||
      m.message?.toLowerCase().includes(query);
    return matchesStatus && matchesSearch;
  });

  const handleUpdateStatus = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      const res = await contactApi.updateStatus(id, newStatus);
      if (res && res.success) {
        if (selectedMessage && selectedMessage.id === id) {
          setSelectedMessage({ ...selectedMessage, status: newStatus });
        }
        onRefresh();
      } else {
        alert(res.message || "Failed to update inquiry status.");
      }
    } catch (err) {
      console.error("Update status error:", err);
      alert("Error updating status.");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this customer message?")) {
      return;
    }

    try {
      const res = await contactApi.delete(id);
      if (res && res.success) {
        if (selectedMessage && selectedMessage.id === id) {
          setSelectedMessage(null);
        }
        onRefresh();
      } else {
        alert(res.message || "Failed to delete inquiry.");
      }
    } catch (err) {
      console.error("Delete inquiry error:", err);
      alert("Error deleting inquiry.");
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "unread":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
            <Clock className="w-2.5 h-2.5" /> Unread
          </span>
        );
      case "read":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
            <CheckCircle className="w-2.5 h-2.5" /> Read
          </span>
        );
      case "replied":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Reply className="w-2.5 h-2.5" /> Replied
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in text-[#2b1810]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#e8ded3] rounded-3xl p-6 shadow-sm">
        <div>
          <span className="badge-tag bg-[#faf7f2] text-[#6b5c54] border border-[#e8ded3] text-[10px] font-bold tracking-widest uppercase mb-1">
            CUSTOMER INQUIRIES
          </span>
          <h1 className="font-display text-2xl font-bold text-[#2b1810]">
            Contact Messages & Booking Queries
          </h1>
          <p className="text-xs text-[#6b5c54] mt-0.5">
            View visitor submissions from the contact page, mark response status, and reply directly.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] text-xs text-[#6b5c54] font-medium">
            Total Messages: <strong className="text-[#2b1810]">{messages.length}</strong>
          </span>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#9ca3af] pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, email, text..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e8ded3] rounded-2xl text-xs text-[#2b1810] placeholder-[#9ca3af] focus:outline-none focus:border-[#2b1810]"
          />
        </div>

        {/* Status Filter Buttons */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {["all", "unread", "read", "replied"].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3.5 py-2 rounded-2xl text-xs font-bold capitalize transition-all shrink-0 ${
                filterStatus === st
                  ? "bg-[#2b1810] text-white shadow-sm"
                  : "bg-white hover:bg-[#faf7f2] text-[#4a3b32] border border-[#e8ded3]"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Messages List / Table */}
      {filteredMessages.length === 0 ? (
        <div className="py-16 text-center bg-white border border-[#e8ded3] rounded-3xl p-8 shadow-sm">
          <MessageSquare className="w-12 h-12 text-[#9ca3af] mx-auto mb-3" />
          <h3 className="font-display text-base font-bold text-[#2b1810] mb-1">
            No contact inquiries found
          </h3>
          <p className="text-xs text-[#6b5c54] max-w-sm mx-auto">
            When users submit queries through the Everbloom website, they will appear here in real-time.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredMessages.map((msg) => (
            <div
              key={msg.id}
              onClick={() => {
                setSelectedMessage(msg);
                if (msg.status === "unread") {
                  handleUpdateStatus(msg.id, "read");
                }
              }}
              className={`group bg-white border rounded-3xl p-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                msg.status === "unread"
                  ? "border-[#c88242] bg-[#fffcf8]"
                  : "border-[#e8ded3] hover:border-[#2b1810]"
              }`}
            >
              {/* Customer Info & Message Preview */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] text-[#2b1810] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-display text-sm font-bold text-[#2b1810]">
                      {msg.name}
                    </h3>
                    <span className="text-xs text-[#6b5c54] font-normal">
                      &lt;{msg.email}&gt;
                    </span>
                    {getStatusBadge(msg.status)}
                  </div>

                  <p className="text-xs text-[#6b5c54] line-clamp-2 leading-relaxed">
                    {msg.message}
                  </p>
                </div>
              </div>

              {/* Date & Actions */}
              <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#f0e8dc]">
                <div className="flex items-center gap-1.5 text-[11px] text-[#6b5c54]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    {msg.createdAt
                      ? new Date(msg.createdAt).toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "Recent"}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMessage(msg);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-[#faf7f2] hover:bg-[#2b1810] hover:text-white text-[#2b1810] border border-[#e8ded3] text-xs font-bold transition-colors"
                  >
                    View
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(msg.id);
                    }}
                    className="w-8 h-8 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 flex items-center justify-center transition-colors"
                    title="Delete Message"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Message Detail Modal - Clean White */}
      {selectedMessage && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-xl bg-white border border-[#e8ded3] rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
            <button
              onClick={() => setSelectedMessage(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#faf7f2] hover:bg-[#f0e8dc] text-[#2b1810] flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="badge-tag bg-[#faf7f2] text-[#6b5c54] border border-[#e8ded3] text-[10px] font-bold uppercase">
                  MESSAGE INQUIRY
                </span>
                {getStatusBadge(selectedMessage.status)}
              </div>
              <h2 className="font-display text-xl font-bold text-[#2b1810]">
                Inquiry from {selectedMessage.name}
              </h2>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] mb-6 text-xs">
              <div>
                <span className="text-[#6b5c54] block text-[10px] uppercase font-bold">
                  Sender Email
                </span>
                <a
                  href={`mailto:${selectedMessage.email}`}
                  className="text-[#2b1810] hover:underline font-bold"
                >
                  {selectedMessage.email}
                </a>
              </div>

              {selectedMessage.phone && (
                <div>
                  <span className="text-[#6b5c54] block text-[10px] uppercase font-bold">
                    Phone Number
                  </span>
                  <span className="text-[#2b1810] font-bold">
                    {selectedMessage.phone}
                  </span>
                </div>
              )}

              <div>
                <span className="text-[#6b5c54] block text-[10px] uppercase font-bold">
                  Received Date
                </span>
                <span className="text-[#2b1810]">
                  {selectedMessage.createdAt
                    ? new Date(selectedMessage.createdAt).toLocaleString()
                    : "N/A"}
                </span>
              </div>

              <div>
                <span className="text-[#6b5c54] block text-[10px] uppercase font-bold">
                  Inquiry ID
                </span>
                <span className="text-[#2b1810] font-mono text-[11px]">
                  {selectedMessage.id}
                </span>
              </div>
            </div>

            {/* Message Body */}
            <div className="mb-6">
              <span className="text-xs font-bold text-[#2b1810] block mb-2">
                Message Content:
              </span>
              <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[#e8ded3] text-xs sm:text-sm text-[#2b1810] leading-relaxed whitespace-pre-wrap">
                {selectedMessage.message}
              </div>
            </div>

            {/* Actions Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#e8ded3]">
              {/* Status toggles */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#6b5c54] font-medium">Status:</span>
                <button
                  type="button"
                  onClick={() => handleUpdateStatus(selectedMessage.id, "read")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    selectedMessage.status === "read"
                      ? "bg-amber-100 text-amber-800 border border-amber-300"
                      : "bg-[#faf7f2] text-[#6b5c54] hover:bg-[#f0e8dc] border border-[#e8ded3]"
                  }`}
                >
                  Read
                </button>
                <button
                  type="button"
                  onClick={() => handleUpdateStatus(selectedMessage.id, "replied")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    selectedMessage.status === "replied"
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      : "bg-[#faf7f2] text-[#6b5c54] hover:bg-[#f0e8dc] border border-[#e8ded3]"
                  }`}
                >
                  Replied
                </button>
              </div>

              {/* Reply via email & delete */}
              <div className="flex items-center gap-2 ml-auto">
                <a
                  href={`mailto:${selectedMessage.email}?subject=Regarding your inquiry at Everbloom Cafe&body=Hi ${selectedMessage.name},%0D%0A%0D%0AThank you for reaching out to Everbloom Cafe!%0D%0A%0D%0A`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleUpdateStatus(selectedMessage.id, "replied")}
                  className="px-4 py-2 rounded-xl bg-[#2b1810] hover:bg-[#1a0e09] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <Reply className="w-3.5 h-3.5" /> Reply by Email
                </a>

                <button
                  onClick={() => handleDelete(selectedMessage.id)}
                  className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition-colors"
                  title="Delete Inquiry"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
