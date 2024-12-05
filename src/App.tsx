import PDFViewer from './components/PDFViewer';
import InfoPanel from './components/InfoPanel';

function App() {
  // Use the local PDF file from the public directory
  // const pdfUrl = `${process.env.PUBLIC_URL}/IIM_Shillong_Executive_MBA.pdf`;
  const pdfUrl = "https://drive.google.com/file/d/1FqcLbTQmBQMD0vZQ3-Ug-hGCCqTFyhKB/view?usp=sharing"
  return (
    <div className="flex h-screen">
      <div className="flex-1 border-r overflow-auto">
        <PDFViewer pdfUrl={pdfUrl} />
      </div>
      <div className="w-[300px] flex-shrink-0">
        <InfoPanel />
      </div>
    </div>
  );
}

export default App;
