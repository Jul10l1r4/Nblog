# Nblog

Nesse projeto utilizei o angular para rodar encima do node.js, para iniciar tem um arquivo, o `package.json` no qual fala de todas as dependencias, utilizei economia de memoria e correção de CVEs.

Baixe o projeto utilizando o seguinte código:
```sh
  git clone https://github.com/Jul10l1r4/Nblog.git
```
Caso nao tenha o `git` instalado e esteja usando o linux, você pode usar:
```sh
  wget https://codeload.github.com/Jul10l1r4/Nblog/zip/master
  unzip master.zip 
```
Também tem a possibilidade de baixar o arquivo manualmente e extrair, após é apenas seguir o proximo passo :metal:.
## Rodando a aplicação

Para executar é necessario que tenha instalado em seu pc o npm ([No linux](https://tableless.com.br/como-instalar-node-js-no-linux-corretamente-ubuntu-debian-elementary-os/) ou no [Windows](https://imasters.com.br/back-end/instalando-o-git-node-js-ruby-sass-compass-bower-e-grunt-no-windows)), caso tenha execute:
```sh
  npm install -g @angular/cli
```
E apos navegue usando o terminal até a pasta do projeto e execute:
```ng
  ng serve
```
Agora basta abrir o seus browser de preferencia em [localhost:4200/index](http://localhost:4200/index)
