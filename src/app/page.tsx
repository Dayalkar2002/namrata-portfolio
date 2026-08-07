'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { UrbanCommonsProject } from '@/components/UrbanCommonsProject';
import { VerticalParadigmProject } from '@/components/VerticalParadigmProject';
import { MasterplanInteractive } from '@/components/MasterplanInteractive';
import { PhilosophySkills } from '@/components/PhilosophySkills';
import { FooterContact } from '@/components/FooterContact';
import { PdfViewerModal } from '@/components/PdfViewerModal';
import { ImageModal } from '@/components/ImageModal';

export default function Home() {
  const [pdfModalState, setPdfModalState] = useState<{
    isOpen: boolean;
    pdfPath: string;
    title: string;
  }>({
    isOpen: false,
    pdfPath: '',
    title: ''
  });

  const [imageModalState, setImageModalState] = useState<{
    isOpen: boolean;
    imgUrl: string;
    title: string;
  }>({
    isOpen: false,
    imgUrl: '',
    title: ''
  });

  const handleOpenPdf = (pdfPath: string, title: string) => {
    setPdfModalState({
      isOpen: true,
      pdfPath,
      title
    });
  };

  const handleOpenImageModal = (imgUrl: string, title: string) => {
    setImageModalState({
      isOpen: true,
      imgUrl,
      title
    });
  };

  return (
    <main className="min-h-screen bg-arch-dark text-slate-100 font-sans relative selection:bg-arch-gold selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar onOpenPdf={handleOpenPdf} />

      {/* Hero Section */}
      <Hero onOpenPdf={handleOpenPdf} />

      {/* Flagship Project: Urban Cultural Commons */}
      <UrbanCommonsProject
        onOpenPdf={handleOpenPdf}
        onOpenImageModal={handleOpenImageModal}
      />

      {/* Interactive Site Context & Masterplan */}
      <MasterplanInteractive />

      {/* Project 2: The Vertical Paradigm */}
      <VerticalParadigmProject
        onOpenPdf={handleOpenPdf}
        onOpenImageModal={handleOpenImageModal}
      />

      {/* Design Philosophy & Software Toolkit */}
      <PhilosophySkills />

      {/* Footer & Contact Form */}
      <FooterContact />

      {/* PDF Document Viewer Modal */}
      <PdfViewerModal
        isOpen={pdfModalState.isOpen}
        pdfPath={pdfModalState.pdfPath}
        title={pdfModalState.title}
        onClose={() => setPdfModalState({ ...pdfModalState, isOpen: false })}
      />

      {/* High-Resolution Image Lightbox Modal */}
      <ImageModal
        isOpen={imageModalState.isOpen}
        imgUrl={imageModalState.imgUrl}
        title={imageModalState.title}
        onClose={() => setImageModalState({ ...imageModalState, isOpen: false })}
      />
    </main>
  );
}
