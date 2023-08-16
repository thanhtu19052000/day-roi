import DocViewer from "react-doc-viewer";
import HTMLtoDOCX from "html-to-docx";
// import HtmlDocx from "html-docx-js/dist/html-docx";
import moment from "moment";
// import { renderAsyncDocument } from "react-docx";
import { saveAs } from "file-saver";
import * as Docx from "docx"; // that is a peer dependency
import Hello from "./hello";

export default function App() {
  const data = moment("12-11-2021").format("w");
  const [week, year] = [20, 2021];
  console.log(moment(`${week} ${year}`, "WW YYYY").format("ww"));
  const n = moment("20 2021", "WW YYYY")
    .startOf("isoWeek")
    .format("DD MMM YYYY");
  console.log(moment(n).add(1, "w").format("DD MMM YYYY"));
  //  console.log(moment('20 2021','WW YYYY').startOf('isoWeek').format())
  //  console.log((moment('20 2021','WW YYYY').startOf('isoWeek').format('DD MMM YYYY')))
  // console.log(moment("20 2021", "WW YYYY").format('ww'));
  // console.log(moment("2021-05-17T06:14:05.481612+00:00").format("ww"));
  const content = `<div>
  <span className="text-neutral-gray-200">
      This is to inform you that our Cyber Incident Response Team identified an incident that may affect your day-to-day activities, as well as assets or systems you’re working with. We are currently investigating the incident and will update you on the progress as needed. Details of the incident are as follows:
  </span>
  <br />
  <br />
  <span className="text-neutral-gray-200 font-bold">
      Incident reference:
  </span>
  {'<'}assign a unique ID to track the
  incident easily{'>'}
  <br />
  <span className="text-neutral-gray-200 font-bold">
      Type of Incident:
  </span>
  {'<'}
  e.g. ransomware{'>'}
  <br />
  <span className="text-neutral-gray-200 font-bold">
      Summary:
  </span>
  {'<'}provide the level of detail you
  feel is necessary{'>'}
  <br />
  <span className="text-neutral-gray-200 font-bold">
      Impact:
  </span>
  {'<'}describe the impact, e.g.
  inability to send or receive emails
  {'>'}
  <br />
  <span className="text-neutral-gray-200 font-bold">
      Affected systems:
  </span>
  {'<'}
  list any affected systems, e.g.
  Office 365
  {'>'}
  <br />
  <span className="text-neutral-gray-200 font-bold">
      What should you do:
  </span>
  {'<'}describe what actions, if any,
  are needed from the recipient(s)
  {'>'}
  <br />
  <br />
  <span className="text-neutral-gray-200 font-medium">
      Please direct any questions or
      concerns to
  </span>
  {'<'}your dedicated CIRT mailbox or
  individual contact information{'>'}
</div>`;
  const download = async () => {
    const data = await HTMLtoDOCX(content);
    console.log("data", data);
    // saveAs(data, "hello.docx");
    // Docx.Packer.toBlob(doc).then((blob) => saveAs(blob, "example.docx"));
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {data}
      <br />

      <br />

      <button onClick={() => download()}>DOwnload</button>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => console.log(moment().format("x"))}>checl</button>
      <Hello />
    </div>
  );
}
function Doc() {
  const docs = [
    { uri: require("./abc.docx") } // Local File
  ];

  return <DocViewer documents={docs} />;
}
