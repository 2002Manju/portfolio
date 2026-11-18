"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

type ResumeInfo = {
  exists: boolean;
  fileName: string;
  sizeBytes?: number;
  sizeKB?: string;
  lastModified?: string;
  url?: string;
};

export default function AdminResumePage() {
  const [mounted, setMounted] = useState(false);
  const [resumeInfo, setResumeInfo] = useState<ResumeInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [pdfTimestamp, setPdfTimestamp] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch current resume information
  const fetchResumeInfo = async () => {
    try {
      const res = await fetch("/api/upload-resume", { cache: "no-store" });
      const data = await res.json();
      setResumeInfo(data);
      setPdfTimestamp(Date.now());
    } catch {
      setMessage({ text: "Failed to load current resume status.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    fetchResumeInfo();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file: File) => {
    setMessage(null);
    if (!file.name.toLowerCase().endsWith(".pdf")) {
      setMessage({ text: "Only PDF (.pdf) documents are accepted.", type: "error" });
      return;
    }
    if (file.size > 15 * 1024 * 1024) {
      setMessage({ text: "Selected file exceeds the 15MB size limit.", type: "error" });
      return;
    }
    setSelectedFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setUploading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await fetch("/api/upload-resume", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMessage({
          text: `Success! New resume deployed (${data.sizeKB}). All portfolio download links are now serving this version.`,
          type: "success",
        });
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        fetchResumeInfo();
      } else {
        setMessage({ text: data.error || "Upload failed. Please check file format and try again.", type: "error" });
      }
    } catch {
      setMessage({ text: "Network error occurred while uploading resume.", type: "error" });
    } finally {
      setUploading(false);
    }
  };

  if (!mounted) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-2.5 py-0.5 text-xs font-medium text-teal-400">
                Unlisted Route
              </span>
              <span className="text-xs text-white/40">/admin</span>
            </div>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Resume Asset Portal
            </h1>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80"
          >
            ← Return to Portfolio
          </Link>
        </div>
        <div className="flex h-64 items-center justify-center text-sm text-white/50">
          <div className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-teal-400 border-t-transparent" />
          Loading admin console...
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Bar */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-2.5 py-0.5 text-xs font-medium text-teal-400">
              Unlisted Route
            </span>
            <span className="text-xs text-white/40">/admin</span>
          </div>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Resume Asset Portal
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Upload and deploy updated resume PDFs directly to the portfolio web server.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-teal-500/40 hover:bg-white/10 hover:text-white"
        >
          ← Return to Portfolio
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Status and Upload Form */}
        <div className="space-y-6 lg:col-span-5">
          {/* Current Status Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Active Production Resume
            </h2>
            {loading ? (
              <div className="mt-3 flex items-center gap-2 text-sm text-white/50">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-teal-400 border-t-transparent" />
                Querying active file metadata...
              </div>
            ) : resumeInfo?.exists ? (
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center justify-between text-white/80">
                  <span className="text-white/40">File:</span>
                  <span className="font-mono text-xs text-white/90">{resumeInfo.fileName}</span>
                </div>
                <div className="flex items-center justify-between text-white/80">
                  <span className="text-white/40">Size:</span>
                  <span className="font-semibold text-teal-300">{resumeInfo.sizeKB}</span>
                </div>
                {resumeInfo.lastModified && (
                  <div className="flex items-center justify-between text-white/80">
                    <span className="text-white/40">Updated:</span>
                    <span className="text-xs text-white/70">
                      {new Date(resumeInfo.lastModified).toLocaleString()}
                    </span>
                  </div>
                )}
                <div className="pt-2">
                  <a
                    href={`/Manjunath_Itagi_FullStack_Resume.pdf?v=${pdfTimestamp || 1}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-teal-500/30 bg-teal-500/10 px-3 py-2 text-xs font-medium text-teal-300 transition hover:bg-teal-500/20"
                  >
                    Open Active PDF in New Tab ↗
                  </a>
                </div>
              </div>
            ) : (
              <p className="mt-2 text-sm text-amber-400">
                No active resume found in public directory.
              </p>
            )}
          </div>

          {/* Upload Form Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Upload New Version
            </h2>
            <p className="mt-1 text-xs text-white/50">
              Uploading will immediately replace the public download asset.
            </p>

            <form onSubmit={handleUpload} className="mt-4 space-y-4">
              {/* Drag & Drop Zone */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition ${
                  isDragOver
                    ? "border-teal-400 bg-teal-500/10"
                    : selectedFile
                    ? "border-teal-500/50 bg-white/[0.05]"
                    : "border-white/15 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10 text-teal-400">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>

                {selectedFile ? (
                  <div className="mt-3">
                    <p className="font-mono text-xs font-medium text-white">{selectedFile.name}</p>
                    <p className="mt-0.5 text-xs text-teal-400">
                      {(selectedFile.size / 1024).toFixed(1)} KB · Ready to deploy
                    </p>
                  </div>
                ) : (
                  <div className="mt-3">
                    <p className="text-xs font-medium text-white/80">
                      Click to browse or drag & drop PDF
                    </p>
                    <p className="mt-1 text-[11px] text-white/40">Only .pdf documents up to 15MB</p>
                  </div>
                )}
              </div>

              {/* Upload Action Button */}
              <button
                type="submit"
                disabled={!selectedFile || uploading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {uploading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                    Replacing Resume...
                  </>
                ) : (
                  "Deploy Updated Resume"
                )}
              </button>

              {/* Notification Banner */}
              {message && (
                <div
                  className={`rounded-xl border p-3.5 text-xs leading-relaxed ${
                    message.type === "success"
                      ? "border-teal-500/30 bg-teal-500/10 text-teal-200"
                      : "border-rose-500/30 bg-rose-500/10 text-rose-200"
                  }`}
                >
                  {message.text}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Right Column: Live Embedded PDF Preview */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                Live Document Preview
              </h2>
              <button
                type="button"
                onClick={() => setPdfTimestamp(Date.now())}
                className="text-xs text-white/40 transition hover:text-teal-300"
              >
                ↻ Refresh Preview
              </button>
            </div>

            <div className="h-[680px] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
              <iframe
                key={pdfTimestamp}
                src={`/Manjunath_Itagi_FullStack_Resume.pdf?v=${pdfTimestamp || 1}#toolbar=0&navpanes=0`}
                className="h-full w-full border-0"
                title="Current Resume Preview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
