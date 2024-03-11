 const darkModeSwitch = document.getElementById('dark-mode-switch');
 const htmlTag = document.querySelector('html');

 darkModeSwitch.addEventListener('change', function() {
    if (this.checked) {
        htmlTag.setAttribute('data-bs-theme', 'dark');
    } else {
        htmlTag.setAttribute('data-bs-theme', 'light');
    }
 });

function trackInstaButtonClick() {
  // Send an event to Google Analytics
  gtag('event', 'button_click', {
    'event_category': 'Button Clicks',
    'event_label': 'Instagram Button'
  });
}

function trackXboxButtonClick() {
  // Send an event to Google Analytics
  gtag('event', 'button_click', {
    'event_category': 'Button Clicks',
    'event_label': 'Xbox Button'
  });
}

function trackDiscordButtonClick() {
  // Send an event to Google Analytics
  gtag('event', 'button_click', {
    'event_category': 'Button Clicks',
    'event_label': 'Discord Button'
  });
}

function trackSourceCodeLinkClick() {
  // Send an event to Google Analytics
  gtag('event', 'button_click', {
    'event_category': 'Button Clicks',
    'event_label': 'Source Code'
  });
}
