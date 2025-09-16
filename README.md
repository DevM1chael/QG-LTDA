# QG-LTDA

## Pré-requisitos
- Node.js (https://nodejs.org/) instalado na máquina

## Instalação
1. Clone o repositório
2. Execute `npm install` para instalar as dependências

## Dependências principais
- react
- react-dom
- framer-motion
- lucide-react

## Como rodar
Após instalar o Node.js e executar `npm install`, você pode rodar o projeto de forma simples:

1. Certifique-se de que existe a pasta `public` com o arquivo `index.html` e a pasta `src` com `index.js` e `App.js`.
2. Use um bundler como Vite, Parcel ou Create React App para compilar e servir o projeto.
	 - Exemplo com Vite:
		 - Execute `npm create vite@latest` e escolha a pasta atual.
		 - Substitua o conteúdo de `src/App.js` e `src/index.js` pelos arquivos deste projeto.
		 - Mantenha o `public/index.html`.
		 - Execute `npm run dev` para visualizar.

Se preferir, adapte para Next.js ou outro framework React.

## Estrutura
- `components/Home/` — Componentes funcionais React para cada seção
- `components/Chat/` — Componentes de chat
- `Pages/Home.jsx` — Página principal que importa todos os componentes

## Observações
- Certifique-se de que todos os arquivos de componentes estejam com extensão `.js`.
- O arquivo principal da página está em `Pages/Home.jsx`.
- Instale as dependências antes de rodar o projeto.

---
Dúvidas ou problemas? Instale o Node.js, rode `npm install` e utilize um bundler React para visualizar o projeto.
 teste