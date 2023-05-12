import { useState } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  Image,
} from "@react-pdf/renderer"; // <-- import @react-pdf/renderer
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const styles = {
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: "Times-Roman",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
};

const PDFConverter = () => {
  const [formData, setFormData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    setFormData({ name, description, image });
  };

  const [pdfUrl, setPdfUrl] = useState("");

  const handleConvert = () => {
    html2canvas(document.body).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.width,
        pdf.internal.pageSize.height
      );
      const pdfBlob = pdf.output("blob");
      setPdfUrl(URL.createObjectURL(pdfBlob));
    });
  };
  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="py-3 my-3 px-4 block w-full border border-black rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          placeholder="This is placeholder"
          name="name"
        />
        <input
          type="text"
          className="py-3 my-3 px-4 block w-full border border-black rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          placeholder="This is placeholder"
          name="image"
        />
        <textarea
          className="py-3 my-3 px-4 block w-full border border-gray-950 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          rows="3"
          placeholder="This is a textarea placeholder"
          name="description"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          Save
        </button>
      </form>
      {/* <PDFConverter  /> */}
      <button onClick={handleConvert}>Convert to PDF</button>
      {pdfUrl && (
        <PDFDownloadLink document={<MyDocument />} fileName="document.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      )}
    </div>
  );
};

const MyDocument = ({ formData }) => {
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text>
      <Text style={styles.title}>{formData.name}</Text>
      <Image style={styles.image} src={formData.image} />
      <Text style={styles.text}>{formData.name}</Text>
      {/* <Text
      style={styles.pageNumber}
      render={({ pageNumber, totalPages }) =>
        `${pageNumber} / ${totalPages}`
      }
      fixed
    /> */}
    </Page>
  </Document>;
};

export default PDFConverter;
