function filterAdvert() {
    // Filter out all anchor tags that have a link to the sponsor site
    const ads = document.querySelectorAll('a[href="https://www.globalcu.org/landing-page/grand-canyon-university"]');
  
    // Remove each ad
    ads.forEach(ad => {
        ad.parentElement.removeChild(ad);
    });
}

function watchDOM() {
    const halo = document.body;

    const config = { childList: true, subtree: true };

    const callback = function(mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                filterAdvert();
            }
        }
    };

    // Create observer with callback function
    const observer = new MutationObserver(callback);

    // Observe Halo for changes body
    observer.observe(halo, config);
}

// Run the filtering function
filterAdvert();

// Use MutationObserver to watch for changes in the DOM
watchDOM();