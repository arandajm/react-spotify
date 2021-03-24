import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { setAuthHeader } from '../utils/spotify';

const Home = () => {
  const [newReleases, setNewReleases] = useState([]);
  useEffect(() => {
    (async () => {
      setAuthHeader();
      const res = await axios.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {
        method: 'GET',
      });
      setNewReleases(res.data.albums.items);
    })();
  }, []);

  return (
    <React.Fragment>
      <div className="card-columns m-5 animated fadeIn">
        {newReleases &&
          newReleases.map((item) => (
            <div className="card puntero" key={item.uri}>
              <img src={item.images[0].url} className="card-img-top" alt="item.name" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                {item.artists &&
                  item.artists.map((artist) => (
                    <p className="card-text" key={artist.name}>
                      <span className="badge badge-pill badge-primary">{artist.name}</span>
                    </p>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default Home;
