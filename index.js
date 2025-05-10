const fileManager = require("./fileManager");
const readlineSync = require("readline-sync");
const path = require("path");

async function main() {
  const baseDir = path.join(__dirname, "my_files");

  fileManager.createDirectory(baseDir);
  while (true) {
    console.log("\nMenu: ");
    console.log("1. Criar arquivo");
    console.log("2. Listar arquivos");
    console.log("3. Ler arquivo");
    console.log("4. Escrever arquivo");
    console.log("5. Deletar arquivo");
    console.log("6. Sair");

    const choice = readlineSync.question("Escolha uma opção: ");

    try {
      switch (choice) {
        case "1":
          const fileName = readlineSync.question("Digite o nome do arquivo: ");
          const fileContent = readlineSync.question(
            "Digite o conteudo do novo arquivo (ou deixe em branco): "
          );
          const createFilePath = path.join(baseDir, fileName);
          const fileMessage = await fileManager.createFile(
            createFilePath,
            fileContent
          );
          console.log(fileMessage);
          break;
        case "2":
          const files = await fileManager.listFiles(baseDir);
          console.log("Arquivos no diretorio: ", files);
          break;
        case "3":
          const readFileName = readlineSync.question(
            "Digite o nome e extensão do arquivo: "
          );
          const readFilePath = path.join(baseDir, readFileName);
          const content = await fileManager.readFile(readFilePath);
          console.log(`Conteudo do arquivo: ${readFileName}`, content);
          break;
        case "4":
          const writeFileName = readlineSync.question(
            "Digite o nome do arquivo: "
          );
          const writeFilePath = path.join(baseDir, writeFileName);
          const newContent = readlineSync.question(
            "Digite o conteudo a ser escrito: "
          );
          const messageWrite = await fileManager.writeFile(
            writeFilePath,
            newContent
          );
          console.log(messageWrite);
          break;
        case "5":
          const deleteFileName = readlineSync.question(
            "Digite o nome do arquivo: "
          );
          const deleteFilePath = path.join(baseDir, deleteFileName);
          const messageDelete = await fileManager.deleteFile(deleteFilePath);
          console.log(messageDelete);
          break;
        case "6":
          console.log("Saindo...");
          return;
        default:
          console.log("Opção invalida. Tente novamente");
      }
    } catch (err) {
      console.log(err);
    }
  }
}

main();
