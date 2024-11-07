import React from 'react';
import '../styles/YouTubeEmbed.css';


const YouTubeEmbed = () => (
  <section className="video-section">
    <div className="container">
      <h2>Recent Highlights</h2>
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/007UHPLIScw"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
);

export default YouTubeEmbed;
