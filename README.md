# plann.er

![Plann.er Preview](./github/Thumbnail.jpg)

## Introdução
O **plann.er** é uma aplicação web desenvolvida durante o evento NLW (Next Level Week) na edição Journey, feito pela Rocketseat. O projeto foi criado com o objetivo de facilitar o planejamento de viagens em grupo, oferecendo uma interface intuitiva e funcionalidades que permitem aos usuários definir locais e datas, convidar participantes, cadastrar atividades, entre outros.

Construído na trilha de **React**, o plann.er utiliza tecnologias modernas como Vite, React, TypeScript e Tailwind CSS para entregar uma experiência eficiente e escalável.

## Sumário

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Funcionalidades](#funcionalidades)
- [Melhorias e Novas Funcionalidades](#melhorias-e-novas-funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente:

- [Node.js](https://nodejs.org/pt) (v18 ou superior)
- [Git](https://git-scm.com/)
- Um editor de código, como o [Visual Studio Code](https://code.visualstudio.com/)

## Instalação

Para instalar e rodar o Plann.er localmente, siga os passos detalhados abaixo:

1. **Clone o repositório do projeto:**
    ```bash
    git clone https://github.com/LFeli/plann.er.git
    ```
   
2. **Acesse o diretório do projeto:**
    ```bash
    cd plann.er
    ```

### Configuração da API

3. **Navegue até o diretório da API:**
    ```bash
    cd api
    ```

4. **Instale as dependências da API:**
    ```bash
    npm install
    ```

5. **Inicie o servidor de desenvolvimento da API:**
    ```bash
    npm run dev
    ```

### Configuração da Interface Web

6. **Abra uma nova instância do terminal e navegue até o diretório da aplicação web:**
    ```bash
    cd ../web
    ```

7. **Instale as dependências da aplicação web:**
    ```bash
    npm install
    ```

8. **Inicie o servidor de desenvolvimento da aplicação web:**
    ```bash
    npm run dev
    ```

## Uso

1. **Defina os Detalhes da Viagem:** Selecione o local e a data da viagem.
2. **Convide Participantes:** Envie convites para amigos e familiares participarem do planejamento.
3. **Confirme a criação da sua viagem:** Confirme o seu nome completo e seu e-mail pessoal para criar a sua viagem.
4. **Cadastre Atividades:** Adicione atividades que o grupo pretende realizar durante a viagem.
5. **Adicione Links Importantes:** Salve links úteis, como mapas, restaurantes, ou guias turísticos.
6. **Gerencie os Convites:** Verifique quem aceitou o convite e organize os participantes.

## Funcionalidades

- Definir local e data da viagem.
- Convidar pessoas para acessar o planner da viagem.
- Cadastrar atividades e links importantes.
- Gerenciar participantes e convites.

## Melhorias e Novas Funcionalidades
Após o evento NLW, o projeto **plann.er** continua em desenvolvimento com o objetivo de aprimorar as interações e funcionalidades. Porém essa etapa ainda está sendo desenvolvida 🚧

## Tecnologias Utilizadas

- **React** - Biblioteca principal para construção da interface.
- **TypeScript** - Superset de JavaScript para tipagem estática.
- **Vite** - Ferramenta de build rápida para projetos front-end.
- **Tailwind CSS** - Framework de CSS para estilização.
- **Bibliotecas adicionais:**
  - `axios`
  - `date-fns`
  - `react-day-picker`
  - `react-router-dom`
  - `tailwind-variants`