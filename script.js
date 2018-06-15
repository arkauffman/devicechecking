// if a restaurant has both an iOS and Android app link
  // always show the App CTA banner

// else if restaurant only has Android
  // if device is Android
    // show App CTA banner for Android

// else if accessed on another device
  // only show the mobile bar
  function deviceTypeCheck() {
    if(/webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      return 'this device is iOS';
    } else if (/Android/i.test(navigator.userAgent)) {
      return 'this device is Android';
    } else {
      return 'this is just a mobile banner';
    }
  }




// found via https://www.abeautifulsite.net/detecting-mobile-devices-with-javascript
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }
};

// Example tests
if ( isMobile.iOS() ) alert('iOS')
