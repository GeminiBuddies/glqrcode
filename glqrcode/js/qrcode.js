window.onload = function() {
    chrome.tabs.getSelected(function(tab) {
        var title = tab.title;
        if (title == undefined) title = "";
        $("#title").text(tab.title);

        var url = tab.url;
        if (url == undefined) url = "";
        new QRCode("qrcode", {
            text: tab.url,
            correctLevel: QRCode.CorrectLevel.L
        });
    });
}