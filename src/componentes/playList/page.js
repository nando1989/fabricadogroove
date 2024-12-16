import React, { useState } from 'react';
import axios from 'axios';
import '../playList/styles.css';
import { useNavigate } from 'react-router-dom';

const Playlist = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [links, setLinks] = useState('');
  const [notes, setNotes] = useState('');
  const [mp3Files, setMp3Files] = useState([]);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [kanban, setKanban] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [modalImage, setModalImage] = useState(null);


  const history = useNavigate(); // Adicione aqui

  const handleCreatePlaylist = async (e) => {
  e.preventDefault();

  const newPlaylist = {
    name: playlistName,
    links: links.split(',').map(link => link.trim()),
    notes,
    mp3Files,
    mediaFiles,
  };

  if (editIndex !== null) {
    // Edit existing playlist
    const updatedKanban = [...kanban];
    updatedKanban[editIndex] = newPlaylist;
    setKanban(updatedKanban);
    setEditIndex(null);
  } else {
    // Add new playlist
    setKanban([...kanban, newPlaylist]);
  }

  // Reset form
  setPlaylistName('');
  setLinks('');
  setNotes('');
  setMp3Files([]);
  setMediaFiles([]);

  // Handle form data for server-side
  const formData = new FormData();
  formData.append('name', newPlaylist.name);
  formData.append('links', newPlaylist.links.join(','));
  formData.append('notes', newPlaylist.notes);
  newPlaylist.mp3Files.forEach((file) => formData.append('mp3Files', file));
  newPlaylist.mediaFiles.forEach((file) => formData.append('mediaFiles', file));

  try {
    await axios.post('http://localhost:3000/create-playlist', formData);
    alert('Playlist criada com sucesso!');
    
    // Navegar para a página do usuário
    history.push('/user-playlist', { kanban: [...kanban, newPlaylist] });
  } catch (error) {
    console.log('Erro ao criar a playlist: ' + error.message);
  }
};

  

  const handleEdit = (index) => {
    const playlistToEdit = kanban[index];
    setPlaylistName(playlistToEdit.name);
    setLinks(playlistToEdit.links.join(', '));
    setNotes(playlistToEdit.notes);
    setMp3Files(playlistToEdit.mp3Files);
    setMediaFiles(playlistToEdit.mediaFiles);
    setEditIndex(index);
  };

  const handleMp3Change = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const mp3Only = selectedFiles.filter(file => file.type === 'audio/mp3' || file.type === 'audio/mpeg');
    setMp3Files(mp3Only);
  };

  const handleMediaFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const allowedTypes = ['text/plain', 'application/pdf', 'image/jpeg', 'image/png'];
    const filteredFiles = selectedFiles.filter(file => allowedTypes.includes(file.type));
    setMediaFiles(filteredFiles);
  };

  const handleDelete = (index) => {
    const updatedKanban = kanban.filter((_, i) => i !== index);
    setKanban(updatedKanban);
  };

  const handleImageClick = (file) => {
    setModalImage(URL.createObjectURL(file));
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div className='container-playlist'>

      <div className='container-create'>
        <form className='container-form-playlist'
          onSubmit={handleCreatePlaylist}>
          <div className='title-playlist'>
            <h2>Área do Professor</h2>
          </div>

          <div className='create-title-link'>
            <input
              type="text"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              placeholder="Nome da Aula"
              required
            />

            <input
              type="text"
              value={links}
              onChange={(e) => setLinks(e.target.value)}
              placeholder="Link do YouTube (opcional)"
            />
          </div>

          <div className='upload-mp3-documents'>
            <label>
             
              <input
                type="file"
                onChange={handleMp3Change}
                multiple
                accept=".mp3"
              /> Upload de MP3:
            </label>

            <label>
             
              <input
                type="file"
                onChange={handleMediaFileChange}
                multiple
                accept=".pdf,.txt,.jpg,.jpeg,.png"
              /> Upload de documentos:
            </label>

            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Observações"
            ></textarea>
            <button type="submit">{editIndex !== null ? 'Salvar Alterações' : 'Adicionar à Playlist'}</button>
          
          
          
          </div>

          

        </form>
      </div>

      <div className='container-play'>
        {kanban.map((playlist, index) => (
          <div className='container-music' key={index} >
            <h3>{playlist.name}</h3>

            {/* Exibição de arquivos de áudio MP3 */}
            {playlist.mp3Files.length > 0 && (
              <div class="player-container">
              
              {playlist.mp3Files.map((file, idx) => (
                  <div key={idx} class="track">
                      <audio controls class="audio-player">
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
                        onClick={() => handleImageClick(file)}
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
                        <div style={{ marginTop: '5px' }}>
                          <iframe
                            width="300"
                            height="200"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={`YouTube video player ${idx}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            <p>{playlist.notes}</p>
            <button className='edit-button' onClick={() => handleEdit(index)} style={{ marginRight: '5px', background: 'none', border: 'none', cursor: 'pointer' }}>
              Editar
            </button>
            <button className='eraser-button' onClick={() => handleDelete(index)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              Apagar
            </button>
          </div>
        ))}
      </div>

      {/* Modal para exibição de imagens */}
      {modalImage && (
    <div 
        className="modal" 
        onClick={handleCloseModal} 
        style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
        }}
    >
        <img 
            src={modalImage} 
            alt="Visualização" 
            style={{ 
                maxWidth: '90%', 
                maxHeight: '90%' 
            }} 
        />
        <button 
            onClick={handleCloseModal} 
            style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '54px',
                cursor: 'pointer'
            }}
        >
            &times; {/* Símbolo de X para fechar */}
        </button>
    </div>
)}

    </div>
  );
};

export default Playlist;
