var tab;
var url;
chrome.tabs.query({}, function (tabs) {
    tab = tabs[0];
    url = tabs[0].url;
    window.console.log(tab.url);
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("EventText").focus();
    document.getElementById('EventText').addEventListener('keypress', CheckForEnterKey);
});
 
function AddEvent(url) {
    console.log(tab.url);
    var text = document.getElementById('EventText');
    console.log(text);
    console.log(text.value);
    var calurl = "http://www.google.com/calendar/event?action=TEMPLATE&text=" + text.value +
	"&details=" + tab.url;
    console.log(calurl);
    
    if (text.value != "") {
        chrome.tabs.create({
            url: calurl,
            selected: true
        })
    }
}
 
function CheckForEnterKey(e) {
    if (e.charCode == 13)
        AddEvent();
}
