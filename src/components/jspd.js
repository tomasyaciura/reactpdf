import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

const divToDisplay = document.getElementById('fieldset')
html2canvas(divToDisplay).then(function (canvas) {
    const divImage = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(divImage, 'PNG', 0, 0);
    pdf.save("download.pdf");
})
export default jsPDF;