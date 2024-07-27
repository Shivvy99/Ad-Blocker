// Function to remove banner ads
function removeBannerAds() {
    // Add more selectors as needed
    const bannerSelectors = [
        '.banner-ad-class',      // Example class selector
        '#banner-ad-id',         // Example ID selector
        'iframe[src*="ads"]',    // Example iframe with src containing 'ads'
        'div[class*="banner"]'   // Example div with class containing 'banner'
    ];

    bannerSelectors.forEach(selector => {
        const banners = document.querySelectorAll(selector);
        banners.forEach(banner => banner.remove());
    });
}

// Remove banner ads on page load
removeBannerAds();

// Optionally, monitor for dynamically added ads using MutationObserver
const observer = new MutationObserver(removeBannerAds);
observer.observe(document.body, { childList: true, subtree: true });
