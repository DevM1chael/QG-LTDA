# Copilot Instructions for QG-LTDA

## Visão Geral da Arquitetura
- O projeto está organizado em componentes React, divididos em subpastas por domínio funcional: `components/Chat` e `components/Home`.
- Cada subpasta representa uma seção da interface, por exemplo: `BankSection`, `HeroSection`, `InvestorsSection`, `SectorsSection`, `ValueSection`.
- O arquivo `Layout.js` provavelmente gerencia a estrutura principal da página.
- A pasta `Pages` está presente, mas atualmente está vazia.

## Padrões e Convenções
- Componentes seguem convenção PascalCase para nomes de arquivos e pastas.
- Cada componente reside em seu próprio arquivo dentro da respectiva subpasta.
- Evite criar componentes fora das subpastas temáticas.
- Use importações relativas para referenciar componentes entre subpastas.

## Fluxo de Trabalho do Desenvolvedor
- Não há scripts de build, testes ou automações detectados; se necessário, consulte o usuário para detalhes.
- Recomenda-se adicionar scripts de build/teste no futuro para padronizar o fluxo.

## Integrações e Dependências
- Não foram encontrados arquivos de configuração de dependências (ex: `package.json`).
- Presuma que o projeto utiliza React puro, sem frameworks adicionais até que arquivos de configuração sejam adicionados.

## Exemplos de Importação
```js
import BankSection from '../Home/BankSection';
import QuinteroAssistant from '../Chat/QuinteroAssistant';
```

## Recomendações para Agentes
- Mantenha a estrutura de pastas e padrões de nomenclatura.
- Documente novas convenções diretamente neste arquivo.
- Solicite feedback ao usuário ao propor mudanças estruturais.

---
Este documento deve ser revisado e expandido conforme o projeto evolui. Adicione exemplos e convenções específicas à medida que forem descobertas.
