// Save BG3 Player Input Field Text To Local Storage
document.getElementById("savec").addEventListener("click", function() {
    var firstPlayerc = document.getElementById('p1c').value;
    var secondPlayerc = document.getElementById('p2c').value;
    var thirdPlayerc = document.getElementById('p3c').value;
    var fourthPlayerc = document.getElementById('p4c').value;
    var fifthPlayerc = document.getElementById('p5c').value;
    var sixthPlayerc = document.getElementById('p6c').value;
    var seventhPlayerc = document.getElementById('p7c').value;
    var eighthPlayerc = document.getElementById('p8c').value;
    var ninthPlayerc = document.getElementById('p9c').value;
    var tenthPlayerc = document.getElementById('p10c').value;
    localStorage.setItem('p1c', firstPlayerc);
    localStorage.setItem('p2c', secondPlayerc);
    localStorage.setItem('p3c', thirdPlayerc);
    localStorage.setItem('p4c', fourthPlayerc);
    localStorage.setItem('p5c', fifthPlayerc);
    localStorage.setItem('p6c', sixthPlayerc);
    localStorage.setItem('p7c', seventhPlayerc);
    localStorage.setItem('p8c', eighthPlayerc);
    localStorage.setItem('p9c', ninthPlayerc);
    localStorage.setItem('p10c', tenthPlayerc);
    alert("Saved Players");
}, false);

// Display BG3 Player Input Field Text From Local Storage
document.getElementById("reloadc").addEventListener("click", function() {
    document.getElementById('p1c').value = localStorage.getItem('p1c');
    document.getElementById('p2c').value = localStorage.getItem('p2c');
    document.getElementById('p3c').value = localStorage.getItem('p3c');
    document.getElementById('p4c').value = localStorage.getItem('p4c');
    document.getElementById('p5c').value = localStorage.getItem('p5c');
    document.getElementById('p6c').value = localStorage.getItem('p6c');
    document.getElementById('p7c').value = localStorage.getItem('p7c');
    document.getElementById('p8c').value = localStorage.getItem('p8c');
    document.getElementById('p9c').value = localStorage.getItem('p9c');
    document.getElementById('p10c').value = localStorage.getItem('p10c');
    alert("(Reloaded Players");
}, false);