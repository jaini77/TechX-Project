function myfunction()
{
    window.location.href="Home.html";
}
// 
function open_file() {
    document.getElementById('input_file').click();
}
const input_file= document.getElementById("input_file");
const imgPreview = document.getElementById("img_preview");
input_file.addEventListener("change", function () {
    getImgData();
});
function getImgData() 
{
    const files = input_file.files[0];
    if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () 
        {
            imgPreview.style.display = "block";
            imgPreview.innerHTML = '<img src="' + this.result + '" />';
        });    
    }
}