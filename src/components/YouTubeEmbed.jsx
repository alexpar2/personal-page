import React, { useState } from 'react';
import Icon from './Icon.jsx';

// Shows a thumbnail and only loads the (privacy-enhanced) YouTube player after a click
function YouTubeEmbed({ id, title }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="media media-video">
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
          <span className="yt-play">
            <Icon name="play" size={28} />
          </span>
        </button>
      )}
    </div>
  );
}

export default YouTubeEmbed;
