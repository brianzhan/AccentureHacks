var tab;
var url;
var tablink;

chrome.tabs.query({active:true, lastFocusedWindow:true}, function (tabs) {
    tab = tabs[0];
    url = tabs[0].url;
    window.console.log(tab.url);
});


    document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("EventText").focus();
    document.getElementById('EventText').addEventListener('keypress', CheckForEnterKey);
    document.getElementById('addwithUrl').addEventListener('click', AddEvent);
    document.getElementById('addwithoutUrl').addEventListener('click', AddEventWithoutUrl);

});

// <a href="http://www.google.com/calendar/event?action=TEMPLATE&text=[event-title]&dates=[start-custom format='Ymd\\THi00\\Z']/[end-custom format='Ymd\\THi00\\Z']&details=[description]&location=[location]&trp=false&sprop=&sprop=name:" target="_blank" rel="nofollow">Add to my calendar</a>
function AddEventWithoutUrl() {
    //console.log(tab.url);
    var text = document.getElementById('EventText');
    console.log(text);
    console.log(text.value);
    var calurl = "http://www.google.com/calendar/event?action=TEMPLATE&text=" + text.value + "&details=" + tab.url;
    console.log(calurl);
    
    if (text.value != "") {
        chrome.tabs.create({
            url: calurl,
            selected: true
        })
    }
}

function AddEvent(url) {
    console.log(tab.url);
    var text = document.getElementById('EventText');
    var description = document.getElementById('EventDescription');
    console.log(text);
    console.log(text.value);
    var calurl = "http://www.google.com/calendar/event?action=TEMPLATE&text=" + text.value +
	"&details=" + tab.url + '     ' + description.value + "&location=" + tab.url;
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
