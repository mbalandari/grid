var modal = document.getElementById('myModal');
var myIMG = ['myimg1', 'myimg2']
    for (var i = 0; i < myIMG.length; i++) {
        var img = document.getElementById(myIMG[i]);
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}