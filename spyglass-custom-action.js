function loadJavaScript(url, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}

loadJavaScript("https://advantagesolutionsnet.sharepoint.com/sites/spyglass/Style%20Library/JS/spyglass.js", function() {
    console.log("Spyglass Skin enabled.");
});