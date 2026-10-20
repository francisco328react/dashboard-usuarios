# Dashboard de Usuários

Dashboard para visualização e gerenciamento de usuários, desenvolvido com **React**, **Vite** e **Tailwind CSS**, com navegação entre páginas via **React Router**.

<!-- TODO: descreva em 1 ou 2 frases o que o dashboard permite fazer (ex.: listar, filtrar, cadastrar e editar usuários). -->

## Sumário

- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e execução](#instalação-e-execução)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Roadmap](#roadmap)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Autor](#autor)

## Funcionalidades

<!-- TODO: liste as funcionalidades reais do dashboard. Exemplos:
- Listagem de usuários em tabela
- Busca e filtros
- Cadastro, edição e exclusão de usuários
- Navegação entre páginas
- Layout responsivo -->

## Tecnologias

| Categoria   | Tecnologia                                                |
| ----------- | --------------------------------------------------------- |
| UI          | [React 19](https://react.dev/)                            |
| Build       | [Vite 7](https://vite.dev/)                               |
| Estilização | [Tailwind CSS 4](https://tailwindcss.com/)                |
| Rotas       | [React Router 7](https://reactrouter.com/)                |
| Qualidade   | [ESLint 9](https://eslint.org/) com regras para React Hooks |

O projeto é escrito em JavaScript (JSX).

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm (o projeto possui `package-lock.json`)

## Instalação e execução

1. Clone o repositório:

```bash
git clone https://github.com/francisco328react/dashboard-usuarios.git
cd dashboard-usuarios
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse `http://localhost:5173` no navegador (porta padrão do Vite).

## Scripts disponíveis

| Comando           | Descrição                                |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento     |
| `npm run build`   | Gera o build de produção na pasta `dist` |
| `npm run preview` | Serve localmente o build de produção     |
| `npm run lint`    | Executa o ESLint em todo o projeto       |

## Estrutura do projeto

```
dashboard-usuarios/
├── public/                 # Arquivos estáticos
├── src/                    # Código-fonte da aplicação
├── index.html              # Ponto de entrada HTML
├── vite.config.js          # Configuração do Vite (React + Tailwind)
├── eslint.config.js        # Configuração do ESLint
└── package.json
```

<!-- TODO: detalhe as subpastas de src/ (ex.: pages, components, routes, data, hooks). -->

## Roadmap

- [x] Configuração inicial com Vite, React e Tailwind CSS
- [x] Roteamento com React Router
- [ ] <!-- TODO: próxima funcionalidade (ex.: integração com API) -->
- [ ] <!-- TODO: testes automatizados -->
- [ ] <!-- TODO: deploy (ex.: Vercel ou Netlify) -->

## Contribuindo

Contribuições são bem-vindas.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Faça commit das alterações (`git commit -m "feat: minha feature"`)
4. Envie para o seu fork (`git push origin feature/minha-feature`)
5. Abra um Pull Request

## Licença

<!-- TODO: defina a licença (ex.: MIT) e adicione um arquivo LICENSE. -->

## Autor

**Francisco**, [@francisco328react](https://github.com/francisco328react)
