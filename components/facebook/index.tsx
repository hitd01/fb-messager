'use client';
import React from 'react';
import Script from 'next/script';

const FaceBook = () => {
  return (
    <>
      {/* <!-- Messenger Chat plugin Code --> */}
      <div id="fb-root"></div>

      {/* <!-- Your Chat plugin code --> */}
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script id="messenger-tag" strategy="afterInteractive">
        {`
          var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", "104955057763838");
          chatbox.setAttribute("attribution", "biz_inbox");

          window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v17.0'
            });
          };
    
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        `}
      </Script>
    </>
  );
};

export default FaceBook;
