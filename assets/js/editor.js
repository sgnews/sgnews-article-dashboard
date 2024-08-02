tinymce.init({
    selector: 'textarea#editor',
    mobile: {
    menubar: false
    },
    height: 550,
    plugins: [
    'advlist autolink lists link image charmap print preview anchor template ',
    'searchreplace visualblocks code codesample fullscreen pagebreak importcss noneditable',
    'insertdatetime media table paste code help wordcount imagetools'
    ],
    codesample_languages: [
      {text: 'HTML/XML', value: 'markup'},
      {text: 'JavaScript', value: 'javascript'},
      {text: 'CSS', value: 'css'},
      {text: 'PHP', value: 'php'},
      {text: 'Ruby', value: 'ruby'},
      {text: 'Python', value: 'python'},
      {text: 'Java', value: 'java'},
      {text: 'C', value: 'c'},
      {text: 'C#', value: 'csharp'},
      {text: 'C++', value: 'cpp'}
    ],
    menubar: 'file edit view insert format tools table tc help ',
    toolbar: 'undo redo | fontselect fontsizeselect formatselect | ' +
    'bold italic forecolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist table outdent indent pagebreak | ' +
    'anchor link image media template | ' +
    'removeformat | charmap | fullscreen ',
    content_css: 'templates/resources/theme.css',
    noneditable_noneditable_class: 'mceNonEditable',
    templates: [
    {title: 'Web Article', description: 'Ein Style für "seriöse" und große Visionen', url: 'templates/web_article.html'},
    {title: 'website navigation', description: 'Ein Abschnitt für den Anfang der Seite, der zum navigieren im und zu anderen Seiten ist.', content: '<nav class="mceNonEditable" id="fixednav"><button onclick="goBack();">Zur&uuml;ck</button></nav>'},
    {title: 'website footer', description: 'Ein Abschnitt für das Ende der Website mit Social Media Verlinkungen, Info und mehr...', content: '<div class="mceNonEditable" id="footer"><p style="text-align:center;"><a href="mailto:sg-news@sgy-dt.de">Email</a></p><p style="text-align:center;">SGNews | eine AG des Stadtgymnasium Detmold</p></div>'},
    ],
    skin: 'oxide6',
    });





function makeTextFile( text ) {
    var textFile = null;
    var data = new Blob( [text], {type:'text/html'} );
    if (textFile !== null) window.URL.revokeObjectURL(textFile);
    textFile = window.URL.createObjectURL(data);
    return textFile;
    }

    function generateFileName(hametag) {
    var t = hametag.value;
    var t = t.toLowerCase();
    tconv = t.replace(/\s+/g, '-');
    tconv = tconv + '.html';
    }

    function saveTxt() {
        generateFileName(document.getElementById('title'))
        siteurl = "http://localhost:5500";
        var content = '<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="' + siteurl + '/dashboard/article-designer/templates/resources/theme.css"><link rel="icon" type="image/png" href="' + siteurl + '/assets/img/logo.png"><link rel=”apple-touch-icon” type="image/png" href="' + siteurl + '/assets/img/logo.png"><title>' + document.getElementById('title').value + ' | SGNews</title></head><body onload="onLoadSite()">' + tinymce.activeEditor.getContent() + '</body><script src="' + siteurl + '/dashboard/article-designer/templates/resources/templates.js"></script></html>'
        $('<a/>',{
            hidden: false,
            download: tconv,
            href: makeTextFile( content )
        }).appendTo("body")[0].click();
    }
    



    
//upload file

document.getElementById('inputFile').addEventListener('change', function() {
var file = new FileReader();
file.onload = () => {
    tinymce.get("editor").setContent(file.result);
}
file.readAsText(this.files[0]);
});