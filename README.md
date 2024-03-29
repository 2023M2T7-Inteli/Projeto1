# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="/imagens/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
</p>

# TEKO PORÃ

## :student: Integrantes: 
- <a href="https://www.linkedin.com/in/ana-carolina-cremonezi-martire-2a7335268/
">Ana Carolina Martire</a>
- <a href="https://www.linkedin.com/in/
">Ariel Kisilevzky</a>
- <a href="https://www.linkedin.com/in/enzo-bressane-72a030219/
">Enzo Bressane</a> 
- <a href="https://www.linkedin.com/in/gabriel-pelinsari-13185b1a0">Gabriel Pelinsari</a> 
- <a href="https://www.linkedin.com/in/isabelle-beatriz-vasquez-oliveira-55a19626a/">Isabelle Oliveira</a>
- <a href="https://www.linkedin.com/in/kaiane-souza-cordeiro-696076268/">Kaiane Souza</a> 
- <a href="https://www.linkedin.com/in/thomas-abadi-4a44a1264">Thomas Abadi</a>

## :teacher: Professores:
### Orientador(a) 
- <a href="https://www.linkedin.com/in/juliastateri/">Julia Stateri</a>
### Instrutores
- <a href="https://www.linkedin.com/in/andreluizbraga/">André Luiz Braga</a>
- <a href="https://www.linkedin.com/in/egondaxbacher/?locale=pt_BR">Egon Daxbacher</a>
- <a href="https://www.linkedin.com/in/filipe-gon%C3%A7alves-08a55015b/">Filipe Gonçalves</a>
- <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco Escobar</a>
- <a href="https://www.linkedin.com/in/geraldo-magela-severino-vasconcelos-22b1b220/">Geraldo Vasconcelos</a>
- <a href="https://www.linkedin.com/in/sergio-venancio-a509b342/">Sergio Venancio</a>

## 📝 Descrição

Esse projeto, desenvolvido para o departamento de P&D da Natura, tem  como objetivo desenvolver um website para ajudar a empresa  no processo de recolhimento de matérias-primas, melhorando a interação entre seus pesquisadores e produtores. Para tal,  o processo que era analógico e realizado por meio de formulários impressos será transformado em uma plataforma digital, simples e acessível.

<p align="center">
<img src="/imagens/teko.jpg" alt="Logo Teko Porã" border="0">
</p>

Os objetivos gerais do projeto incluem tornar os protocolos de comunicação em ferramentas digitais, para que todos os dados sejam preenchidos corretamente e entregues completos aos pesquisadores. Além disso, o projeto tem como objetivo facilitar e democratizar o acesso ao preenchimento dos formulários por produtores com pouco letramento digital e acadêmico, também alterando a forma de armazenamento dos protocolos, utilizando JavaScript, React, Banco de dados e armazenando localmente as informações já preenchidas dos protocolos, para então enviá-los quando conectados com a internet.

Além disso, temos objetivos específicos, que são:
Contribuir com a facilitação da admissão das informações presentes nos protocolos, sendo elas a maturação e localização das plantas, o clima durante o procedimento e perguntas específicas criadas pelos próprios pesquisadores por meio de figuras e símbolos;
Explicitar todas as informações primordiais para os preenchimentos dos formulários, permitindo que o protocolo seja enviado apenas quando as respostas obrigatórias estiverem completas;
Contribuir com a inclusão digital dos  produtores que fornecem matéria prima para a empresa Natura, através de uma interface simples e intuitiva que possibilita com que uma vasta gama de produtores possa utilizar sem problemas;
Criar uma interface dinâmica e simples, com diversas figuras e com a menor quantidade possível de texto onde os pesquisadores poderão criar os protocolos com poucos cliques. Desta forma será fornecido uma dinamicidade e praticidade ao montarem os formulários.


## 📝 LINK

Esta versão de entrega não incluirá link para o deploy em um servidor.


## 📝 Vídeo

<a href="https://www.youtube.com/watch?v=xV6uGnHp_1A">Vídeo Demo</a>

## 📁 Estrutura de pastas

