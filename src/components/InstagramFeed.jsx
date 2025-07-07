import React, { useEffect } from 'react';

const InstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://snapwidget.com/js/snapwidget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="instagram-feed" style={{ width: '100%', height: '600px' }}>
      <iframe
        src="https://snapwidget.com/embed/1102073"
        className="snapwidget-widget"
        allowTransparency="true"
        frameBorder="0"
        scrolling="no"
        style={{
          border: 'none',
          overflow: 'hidden',
          borderRadius: '5px',
          width: '100%',
          height: '600px'
        }}
        title="Posts from Instagram"
      ></iframe>
    </div>
  );
};

export default InstagramFeed;
