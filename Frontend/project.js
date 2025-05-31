// Filter functionality
function filterIPOs(status) {
    const cards = document.querySelectorAll('.ipo-card');
    const tabs = document.querySelectorAll('.tab-btn');
    
    // Update active tab
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter cards
    cards.forEach(card => {
        if (status === 'all' || card.dataset.status === status) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease-in';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeEventHandlers();
});

// Animate cards on page load
function initializeAnimations() {
    const cards = document.querySelectorAll('.ipo-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize event handlers
function initializeEventHandlers() {
    // Add click handlers for buttons
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
    
    // Add navigation link handlers
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Add footer link handlers
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('click', handleFooterClick);
    });
}

// Handle button clicks with animation
function handleButtonClick(event) {
    const button = event.target;
    const buttonText = button.textContent;
    
    // Button click animation
    button.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        button.style.transform = '';
    }, 150);
    
    // Handle different button actions
    if (buttonText === 'View Details') {
        showIPODetails(button);
    } else if (buttonText === 'Set Reminder') {
        setIPOReminder(button);
    } else if (buttonText === 'Track Performance') {
        trackIPOPerformance(button);
    }
}

// Show IPO details modal/popup
function showIPODetails(button) {
    const card = button.closest('.ipo-card');
    const companyName = card.querySelector('.company-info h3').textContent;
    
    // Simple alert for demonstration - you can replace with a modal
    alert(`Showing details for ${companyName}\n\nThis would open a detailed view with:\n• Company financials\n• Subscription status\n• Allotment details\n• Market analysis`);
}

// Set reminder for upcoming IPO
function setIPOReminder(button) {
    const card = button.closest('.ipo-card');
    const companyName = card.querySelector('.company-info h3').textContent;
    const openingDate = card.querySelector('.dates').textContent;
    
    // Change button text temporarily
    const originalText = button.textContent;
    button.textContent = 'Reminder Set!';
    button.style.background = 'linear-gradient(135deg, #66bb6a, #43a047)';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 2000);
    
    // Show confirmation
    console.log(`Reminder set for ${companyName} opening on ${openingDate}`);
}

// Track IPO performance
function trackIPOPerformance(button) {
    const card = button.closest('.ipo-card');
    const companyName = card.querySelector('.company-info h3').textContent;
    
    // Simple tracking demonstration
    alert(`Tracking performance for ${companyName}\n\nThis would show:\n• Current stock price\n• Price charts\n• Performance metrics\n• Analyst ratings`);
}

// Handle navigation clicks
function handleNavClick(event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    
    // Smooth scroll to sections (if they exist) or handle navigation
    if (href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            console.log(`Navigating to ${targetId} section`);
        }
    }
}

// Handle footer link clicks
function handleFooterClick(event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    const linkText = event.target.textContent;
    
    // Handle different footer actions
    console.log(`Clicked on ${linkText}`);
    
    // You can add specific handlers for each footer link
    switch(href) {
        case '#privacy':
            alert('Privacy Policy would open here');
            break;
        case '#terms':
            alert('Terms of Service would open here');
            break;
        case '#contact':
            alert('Contact form would open here');
            break;
        case '#help':
            alert('Help Center would open here');
            break;
        case '#api':
            alert('API Documentation would open here');
            break;
        default:
            console.log('Footer link clicked:', linkText);
    }
}

// Add smooth scrolling for the entire page
function smoothScrollTo(target) {
    window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth'
    });
}

// Add intersection observer for scroll animations
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all cards for scroll animations
    const cards = document.querySelectorAll('.ipo-card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Search functionality (you can extend this)
function searchIPOs(searchTerm) {
    const cards = document.querySelectorAll('.ipo-card');
    const term = searchTerm.toLowerCase();
    
    cards.forEach(card => {
        const companyName = card.querySelector('.company-info h3').textContent.toLowerCase();
        const sector = card.querySelector('.sector').textContent.toLowerCase();
        
        if (companyName.includes(term) || sector.includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Utility function to format dates
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Add loading states for dynamic content
function showLoading(element) {
    element.innerHTML = '<div class="loading">Loading...</div>';
    element.style.opacity = '0.6';
}

function hideLoading(element, originalContent) {
    element.innerHTML = originalContent;
    element.style.opacity = '1';
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filterIPOs,
        searchIPOs,
        formatCurrency,
        formatDate
    };
}