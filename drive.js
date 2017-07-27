(function() {
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = JWTubeThumb(v[n].dataset.id);
        p.onclick = JWTubeIframe;
        v[n].appendChild(p);
    }
})();
 
 
function JWTubeIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://drive.google.com/file/d/" + this.parentNode.dataset.id + "/preview");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    this.parentNode.replaceChild(iframe, this);
}
