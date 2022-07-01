//here we will be calling our chrome apis
//Background scripts are mainly for adding event listeners. With this event listener we will check where our event is going..
// if it goes to a potential edvertiser we are goingto block it..
chrome.webRequest.onBeforeRequest.addListener{
  function(details) {return { cancel: true}},
  {urls: ["*://*.zedo.com/*"]},
  {urls : defaultFilters}''
  ["blocking"]
}

defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
]
