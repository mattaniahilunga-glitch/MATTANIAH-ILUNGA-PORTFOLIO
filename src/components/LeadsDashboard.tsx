import React, { useState, useEffect } from "react";
import { ContactLead } from "../types";
import { DynamicIcon } from "./DynamicIcon";

interface LeadsDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadsDashboard: React.FC<LeadsDashboardProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<ContactLead[]>([]);
  const [search, setSearch] = useState("");
  const [filterRead, setFilterRead] = useState<"all" | "unread" | "read">("all");

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen]);

  const loadLeads = () => {
    const saved = localStorage.getItem("ilunga_man_contact_leads");
    if (saved) {
      try {
        setLeads(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing leads", e);
      }
    }
  };

  const markAsRead = (id: string) => {
    const updated = leads.map((lead) =>
      lead.id === id ? { ...lead, read: !lead.read } : lead
    );
    localStorage.setItem("ilunga_man_contact_leads", JSON.stringify(updated));
    setLeads(updated);
  };

  const deleteLead = (id: string) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      const updated = leads.filter((lead) => lead.id !== id);
      localStorage.setItem("ilunga_man_contact_leads", JSON.stringify(updated));
      setLeads(updated);
    }
  };

  const clearAll = () => {
    if (window.confirm("Are you sure you want to delete ALL leads?")) {
      localStorage.removeItem("ilunga_man_contact_leads");
      setLeads([]);
    }
  };

  if (!isOpen) return null;

  const filteredLeads = leads
    .filter((lead) => {
      const matchSearch =
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase()) ||
        lead.subject.toLowerCase().includes(search.toLowerCase()) ||
        lead.message.toLowerCase().includes(search.toLowerCase());

      if (filterRead === "unread") return matchSearch && !lead.read;
      if (filterRead === "read") return matchSearch && lead.read;
      return matchSearch;
    })
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div 
        id="leads-dashboard-container"
        className="w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl glass-card flex flex-col box-glow-strong"
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600/10 text-blue-400 rounded-lg">
              <DynamicIcon name="FileText" size={20} />
            </div>
            <div>
              <h2 className="text-xl font-display font-semibold tracking-tight">Leads & Form Submissions</h2>
              <p className="text-xs text-zinc-400 font-mono">Secured Client Inflow Dashboard (Local Storage Engine)</p>
            </div>
          </div>
          <button
            id="close-leads-btn"
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
          >
            <DynamicIcon name="X" size={20} />
          </button>
        </div>

        {/* Filters */}
        <div className="p-4 bg-zinc-950/60 border-b border-white/10 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500">
              <DynamicIcon name="Search" className="w-4 h-4" size={16} />
            </span>
            <input
              id="search-leads-input"
              type="text"
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-zinc-900 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="flex space-x-2">
            {(["all", "unread", "read"] as const).map((type) => (
              <button
                id={`filter-${type}-btn`}
                key={type}
                onClick={() => setFilterRead(type)}
                className={`flex-1 py-2 text-xs font-medium rounded-lg capitalize transition-colors cursor-pointer ${
                  filterRead === type
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-white/5"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex justify-end space-x-2">
            <button
              id="refresh-leads-btn"
              onClick={loadLeads}
              className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg border border-white/5 text-xs font-mono flex items-center gap-1 cursor-pointer"
            >
              <DynamicIcon name="RefreshCw" size={14} /> Refresh
            </button>
            {leads.length > 0 && (
              <button
                id="clear-all-leads-btn"
                onClick={clearAll}
                className="p-2 bg-red-950/40 hover:bg-red-900/40 text-red-400 rounded-lg border border-red-900/30 text-xs font-mono flex items-center gap-1 cursor-pointer"
              >
                <DynamicIcon name="Trash2" size={14} /> Clear All
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {filteredLeads.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-flex p-3 bg-zinc-900 rounded-full text-zinc-600 mb-3">
                <DynamicIcon name="Mail" size={24} />
              </div>
              <p className="text-zinc-400 font-medium">No submissions found</p>
              <p className="text-zinc-500 text-xs mt-1">Form messages will appear here in real-time as users submit them.</p>
            </div>
          ) : (
            filteredLeads.map((lead) => (
              <div
                id={`lead-card-${lead.id}`}
                key={lead.id}
                className={`p-5 rounded-xl border transition-all ${
                  lead.read
                    ? "bg-zinc-950/40 border-white/5 opacity-70"
                    : "bg-blue-950/10 border-blue-500/20 box-glow"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-white">{lead.name}</span>
                      <span className="text-xs font-mono text-zinc-500">•</span>
                      <span className="text-xs text-blue-400 font-mono">{lead.email}</span>
                      {lead.phone && (
                        <>
                          <span className="text-xs font-mono text-zinc-500">•</span>
                          <span className="text-xs text-green-400 font-mono">{lead.phone}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-sm font-medium text-zinc-200 mt-1">
                      Subject: <span className="text-white">{lead.subject}</span>
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2 self-start md:self-auto">
                    <span className="text-xs text-zinc-500 font-mono">
                      {new Date(lead.timestamp).toLocaleString()}
                    </span>
                    <button
                      id={`mark-read-btn-${lead.id}`}
                      onClick={() => markAsRead(lead.id)}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        lead.read
                          ? "bg-zinc-900 text-zinc-500 hover:text-zinc-300"
                          : "bg-blue-600/10 text-blue-400 hover:bg-blue-600/20"
                      }`}
                      title={lead.read ? "Mark as Unread" : "Mark as Read"}
                    >
                      <DynamicIcon name="Check" size={14} />
                    </button>
                    <button
                      id={`delete-lead-btn-${lead.id}`}
                      onClick={() => deleteLead(lead.id)}
                      className="p-1.5 bg-red-950/20 text-red-400 hover:bg-red-950/40 rounded-lg transition-colors cursor-pointer"
                      title="Delete Lead"
                    >
                      <DynamicIcon name="Trash2" size={14} />
                    </button>
                  </div>
                </div>
                <div className="p-3 bg-black/60 rounded-lg text-sm text-zinc-300 whitespace-pre-wrap font-sans border border-white/5">
                  {lead.message}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-black/40 text-center text-xs text-zinc-500 font-mono">
          Submission data is stored fully offline within your browser's LocalStorage system.
        </div>
      </div>
    </div>
  );
};
