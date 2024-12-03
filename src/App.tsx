import React from 'react';
import PDFViewer from './components/PDFViewer';
import InfoPanel from './components/InfoPanel';

function App() {
  // Replace this URL with your actual PDF URL
  const pdfUrl = "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf";

  return (
    <div className="flex h-screen">
      <div className="flex-1 border-r">
        <PDFViewer pdfUrl={pdfUrl} />
      </div>
      <div className="w-[230px] ">
        <InfoPanel />
      </div>
    </div>
  );
}

export default App;
