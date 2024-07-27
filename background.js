const blocked_urls = ["*://*.doubleclick.net/*",
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
	            "*://*.zedo.com/*",
                "*://partner.googleadservices.com/*",]


chrome.webRequest.onBeforeRequest.addListener(
    function(details) {return {cancel: true}},
    {urls: blocked_urls},
    ["blocking"]
)

// Block pop-up windows
chrome.windows.onCreated.addListener(function(window) {
    if (window.type === "popup") {
        chrome.windows.remove(window.id);
    }
});

// Block interstitial ads by removing overlays
chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript(details.tabId, {
        code: `
            const interstitials = document.querySelectorAll('.interstitial-ad-class'); // Adjust selector
            interstitials.forEach(ad => ad.remove());
        `
    });
}, { url: [{ urlMatches: '<all_urls>' }] });
