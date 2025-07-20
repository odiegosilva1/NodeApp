    import http from 'http';
    import fs from 'fs';

    // Escrevendo no arquivo de forma síncrona
    try {
      fs.writeFile('./messages.txt', 'Outra mensagem', 'utf-8');
      console.log('Arquivo criado com sucesso');
    } catch (erro) {
      console.log('Falha ao escrever!', erro);
    }

    // Lendo o arquivo de forma síncrona
    let conteudo;
    try {
      conteudo = fs.readFile('./messages.txt', 'utf-8');
      console.log(`Conteúdo: ${conteudo}`);
    } catch (erro) {
      console.log('Falha ao ler o arquivo', erro);
    }

    startServerHttp(conteudo);


    function startServerHttp(mensagem){
      const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end(conteudo || 'mensagem padrão');
    });

    const porta = 3000;
    const host = 'localhost';

    server.listen(porta, host, () => {
      console.log(`Server running http://${host}:${porta}/`);
    });

    }

