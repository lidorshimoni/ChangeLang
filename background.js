
'use strict';

//chrome.runtime.onInstalled.addListener(function() {
//  chrome.storage.sync.set({number: 1}, function() {
//    console.log('The number is set to 1.');
//  });
//});





// function changeLang()
// {

	// chrome.tabs.query({
        // "active": true,
        // "currentWindow": true
    // }, function (tabs) {
        // chrome.tabs.sendMessage(tabs[0].id, {
            // "functiontoInvoke": "change"
        // });
    // });
	// alert("works");

	
// }

function callChangeLang()
{
  chrome.tabs.query(
  {currentWindow: true, active : true},
  function(tabArray){chrome.tabs.sendMessage(tabArray[0].id, {
    "functiontoInvoke": "change"
  }, function(response) {
         response.yourFunc();
     });}
)
}

chrome.contextMenus.create({
contexts:["editable"],
title: "switch selected text's language",
onclick: callChangeLang
}, function(){})

chrome.browserAction.onClicked.addListener(function(tab) {
  // alert("tab: " + tab.id.toString()); // this alert works
  // console.log(tab.id.toString());
  // chrome.tabs.query(
  // {currentWindow: true, active : true},
  // function(tabArray){console.log("tab: " + tabArray[0].id.toString());}
// )
  chrome.tabs.sendMessage(tab.id, {
    "functiontoInvoke": "change"
  }, function(response) {
         response.yourFunc();
     });
  // alert("click"); // this alert doesn't works
});