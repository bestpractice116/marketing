import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ZoomIn, ZoomOut } from 'lucide-react';
import { ClipLoader } from 'react-spinners';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

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

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  const zoomIn = () => setScale(prev => prev + 0.1);
  const zoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.5));

  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-500 p-4 border-b flex items-center justify-between shadow-sm">
        <div className="text-white font-semibold">
          Total Pages: {numPages}
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
      <div className="flex-1 overflow-auto bg-gray-700">
        {loading && (
          <div className="flex items-center justify-center h-full">
            <ClipLoader color="#ffffff" size={50} />
          </div>
        )}
        <div className={`max-w-4xl mx-auto my-4 ${loading ? 'hidden' : ''}`} ref={ref => ref && setContainerWidth(ref.clientWidth)}>
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            className="flex flex-col gap-4"
          >
            {Array.from(new Array(numPages), (_, index) => (
              <div key={`page_${index + 1}`} className="shadow-lg">
                <Page
                  pageNumber={index + 1}
                  width={containerWidth * scale}
                  className="bg-white"
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              </div>
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}