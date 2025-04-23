// Save BG1 Player Input Field Text To Local Storage
document.getElementById("save").addEventListener("click", function() {
    var firstPlayer = document.getElementById('p1').value;
    var secondPlayer = document.getElementById('p2').value;
    var thirdPlayer = document.getElementById('p3').value;
    var fourthPlayer = document.getElementById('p4').value;
    var fifthPlayer = document.getElementById('p5').value;
    var sixthPlayer = document.getElementById('p6').value;
    var seventhPlayer = document.getElementById('p7').value;
    var eighthPlayer = document.getElementById('p8').value;
    var ninthPlayer = document.getElementById('p9').value;
    var tenthPlayer = document.getElementById('p10').value;
    localStorage.setItem('p1', firstPlayer);
    localStorage.setItem('p2', secondPlayer);
    localStorage.setItem('p3', thirdPlayer);
    localStorage.setItem('p4', fourthPlayer);
    localStorage.setItem('p5', fifthPlayer);
    localStorage.setItem('p6', sixthPlayer);
    localStorage.setItem('p7', seventhPlayer);
    localStorage.setItem('p8', eighthPlayer);
    localStorage.setItem('p9', ninthPlayer);
    localStorage.setItem('p10', tenthPlayer);
    alert("Saved Players");
}, false);

// Display BG1 Player Input Field Text From Local Storage
document.getElementById("reload").addEventListener("click", function() {
    document.getElementById('p1').value = localStorage.getItem('p1');
    document.getElementById('p2').value = localStorage.getItem('p2');
    document.getElementById('p3').value = localStorage.getItem('p3');
    document.getElementById('p4').value = localStorage.getItem('p4');
    document.getElementById('p5').value = localStorage.getItem('p5');
    document.getElementById('p6').value = localStorage.getItem('p6');
    document.getElementById('p7').value = localStorage.getItem('p7');
    document.getElementById('p8').value = localStorage.getItem('p8');
    document.getElementById('p9').value = localStorage.getItem('p9');
    document.getElementById('p10').value = localStorage.getItem('p10');
    alert("(Reloaded Players");
}, false);