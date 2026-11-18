import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

// GET current resume metadata
export async function GET() {
  try {
    const publicResumePath = path.join(process.cwd(), "public", "Manjunath_Itagi_FullStack_Resume.pdf");
    
    if (!fs.existsSync(publicResumePath)) {
      return NextResponse.json({
        exists: false,
        message: "No resume found in public directory.",
      });
    }

    const stats = fs.statSync(publicResumePath);
    const sizeKB = (stats.size / 1024).toFixed(1);

    return NextResponse.json({
      exists: true,
      fileName: "Manjunath_Itagi_FullStack_Resume.pdf",
      sizeBytes: stats.size,
      sizeKB: `${sizeKB} KB`,
      lastModified: stats.mtime.toISOString(),
      url: `/Manjunath_Itagi_FullStack_Resume.pdf?v=${stats.mtimeMs}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read resume file information", details: String(error) },
      { status: 500 }
    );
  }
}

// POST upload and overwrite resume
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided. Please select a PDF file to upload." },
        { status: 400 }
      );
    }

    // Validation: must be PDF
    if (!file.name.toLowerCase().endsWith(".pdf") || (file.type && !file.type.includes("pdf"))) {
      return NextResponse.json(
        { error: "Invalid file type. Only PDF files (.pdf) are permitted." },
        { status: 400 }
      );
    }

    // Max 15MB limit
    const MAX_SIZE = 15 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "File exceeds maximum size limit of 15MB." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Target destinations:
    // 1. public/Manjunath_Itagi_FullStack_Resume.pdf (downloaded by visitors)
    const publicDest = path.join(process.cwd(), "public", "Manjunath_Itagi_FullStack_Resume.pdf");
    // 2. root Manjunath_Itagi_FullStack_Resume.pdf (workspace root)
    const rootDest = path.join(process.cwd(), "Manjunath_Itagi_FullStack_Resume.pdf");
    // Write file to both destinations
    fs.writeFileSync(publicDest, buffer);
    fs.writeFileSync(rootDest, buffer);

    const stats = fs.statSync(publicDest);
    const sizeKB = (stats.size / 1024).toFixed(1);

    return NextResponse.json({
      success: true,
      message: "Resume updated successfully! The new PDF is live across all download links.",
      fileName: "Manjunath_Itagi_FullStack_Resume.pdf",
      sizeKB: `${sizeKB} KB`,
      lastModified: stats.mtime.toISOString(),
      url: `/Manjunath_Itagi_FullStack_Resume.pdf?v=${stats.mtimeMs}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Server error occurred while saving the uploaded resume", details: String(error) },
      { status: 500 }
    );
  }
}
