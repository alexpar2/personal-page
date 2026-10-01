import React, { useState } from 'react';

// Shows a thumbnail and only loads the (privacy-enhanced) YouTube player after a click
function YouTubeEmbed({ id, title }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="ratio ratio-16x9 mb-3 shadow-sm">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" className="yt-facade" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" width="480" height="360" />
          <i className="bi bi-play-btn-fill" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

export default YouTubeEmbed;
