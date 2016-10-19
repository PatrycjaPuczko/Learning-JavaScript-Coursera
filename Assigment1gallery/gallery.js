function upDate(previewPic) {
   var src = previewPic.getAttribute("src");
   var alt = previewPic.getAttribute("alt");
   var image = document.getElementById('image');
   image.style.backgroundImage = "url('" + src + "')";
   image.innerHTML = alt;
 }

  function unDo() {
    var image = document.getElementById('image');
    image.style.backgroundImage = "";
    image.innerHTML = "Hover over an image below to display here";
    }