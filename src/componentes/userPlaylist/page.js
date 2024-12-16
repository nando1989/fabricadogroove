import React from 'react';
import { useLocation } from 'react-router-dom';

const UserPlaylist = () => {
  const location = useLocation();
  const { kanban } = location.state || { kanban: [] };
  console.log(kanban); // Recebendo os dados da página anterior

  return (
    <div className='container-user-playlist'>
      <h2>Minhas Playlists</h2>
      <div className='container-play'>
        {kanban.map((playlist, index) => (
          <div className='container-music' key={index}>
            <h3>{playlist.name}</h3>
            <p>{playlist.notes}</p>

            {/* Exibição de arquivos de áudio MP3 */}
            {playlist.mp3Files.length > 0 && (
              <div className="player-container">
                {playlist.mp3Files.map((file, idx) => (
                  <div key={idx} className="track">
                    <audio controls className="audio-player">
                      <source src={URL.createObjectURL(file)} type={file.type} />
                    </audio>
                  </div>
                ))}
              </div>
            )}

            {/* Exibição de arquivos de texto, PDFs e imagens */}
            {playlist.mediaFiles.length > 0 && (
              <div>
                {playlist.mediaFiles.map((file, idx) => (
                  <div key={idx} style={{ marginBottom: '10px' }}>
                    {file.type.includes('image') ? (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        style={{ maxWidth: '20%', height: 'auto', display: 'block', marginBottom: '5px', cursor: 'pointer' }}
                      />
                    ) : (
                      <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">
                        {file.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Exibição de links do YouTube */}
            {playlist.links.length > 0 && (
              <div>
                {playlist.links.map((link, idx) => {
                  const videoId = link.split('v=')[1]?.split('&')[0];
                  return (
                    <div key={idx} style={{ marginBottom: '10px' }}>
                      {videoId && (
                        <iframe
                          width="300"
                          height="200"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`YouTube video player ${idx}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default UserPlaylist;


