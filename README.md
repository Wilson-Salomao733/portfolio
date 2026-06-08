# Portfólio — Wilson Salomão

Site pessoal (one-page) construído com **React + Vite + TypeScript + Tailwind CSS v4**.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build de produção

```bash
npm run build      # gera a pasta dist/
npm run preview    # pré-visualiza o build
```

## Deploy na Vercel (grátis)

1. Suba este repositório para o GitHub.
2. Em [vercel.com](https://vercel.com) → **Add New… → Project** → importe o repositório.
3. A Vercel detecta o Vite automaticamente (build: `npm run build`, output: `dist`). Clique em **Deploy**.
4. O site fica no ar em `https://<seu-projeto>.vercel.app` — gratuito, com HTTPS e deploy automático a cada `git push`.

## Personalizar

- Textos, links, experiências e projetos: `src/data.ts`
- Layout e estilo: `src/App.tsx`
- CV para download: `public/WilsonSalomao-CV.pdf`
