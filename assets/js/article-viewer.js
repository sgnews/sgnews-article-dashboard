document.getElementById('inputFile').addEventListener('change', function() {
    var file = new FileReader();
    file.onload = () => {
        document.getElementById("articleViewer").innerHTML = file.result;
    }
    file.readAsText(this.files[0]);
});