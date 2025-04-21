// Create a variable that grabs the export button
var exportBg1 = document.getElementById("export-aw-report");

// Add an event listener to the button
exportBg1.addEventListener("click", exportClickbg);

// Functions to handle the export when clicked
function exportClickbg(e) {
    // prevent default event actions
    e.preventDefault();
    // execute the image conversion
    convertbgimage();
}

function convertbgimage() {
    domtoimage
        // reference the exact area to export
        .toJpeg(document.getElementById("aw-report"), {
        quality: 0.95
    })
    .then(function (dataUrl) {
        // code to make the download happen
        var link = document.createElement("a");
        // this is the file users can rename and download
        link.download = "aw-report.jpeg";
        link.href = dataUrl;
        link.click();
    });
}

// Auto Add ABL Totals 
function sumAbl() {
    var txtFirstNumberValue = document.getElementById('abl1').value;
    var txtSecondNumberValue = document.getElementById('abl2').value;
    var txtThirdNumberValue = document.getElementById('abl3').value;
    var txtFourthNumberValue = document.getElementById('abl4').value;
    var txtFifthNumberValue = document.getElementById('abl5').value;
    var txtSixthNumberValue = document.getElementById('abl6').value;
    var txtSeventhNumberValue = document.getElementById('abl7').value;
    var txtEighthNumberValue = document.getElementById('abl8').value;
    var txtNinthNumberValue = document.getElementById('abl9').value;
    var txtTenthNumberValue = document.getElementById('abl10').value;
    
    var resultAbl = parseInt(txtFirstNumberValue) + parseInt(txtSecondNumberValue) + parseInt(txtThirdNumberValue) + parseInt(txtFourthNumberValue) + parseInt(txtFifthNumberValue) + parseInt(txtSixthNumberValue) + parseInt(txtSeventhNumberValue) + parseInt(txtEighthNumberValue) + parseInt(txtNinthNumberValue) + parseInt(txtTenthNumberValue);

    if (!isNaN(resultAbl)) {
        document.getElementById('abl11').value = resultAbl;
    }
}

// Auto Add ABS Totals 
function sumAbs() {
    var txtFirstNumberValue = document.getElementById('abs1').value;
    var txtSecondNumberValue = document.getElementById('abs2').value;
    var txtThirdNumberValue = document.getElementById('abs3').value;
    var txtFourthNumberValue = document.getElementById('abs4').value;
    var txtFifthNumberValue = document.getElementById('abs5').value;
    var txtSixthNumberValue = document.getElementById('abs6').value;
    var txtSeventhNumberValue = document.getElementById('abs7').value;
    var txtEighthNumberValue = document.getElementById('abs8').value;
    var txtNinthNumberValue = document.getElementById('abs9').value;
    var txtTenthNumberValue = document.getElementById('abs10').value;
    
    var resultAbs = parseInt(txtFirstNumberValue) + parseInt(txtSecondNumberValue) + parseInt(txtThirdNumberValue) + parseInt(txtFourthNumberValue) + parseInt(txtFifthNumberValue) + parseInt(txtSixthNumberValue) + parseInt(txtSeventhNumberValue) + parseInt(txtEighthNumberValue) + parseInt(txtNinthNumberValue) + parseInt(txtTenthNumberValue);

    if (!isNaN(resultAbs)) {
        document.getElementById('abs11').value = resultAbs;
    }
}
