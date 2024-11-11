import React from 'react';
import '../styles/NewsUpdates.css';

const NewsUpdates = () => (
  <section className="news-updates">
    <h2>Latest News</h2>
    <div className="news-grid">
      {/* News Item 1 */}
      <div className="news-item">
        <img src="images/nick-saban.jpg" alt="Nick Saban Discussing Game Strategies" />
        <h3>Nick Saban Discusses Game Strategies</h3>
        <p>Read more about Coach Saban's strategy for the upcoming season.</p>
      </div>
      
      {/* News Item 2 */}
      <div className="news-item">
        <img src="images/jalen-milroe.jpg" alt="Jalen Milroe Shining in Practice" />
        <h3>Jalen Milroe Shines in Practice</h3>
        <p>The quarterback showcases his skills ahead of the season opener.</p>
      </div>

      {/* Additional News Items */}
      {/* Add more news items here if needed */}
    </div>
  </section>
);

export default NewsUpdates;
