function toggleVisibility(imageId) {
    var image = document.getElementById(imageId);
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}
