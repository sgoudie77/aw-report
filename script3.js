// Save BG2 Player Input Field Text To Local Storage
document.getElementById("saveb").addEventListener("click", function() {
    var firstPlayerb = document.getElementById('p1b').value;
    var secondPlayerb = document.getElementById('p2b').value;
    var thirdPlayerb = document.getElementById('p3b').value;
    var fourthPlayerb = document.getElementById('p4b').value;
    var fifthPlayerb = document.getElementById('p5b').value;
    var sixthPlayerb = document.getElementById('p6b').value;
    var seventhPlayerb = document.getElementById('p7b').value;
    var eighthPlayerb = document.getElementById('p8b').value;
    var ninthPlayerb = document.getElementById('p9b').value;
    var tenthPlayerb = document.getElementById('p10b').value;
    localStorage.setItem('p1b', firstPlayerb);
    localStorage.setItem('p2b', secondPlayerb);
    localStorage.setItem('p3b', thirdPlayerb);
    localStorage.setItem('p4b', fourthPlayerb);
    localStorage.setItem('p5b', fifthPlayerb);
    localStorage.setItem('p6b', sixthPlayerb);
    localStorage.setItem('p7b', seventhPlayerb);
    localStorage.setItem('p8b', eighthPlayerb);
    localStorage.setItem('p9b', ninthPlayerb);
    localStorage.setItem('p10b', tenthPlayerb);
    alert("Saved Players");
}, false);

// Display BG2 Player Input Field Text From Local Storage
document.getElementById("reloadb").addEventListener("click", function() {
    document.getElementById('p1b').value = localStorage.getItem('p1b');
    document.getElementById('p2b').value = localStorage.getItem('p2b');
    document.getElementById('p3b').value = localStorage.getItem('p3b');
    document.getElementById('p4b').value = localStorage.getItem('p4b');
    document.getElementById('p5b').value = localStorage.getItem('p5b');
    document.getElementById('p6b').value = localStorage.getItem('p6b');
    document.getElementById('p7b').value = localStorage.getItem('p7b');
    document.getElementById('p8b').value = localStorage.getItem('p8b');
    document.getElementById('p9b').value = localStorage.getItem('p9b');
    document.getElementById('p10b').value = localStorage.getItem('p10b');
    alert("(Reloaded Players");
}, false);