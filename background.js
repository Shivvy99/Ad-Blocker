const blocked_urls = [
    "*://*.doubleclick.net/*",
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
    "*://partner.googleadservices.com/*",
    "*://*.adsafeprotected.com/*",
    "*://*.adnxs.com/*",
    "*://*.adsrvr.org/*",
    "*://*.adtechus.com/*",
    "*://*.advertising.com/*",
    "*://*.atdmt.com/*",
    "*://*.doubleverify.com/*",
    "*://*.invitemedia.com/*",
    "*://*.media6degrees.com/*",
    "*://*.optimizely.com/*",
    "*://*.quantserve.com/*",
    "*://*.sharethis.com/*",
    "*://*.tapad.com/*",
    "*://*.tribalfusion.com/*",
    "*://*.yieldmanager.com/*",
    "*://*.contextweb.com/*",
    "*://*.bluekai.com/*"
];



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


