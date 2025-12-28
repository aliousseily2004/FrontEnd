import React, { useState } from "react";
import {
  Award,
  Download,
  Calendar,
  BookOpen,
  ShieldCheck,
  X,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Certificate = {
  id: number;
  title: string;
  date: string;
  certId: string;
  instructor: string;
};

const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: "Advanced React Architecture",
    date: "Dec 2025",
    certId: "2930-XF92L",
    instructor: "Sarah Jenkins",
  },
  {
    id: 2,
    title: "Fullstack Next.js Patterns",
    date: "Oct 2025",
    certId: "4412-ZK10P",
    instructor: "Michael Chen",
  },
  {
    id: 3,
    title: "UI/UX Design Systems",
    date: "Aug 2025",
    certId: "9821-QR55M",
    instructor: "Elena Rodriguez",
  },
];

const CertificateGallery: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="p-8 bg-card min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-left">
          <h2 className="text-2xl font-bold text-card flex items-center gap-2">
            <Award className="text-blue-600" size={28} /> Learning Achievements
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Select a credential to view the full certificate.
          </p>
        </header>

        {/* --- GRID VIEW --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedCert(item)}
              className="text-left group bg-white border border-slate-200 border-t-4 border-t-blue-600 p-5 shadow-sm hover:shadow-md transition-all rounded-b-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <BookOpen className="text-blue-600" size={20} />
                <span className="text-[10px] font-mono text-slate-400">
                  {item.certId}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 leading-tight mb-4 h-10 line-clamp-2">
                {item.title}
              </h3>
              <div className="flex items-center gap-3 mt-auto border-t border-slate-50 pt-3">
                <div className="flex items-center gap-1 text-[11px] text-slate-500">
                  <Calendar size={12} /> {item.date}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-green-600 font-medium">
                  <ShieldCheck size={12} /> Verified
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* --- MODAL VIEW --- */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          />

          {/* Certificate Modal */}
          <div className="relative w-full max-w-2xl bg-white shadow-2xl border-t-12 border-blue-600 p-8 md:p-12 z-10 transform transition-transform scale-100 duration-200">
            {/* Close Button */}
            <button
              title="closebtn"
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex justify-between mb-12">
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-2 rounded shadow-lg">
                  <BookOpen className="text-white" size={24} />
                </div>
                <span className="font-bold text-lg tracking-tight uppercase text-slate-800">
                  EDUTECH
                </span>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Verify Credential
                </p>
                <p className="font-mono text-xs text-blue-600 font-bold">
                  {selectedCert.certId}
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center space-y-6">
              <h3 className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em]">
                Certificate of Completion
              </h3>
              <div className="py-2">
                <p className="text-slate-400 italic text-sm">
                  This is to certify that
                </p>
                <h1 className="text-4xl font-serif font-bold text-slate-900 mt-2">
                  Alex Thompson
                </h1>
              </div>
              <div className="max-w-sm mx-auto">
                <p className="text-sm text-slate-500 leading-relaxed">
                  has successfully met all requirements for the professional
                  course:
                </p>
                <p className="text-xl font-bold text-slate-900 mt-2">
                  {selectedCert.title}
                </p>
              </div>

              {/* Verification Bar */}
              <div className="flex justify-center items-center gap-6 py-4 text-xs font-medium text-slate-500 border-y border-slate-100 mt-8">
                <span className="flex items-center gap-1.5 uppercase tracking-wider">
                  <Calendar size={14} className="text-blue-600" />{" "}
                  {selectedCert.date}
                </span>
                <span className="flex items-center gap-1.5 uppercase tracking-wider">
                  <ShieldCheck size={14} className="text-blue-600" /> Verified
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 flex justify-between items-end">
              <div className="space-y-2">
                <div className="h-8 w-40 border-b border-slate-200 italic font-serif text-lg text-slate-700 px-1">
                  {selectedCert.instructor}
                </div>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                  Authorized Signature
                </p>
              </div>

              <div className="flex flex-col items-end gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700 shadow-md flex items-center gap-2">
                  <Download className="h-4 w-4" /> Export PDF
                </Button>
                <p className="text-[9px] text-slate-400 flex items-center gap-1">
                  <ExternalLink size={10} /> Verify at edutech.com/verify
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateGallery;
