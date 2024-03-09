document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', function() {
        var nameValue = document.getElementById('name').value;
        console.log(nameValue);
        nameValue.value = '';
        document.getElementById('ImageContainer').src = ''; 

        var PSD = require('psd');
        PSD.fromURL("/certificate/certificates.psd").then(function(psd) {
            document.getElementById('ImageContainer').appendChild(psd.image.toPng());
          });
    });
    
});
