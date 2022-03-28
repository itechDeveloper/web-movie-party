function downloadMovie(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 
    'https://youtu.be/1C_CzLA2lS8'
    , true);
    xhr.responseType = 'blob';
    xhr.onload = function(){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.target = '_blank';
        tag.download = 'demo.mp4';
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.onerror = err => {
        alert('Failed to download: ' + err);
    };
    xhr.send();
}