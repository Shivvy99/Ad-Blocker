blocked_urls = ["*://*.doubleclick.net/*",
                "*://*.googleadservices.com/*",
                "*://*.googlesyndication.com/*",
                "*://*.moatads.com/*",
                "*://*.adservice.google.com/*",
                "*://*.adservice.google.com/*",
                "*://*.doubleclick.net/*",
	            "*://*.google-analytics.com/*",
	            "*://creative.ak.fbcdn.net/*",
	            "*://*.adbrite.com/*",
	            "*://*.exponential.com/*",
	            "*://*.quantserve.com/*",
	            "*://*.scorecardresearch.com/*",
	            "*://*.zedo.com/*",]


chrome.webRequest.onBeforeRequest.addListener(
    function(details) {return {cancel: true};},
    {"urls": [blocked_urls]},
    ["blocking"]
);