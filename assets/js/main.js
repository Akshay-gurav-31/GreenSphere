// Mobile Navigation
let isMobileMenuOpen = false;

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('mobile-menu-icon');
    
    if (isMobileMenuOpen) {
        mobileMenu.style.display = 'none';
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        isMobileMenuOpen = false;
    } else {
        mobileMenu.style.display = 'flex';
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
        isMobileMenuOpen = true;
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('mobile-menu-icon');
    
    mobileMenu.style.display = 'none';
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    isMobileMenuOpen = false;
}

// Performance optimizations
let ticking = false;

function updateNavbarOnScroll() {
    const navbar = document.querySelector('.nav');
    const isDarkMode = document.body.classList.contains('dark');
    
    if (window.scrollY > 100) {
        if (isDarkMode) {
            navbar.style.background = 'rgba(23, 23, 23, 0.98)';
            navbar.style.boxShadow = '0 4px 20px -3px hsla(142, 71%, 45%, 0.25)';
        } else {
            navbar.style.background = 'hsla(0, 0%, 100%, 0.98)';
            navbar.style.boxShadow = '0 4px 20px -3px hsla(142, 71%, 45%, 0.15)';
        }
    } else {
        if (isDarkMode) {
            navbar.style.background = 'rgba(23, 23, 23, 0.95)';
            navbar.style.boxShadow = '0 4px 15px -3px hsla(142, 71%, 45%, 0.2)';
        } else {
            navbar.style.background = 'hsla(0, 0%, 100%, 0.95)';
            navbar.style.boxShadow = '0 4px 15px -3px hsla(142, 71%, 45%, 0.1)';
        }
    }
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateNavbarOnScroll);
        ticking = true;
    }
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile menu if window is resized to desktop size
    if (window.innerWidth > 768 && isMobileMenuOpen) {
        closeMobileMenu();
    }
});

// Multi-language support
const translations = {
    en: {
        servicesTitle: 'Complete Farming Solutions',
        servicesDescription: 'Six powerful tools designed specifically for Punjab farmers to increase productivity, reduce costs, and maximize profits through smart technology.',
        availableIn: '🌐 Available in:',
        learnMore: 'Learn More',
        startJourney: 'Start Your Journey',
        ctaTitle: 'Ready to Transform Your Farming?',
        ctaDescription: 'Join thousands of Punjab farmers who have increased their yield by 30% using our smart advisory platform.'
    },
    hi: {
        servicesTitle: 'संपूर्ण कृषि समाधान',
        servicesDescription: 'पंजाब के किसानों के लिए विशेष रूप से डिज़ाइन किए गए छह शक्तिशाली उपकरण जो उत्पादकता बढ़ाने, लागत कम करने और स्मार्ट तकनीक के माध्यम से अधिकतम मुनाफा कमाने के लिए हैं।',
        availableIn: '🌐 उपलब्ध भाषाएं:',
        learnMore: 'और जानें',
        startJourney: 'अपनी यात्रा शुरू करें',
        ctaTitle: 'अपनी खेती को बदलने के लिए तैयार हैं?',
        ctaDescription: 'हमारे स्मार्ट सलाहकार मंच का उपयोग करके अपनी उपज में 30% की वृद्धि करने वाले हजारों पंजाब किसानों से जुड़ें।'
    },
    pa: {
        servicesTitle: 'ਸੰਪੂਰਨ ਖੇਤੀਬਾੜੀ ਹੱਲ',
        servicesDescription: 'ਪੰਜਾਬ ਦੇ ਕਿਸਾਨਾਂ ਲਈ ਖਾਸ ਤੌਰ ਤੇ ਤਿਆਰ ਕੀਤੇ ਗਏ ਛੇ ਸ਼ਕਤੀਸ਼ਾਲੀ ਸਾਧਨ ਜੋ ਉਤਪਾਦਕਤਾ ਵਧਾਉਣ, ਲਾਗਤ ਘਟਾਉਣ ਅਤੇ ਸਮਾਰਟ ਤਕਨਾਲੋਜੀ ਰਾਹੀਂ ਵੱਧ ਤੋਂ ਵੱਧ ਮੁਨਾਫਾ ਕਮਾਉਣ ਲਈ ਹਨ।',
        availableIn: '🌐 ਉਪਲਬਧ ਭਾਸ਼ਾਵਾਂ:',
        learnMore: 'ਹੋਰ ਜਾਣੋ',
        startJourney: 'ਆਪਣੀ ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰੋ',
        ctaTitle: 'ਆਪਣੀ ਖੇਤੀ ਨੂੰ ਬਦਲਣ ਲਈ ਤਿਆਰ ਹੋ?',
        ctaDescription: 'ਸਾਡੇ ਸਮਾਰਟ ਸਲਾਹਕਾਰ ਪਲੇਟਫਾਰਮ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਆਪਣੀ ਪੈਦਾਵਾਰ ਵਿੱਚ 30% ਵਾਧਾ ਕਰਨ ਵਾਲੇ ਹਜ਼ਾਰਾਂ ਪੰਜਾਬ ਕਿਸਾਨਾਂ ਨਾਲ ਜੁੜੋ।'
    }
    // Additional languages can be added here
};

function changeLanguage(langCode) {
    const translation = translations[langCode];
    if (!translation) return;

    // Update main title
    const titleElement = document.querySelector('#services .section-header h2');
    if (titleElement) {
        titleElement.textContent = translation.servicesTitle;
    }

    // Update main description
    const descElement = document.querySelector('#services .section-header p');
    if (descElement && !descElement.querySelector('.lang-selector')) {
        descElement.textContent = translation.servicesDescription;
    }

    // Update "Available in" text
    const availableElement = document.querySelector('.available-text');
    if (availableElement) {
        availableElement.textContent = translation.availableIn;
    }

    // Update CTA section
    const ctaTitleElement = document.querySelector('.services-cta h3');
    if (ctaTitleElement) {
        ctaTitleElement.textContent = translation.ctaTitle;
    }

    const ctaDescElement = document.querySelector('.services-cta p');
    if (ctaDescElement) {
        ctaDescElement.textContent = translation.ctaDescription;
    }

    // Update "Learn More" buttons
    const learnMoreButtons = document.querySelectorAll('.service-btn');
    learnMoreButtons.forEach(button => {
        const textNode = button.childNodes[0];
        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
            textNode.textContent = translation.learnMore + ' ';
        }
    });

    // Update "Start Your Journey" button
    const startJourneyButton = document.querySelector('.services-cta .btn-cta');
    if (startJourneyButton) {
        const textNode = startJourneyButton.childNodes[0];
        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
            textNode.textContent = translation.startJourney + ' ';
        }
    }

    // Update active language button
    document.querySelectorAll('.lang-selector').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeButton = document.querySelector(`[data-lang="${langCode}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Dark mode toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark');
    }
    
    // Force navbar style update after theme change
    updateNavbarOnScroll();
}

// Load saved theme immediately (before DOM loads to prevent flash)
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
    }
})();

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        if (themeIcon) themeIcon.className = 'fas fa-moon';
    } else {
        body.classList.remove('dark');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
    }
    
    // Initialize navbar styling based on theme
    updateNavbarOnScroll();
});
