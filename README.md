# file-management-project

## Descrição
Este projeto é uma ferramenta de linha de comando (CLI) para gerenciamento de arquivos, desenvolvida em Node.js. Permite criar, listar, ler, escrever e deletar arquivos dentro de um diretório específico chamado `my_files`. A interação com o usuário é feita por meio de um menu simples no terminal, utilizando a biblioteca `readline-sync`.

## Instalação
Para utilizar este projeto, siga os passos abaixo:

1. Clone este repositório ou faça o download dos arquivos.
2. No terminal, navegue até o diretório do projeto.
3. Execute o comando para instalar as dependências:
   ```
   npm install
   ```

## Uso
Para iniciar a aplicação, execute o comando:
```
node index.js
```

Ao iniciar, será exibido um menu com as seguintes opções:

1. Criar arquivo  
2. Listar arquivos  
3. Ler arquivo  
4. Escrever arquivo  
5. Deletar arquivo  
6. Sair  

Digite o número correspondente à opção desejada e siga as instruções para realizar operações nos arquivos dentro do diretório `my_files`.

## Funcionalidades
- **Criar arquivo:** Cria um novo arquivo com o nome e conteúdo especificados pelo usuário.
- **Listar arquivos:** Exibe a lista de arquivos presentes no diretório `my_files`.
- **Ler arquivo:** Mostra o conteúdo de um arquivo especificado pelo usuário.
- **Escrever arquivo:** Permite escrever ou substituir o conteúdo de um arquivo existente.
- **Deletar arquivo:** Remove um arquivo especificado pelo usuário.
- **Sair:** Encerra a aplicação.

## Dependências
- [readline-sync](https://www.npmjs.com/package/readline-sync): Para entrada interativa de dados no terminal.
- [difference-date-calculate](https://www.npmjs.com/package/difference-date-calculate): Dependência instalada, porém não utilizada diretamente no código atual.

## Autor
HugoZAuad

## Licença
Este projeto está licenciado sob a licença ISC.
