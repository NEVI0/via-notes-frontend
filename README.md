### :green_book: Via Notes Frontend

Repositório criado com o propósito de mostrar minhas capacidades como desenvolvedor full-stack, utilizando o **[React](https://pt-br.reactjs.org/)** para a criação de uma aplicação TODO LIST.

### :scroll: Informações do projeto frontend

Projeto criado através do comando `npx create-react-app --template typescript` utilizando o **CRA**. Toda a parte de codificação está dentro da pasta `/via-notes-frontend/src`, contendo:

	- :pushpin: **[assets](https://github.com/NEVI0/via-notes-frontend/tree/main/src/assets)**;
	- :books: **[components](https://github.com/NEVI0/via-notes-frontend/tree/main/src/components)**;
	- :closed_lock_with_key: **[contexts](https://github.com/NEVI0/via-notes-frontend/tree/main/src/contexts)**;
	- :construction: **[routes](https://github.com/NEVI0/via-notes-frontend/tree/main/src/routes)**;
	- :tv: **[screens](https://github.com/NEVI0/via-notes-frontend/tree/main/src/screens)**;
	- :satellite: **[services](https://github.com/NEVI0/via-notes-frontend/tree/main/src/services)**;
	- :bulb: **[utils](https://github.com/NEVI0/via-notes-frontend/tree/main/src/utils)**;

Cada pasta é responsável por alguma funcionalidade dentro da aplicação, deixando o minímo possível de responsábilidade para uma única tela. Um exemplo são os **[components](https://github.com/NEVI0/via-notes-frontend/tree/main/src/components)** que são partes de código estáticas que podem ser usadas em diferentes telas, como é o caso das telas de **autenticação** e a tela **principal**.

Os **[assets](https://github.com/NEVI0/via-notes-frontend/tree/main/src/assets)** são responsáveis por armazenar as **imagens** que a aplicação utiliza.

Os **[contexts](https://github.com/NEVI0/via-notes-frontend/tree/main/src/contexts)** são responsáveis por armazenar os **[states](https://pt-br.reactjs.org/docs/state-and-lifecycle.html)** globalmente na aplicação, sendo possível utilizá-los em qualquer lugar. Neles ficam armazenadas as informações do **usuário**, **anotações**, **status** e o **tema da aplicação**.

As **[routes](https://github.com/NEVI0/via-notes-frontend/tree/main/src/routes)** são a parte da aplicação que juntamente com o arquivo **[UserContext.tsx](https://github.com/NEVI0/via-notes-frontend/blob/main/src/contexts/UserContext.tsx)** fazem a autenticação do usuário, verificando se o usuário já está logado e qual rota deve ser renderizada.

As **[screens](https://github.com/NEVI0/via-notes-frontend/tree/main/src/screens)** são as telas renderizadas pelo React, contendo apenas as telas de **autenticação** e a **tela principal**.

A pasta **[services](https://github.com/NEVI0/via-notes-frontend/tree/main/src/services)** contém um único arquivo que serve de **instância** para o **[axios](https://github.com/axios/axios)** que é responsável pelas requisição feitas no **[backend](https://github.com/NEVI0/via-notes-backend)**.

As **[utils](https://github.com/NEVI0/via-notes-frontend/tree/main/src/utils)** são arquivos que ajudam de alguma forma a aplicação em seu processo, como é o caso das tipagens de dados presentes nos arquivos e funções reutilizaveis.

### :wrench: Como configurar o projeto

- Instale o **[Node](https://nodejs.org/en/download/)** na sua máquina e verifique a instalação pelo comando abaixo:
```
~ node --version
```

- Baixe o código do **[backend](https://github.com/NEVI0/via-notes-backend)** na sua máquina e siga as instruções para rodá-lo;

- Clone o repositório na sua máquina:
```
~ git clone https://github.com/NEVI0/via-notes-frontend.git
```

- Instale o **[Yarn](https://classic.yarnpkg.com/en/docs/install/)** como gerenciador de pacotes ou utilize o **NPM**. Verifique a instalação pelo comando abaixo:
```
~ npm --version

ou

~ yarn --version
```

- Na raíz do projeto `/via-notes-frontend`, instale as dependências necessárias pelo comando abaixo:
```
~ npm install

ou

~ yarn install
```

### :zap: Como rodar o projeto

- Comando para rodar em **modo de desenvolvimento**:
```
~ npm start

ou

~ yarn start
```

- Comando para gerar o **build de produção**:
```
~ npm run build

ou

~ yarn build
```

:copyright: *Névio Costa Magagnin*
