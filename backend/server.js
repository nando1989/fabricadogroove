const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/download-audio', (req, res) => {
  const { url } = req.body;

  if (!url) {
    console.error('URL não fornecida');
    return res.status(400).send('URL do YouTube é necessária.');
  }

  console.log(`Recebido URL: ${url}`);
  const command = `yt-dlp -f bestaudio --extract-audio --audio-format mp3 -o - ${url}`;
  console.log(`Executando comando: ${command}`);

  exec(command, { maxBuffer: 1024 * 500 }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao baixar o áudio: ${error.message}`);
      return res.status(500).send('Erro ao baixar o áudio.');
    }

    if (stderr) {
      console.error(`Erro: ${stderr}`);
      return res.status(500).send('Erro ao processar o áudio.');
    }

    res.setHeader('Content-Disposition', 'attachment; filename="audio.mp3"');
    res.setHeader('Content-Type', 'audio/mpeg');
    res.send(stdout);
  });
});

const PORT = process.env.PORT || 3003; // Define a porta usando uma variável de ambiente ou um valor padrão
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