<pre>
|--> documentos
    | T7_G1_V5_Web_application_document.pdf
    | T7_G1_V5_Web_application_document.docx
    | --> outros
        &emsp;| T7_G1_V1_Web_application_document.pdf
        &emsp;| T7_G1_V1_Web_application_document.docx
        &emsp;| T7_G1_V2_Web_application_document.pdf
        &emsp;| T7_G1_V2_Web_application_document.docx
        &emsp;| T7_G1_V3_Web_application_document.pdf
        &emsp;| T7_G1_V3_Web_application_document.docx
        &emsp;| T7_G1_V4_Web_application_document.pdf
        &emsp;| T7_G1_V4_Web_application_document.docx
|--> imagens
|--> src
  &emsp;|--> Backend
        &emsp;|--> alocacao
        &emsp;|--> Enviar
        &emsp;|--> Etapa
        &emsp;|--> Foto
        &emsp;|--> Item
        &emsp;|--> Projeto
        &emsp;|--> Protocolo
        &emsp;|--> Usuario
        &emsp;|--> utils
        | backend.js
        | dbConnection.js
        | package-lock.json
        | package.jason
        | routes.js
  &emsp;|--> Data
        | banco.db
        | banco.sql
  &emsp;|--> Frontend
        &emsp;| css
        &emsp;| html
        &emsp;| js
| LICENSE
| README.md
</pre>

Dentre os arquivos presentes na raiz do projeto, definem-se:

- <b>readme.md</b>: arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

- <b>documentos</b>: aqui estarão todos os documentos do projeto. Há também uma pasta denominada <b>outros</b> onde estão presentes aqueles documentos complementares  e antigas verções do <b>web application document</b>.

- <b>imagens</b>: imagens relacionadas ao projeto como um todo (por exemplo imagens do sistema, do grupo, logotipos e afins).

- <b>src</b>: nesta pasta encontra-se todo o código fonte do sistema (existem três subpastas <b>backend</b> , <b>data</b> e <b>frontend</b>que contêm, respectivamente, o código do servidor, o banco de dados e o código da página web).

## 💻 Configuração para desenvolvimento

Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.

1.  Baixar e instalar o node.js:  [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/) (versão 16.15.1 LTS)
2. Clone o repositório em questão.
3.  No modo administrador, abra o "prompt de comando" ou o "terminal" e, após,  abra a pasta "src/backend" no diretório raiz do repositório clonado e digite o segundo comando:

```sh
npm install
```

Isso instalará todas as dependências definidas no arquivo <b>package.json</b> que são necessárias para rodar o projeto. Agora o projeto já está pronto para ser modificado. Caso ainda deseje iniciar a aplicação, digite o comando abaixo no terminal:

```sh
npm run dev
```
5. Agora você pode acessar a aplicação através do link http://localhost:3001/ 
6. O servidor está online.


## 🗃 Histórico de lançamentos

* 1.0.0 - 11/05/2023
    * NEW: WAD_v1.
    * NEW: Definição de uma paleta de cores
    * NEW: Criação de um backend.
    * NEW: Criação de um banco de dados.
* 2.0.0 - 25/05/2023
    * UPDATE: Mudança do banco de dados.
    * UPDATE: Implemntação de rotas para o backend.
    * NEW: Criação de um frontend.
    * UPDATE: Implementação da paleta de cores no CSS.
    * UPDATE: Comentários e modularização do frontend.
    * UPDATE: WAD_V2.
* 3.0 - 26/05/2023
    * NEW: Guia de estilos
    * UPDATE: Frontend com desenvolvimento mais profundo.
    * UPDATE: WAD_V3.
* 4.0 - 09/06/2023
    * NEW: Implementação de funções ajax que conectam o front com o backend.
    * UPDATE: Frontend com mais páginas html.
    * UPDATE: Backend com rotas melhor definidas.
    * UPDATE: WAD_V4.
* 5.0 - 23/06/2023
    * UPDATE: versão final do frontend.
    * UPDATE: versão final do backend.
    * UPDATE: versão final com as integrações.
    * UPDATE: WAD_V5.


## 📋 Licença/License


<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/2023M2T7-Inteli/Projeto1">Teko Porã</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/2023M2T7-Inteli/Projeto1">INTELI, Ana Carolina Martire, Ariel Kisilevzky, Enzo Bressane, Gabriel Pelinsari, Isabelle Oliveira, Kaiane Souza, Thomas Abai </a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>
