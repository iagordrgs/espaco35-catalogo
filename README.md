# Espaço 35 — Catálogo Web

Catálogo de calçados femininos **tamanho 35**, novos e originais, para enviar como link aos clientes. Página estática (HTML/CSS/JS), sem servidor, hospedável de graça. Cada par tem um botão que abre o WhatsApp já com a mensagem escrita.

Este arquivo também serve de **contexto do projeto** para abrir no VS Code e seguir construindo (inclusive os agentes de atendimento do Instagram, ver o fim).

---

## 1. A marca (resumo)

- **Negócio:** loja online de calçados femininos, exclusivamente tamanho 35, novos/originais/com caixa.
- **Marcas:** Mississipi, Pink Cats, Campesí.
- **Operação:** Fortaleza-CE, vendas via Instagram + WhatsApp. Ecommerce fica para depois.
- **Posicionamento:** outlet premium / curadoria feminina / coleções anteriores / últimos pares. **Nunca** "mostruário", "queima" ou "saldão".
- **Instagram:** @espaco35calcados — **WhatsApp:** 55 85 99244-2091
- **Identidade:** fundo preto `#0B0B0B`, off-white `#F5F2ED`, champagne gold `#D6B07A`. Minimalista, elegante, feminino.
- **Tom:** elegante, feminino, premium acessível, moderno, confiável.

---

## 2. Estrutura dos arquivos

```
espaco35-catalogo/
├── index.html     → a página (não precisa mexer)
├── estilo.css     → o visual da marca (mexe só se quiser ajustar design)
├── produtos.js    → AQUI você adiciona/edita/remove os pares  ← principal
├── config.js      → número do WhatsApp e textos do topo
├── app.js         → lógica (não precisa mexer)
├── imagens/       → fotos dos sapatos
└── README.md      → este arquivo
```

---

## 3. Como adicionar um par (o dia a dia)

1. Abra **`produtos.js`** no VS Code.
2. Copie um bloco entre `{` e `}`, cole logo abaixo e mude os valores.
3. Coloque a foto do sapato dentro da pasta **`imagens/`** e use o mesmo nome em `imagem`.
4. Salve. Pronto.

Exemplo de um par:

```js
{
  marca: "Mississipi",
  modelo: "Scarpin Nude",
  descricao: "Salto fino, atemporal e elegante.",
  preco: 189.90,
  precoDe: 259.90,        // ou null para não mostrar preço antigo
  imagem: "mississipi-scarpin-nude.jpg",
  disponivel: true,       // false = aparece como ESGOTADO
  destaque: true,         // true = mostra o selo "Último par"
},
```

**Vendeu um par?** Mude `disponivel: true` para `disponivel: false` (ele vai pro fim com selo "Esgotado") ou apague o bloco inteiro.

### Dicas das fotos
- Fundo neutro (preto ou off-white), boa luz, par sozinho.
- Quadradas (1:1) ficam melhores. Nomes sem espaço/acento: `pinkcats-rasteira.jpg`.
- Se o par ainda não tem foto, deixe o nome de um arquivo que não existe — aparece um espaço elegante "foto em breve".

---

## 4. Ver no seu computador antes de publicar

Abra a pasta no VS Code e use a extensão **Live Server** (botão "Go Live"), ou
dê duplo clique no `index.html`. Funciona offline.

---

## 5. Publicar de graça (virar um link)

### Opção A — Netlify (mais fácil, sem comandos)
1. Crie conta em https://netlify.com
2. Menu **Add new site → Deploy manually**.
3. Arraste a pasta `espaco35-catalogo` inteira para a área indicada.
4. Pronto: você recebe um link tipo `espaco35.netlify.app`.
5. Atualizou produtos? Arraste a pasta de novo (ou conecte ao GitHub para atualizar sozinho).

### Opção B — GitHub Pages
1. Crie conta em https://github.com e um repositório (ex.: `espaco35-catalogo`).
2. Suba os arquivos (botão **Add file → Upload files**).
3. Em **Settings → Pages**, escolha a branch `main` / pasta `/root` e salve.
4. Em ~1 min sai o link `seuusuario.github.io/espaco35-catalogo`.

Depois é só colocar esse link na **bio do Instagram** e mandar no WhatsApp.

---

## 6. Próximo passo: agentes de IA para o Instagram

Ideia: atendimento humanizado no Instagram/WhatsApp que responde dúvidas, mostra
pares disponíveis e encaminha a venda — no tom da marca.

Pontos a definir quando formos construir (anotados para não perder):
- **Canal real:** a API oficial do Instagram (Meta) exige conta Business + aprovação;
  alternativas são ferramentas de terceiros (ManyChat, etc.) ou começar pelo WhatsApp
  (API Cloud do WhatsApp, mais acessível para automação).
- **Cérebro do agente:** usar este mesmo `produtos.js` como fonte de verdade do estoque,
  para o agente nunca oferecer par esgotado.
- **Persona/tom:** já definido no Guia de Marca (elegante, feminino, premium acessível).
  Vale escrever um "system prompt" com essas regras + o que pode/não pode falar.
- **Escopo inicial sugerido:** responder "tem no 35?", informar preço, mandar o link do
  catálogo e o par específico, e passar para humano quando for fechar.

> Quando quiser, retomamos por aqui e montamos o agente passo a passo.
