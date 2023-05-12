import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFConverter from "./Component/PDFConverter/PDFConverter";
import PdfFile from "./Component/PdfFile/PdfFile";

const App = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="font-bold text-2xl text-blue-600 ">React PDF Converter</h1>
      {/* <PDFConverter /> */}
      <PdfFile />
    </div>
  );
};

export default App;
