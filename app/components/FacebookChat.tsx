import React, { useEffect } from 'react';

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

// Extend the HTMLAttributes interface to be compatible with facebook 
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    attribution?: string;
    page_id?: string;
    theme_color?: string;
    logged_in_greeting?: string;
    logged_out_greeting?: string;
  }
}

const FacebookChat: React.FC = () => {
  useEffect(() => {
    window.fbAsyncInit = () => {
      window.FB.init({
        xfbml: true,
        version: 'v18.0', // Use the latest version available
      });
    };

    (function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      const js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode!.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (
    <div>
      <div
        className="fb-customerchat"
        attribution="biz_inbox"
        page_id="101602886351736"
        // theme_color="#b30000"
        // logged_in_greeting="Hi! How can we help you?"
        // logged_out_greeting="Hi! How can we help you?"
      ></div>
    </div>
  );
};

export default FacebookChat;