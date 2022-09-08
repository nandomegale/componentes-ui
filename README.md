Criando aplicação que consome 2 libs.

<br/>A primeira lib se encontra no mesmo workspace que o projeto, então é necessário apenas o primeiro build dentro na pasta da lib.

<br/>E a segunda lib é externa ao projeto principal mas ainda local. É necessário os seguintes passos:

<br/>1 - criação da lib
<br/>2 - Execução do "ng build --watch" no workspace da lib. (utilizado o watch para escutar as mudanças que ocorrerem)
<br/>3 - Execução do "npm install C/../../" na pasta do projeto principal com path completo  até o arquivo gerado na pasta dist da lib.
<br/>4 - Foi necessário editar o arquivo "angular.json" do projeto principal, inserindo a linha '"preserveSymlinks": true', dentro de projects -> architect -> options
