import { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ZoomIn, ZoomOut } from 'lucide-react';
import { ClipLoader } from 'react-spinners';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import PopUp from "./Popup"
// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (!isOpen) {
  //     const timer = setTimeout(() => {
  //       setIsOpen(true);
  //     }, 10000); // Reopen the popup after 10 seconds

  //     return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  //   }
  // }, [isOpen]);
  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(document.documentElement.clientWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial width

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const pageElements = containerRef.current.querySelectorAll('.react-pdf__Page');
      let current = 1;
      pageElements.forEach((page, index) => {
        const rect = page.getBoundingClientRect();
        if (rect.top <= containerRef.current!.clientHeight / 2) {
          current = index + 1;
        }
      });
      setCurrentPage(current);
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  const zoomIn = () => setScale(prev => prev + 0.1);
  const zoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.5));

  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-500 p-2 md:p-4 border-b flex items-center justify-between shadow-sm">
        <div className="text-white text-sm md:text-base font-medium md:font-semibold rounded-full bg-gray-600 px-3 py-1">
          PAGE {currentPage} OF {numPages}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={zoomOut}
            className="p-2 rounded  transition-colors text-white font-semibold"
            title="Zoom Out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <span className="w-16 text-center text-white font-semibold">{Math.round(scale * 100)}%</span>
          <button
            onClick={zoomIn}
            className="p-2 rounded  transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-5 h-5 text-white font-semibold" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-gray-700" ref={containerRef}>
        {loading && (
          <div className="flex items-center justify-center h-full">
            <ClipLoader color="#ffffff" size={50} />
          </div>
        )}
        <div className={`max-w-4xl mx-auto my-4 ${loading ? 'hidden' : ''}`} ref={ref => ref && setContainerWidth(ref.clientWidth)}>
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(error) => console.error('Error loading PDF:', error)}
            className="flex flex-col gap-4"
          >
            {Array.from(new Array(numPages), (_, index) => (
              <div key={`page_${index + 1}`} className="shadow-lg">
                <Page
                  pageNumber={index + 1}
                  width={Math.min(containerWidth * scale, window.innerWidth)}
                  className="bg-white"
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              </div>
            ))}
          </Document>
        </div>
      </div>
      <PopUp isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
}

