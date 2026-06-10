// ============================================================
//  ESPAÇO 35 — CATÁLOGO DE PRODUTOS
//  É AQUI que você adiciona, remove ou edita os pares.
//  Copie um bloco { ... }, cole e mude os valores. Salve o arquivo.
// ============================================================
//
//  Campos de cada par:
//   marca       -> "Mississipi" | "Pink Cats" | "Campesí" (ou outra)
//   modelo      -> nome curto do sapato
//   descricao   -> 1 frase: cor, material, ocasião
//   preco       -> preço atual, ex: 189.90.  Deixe null = mostra "Sob consulta"
//   precoDe     -> (opcional) preço "de" antes, ex: 259.90. null = não mostra.
//   imagem      -> nome do arquivo na pasta /imagens
//   disponivel  -> true (à venda)  ou  false (esgotado)
//   destaque    -> true mostra o selo "Último par"
//
//  >>> PREÇOS: estão como null ("Sob consulta"). Troque pelo valor real,
//      ex: preco: 189.90
// ------------------------------------------------------------

const PRODUTOS = [
  { marca: "Mississipi", modelo: "Slingback Prata Biqueira Dourada", descricao: "Sapatilha slingback prata com biqueira dourada. Elegante e versátil.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-01.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Rasteira Tiras Mostarda", descricao: "Rasteira de tiras finas com aplique dourado. Leve e charmosa.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-02.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Rasteira Gladiadora Caramelo", descricao: "Rasteira estilo gladiadora caramelo com detalhe em strass.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-03.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Tênis Casual Caramelo", descricao: "Tênis casual caramelo com listra preta. Conforto pro dia a dia.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-04.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Baixo Caramelo", descricao: "Sandália de salto bloco baixo caramelo com tira metalizada.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-05.jpg", disponivel: true, destaque: false },
  { marca: "Campesí", modelo: "Rasteira Dourada Trançada", descricao: "Rasteira slide dourada com tiras trançadas. Conforto inteligente.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-06.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Mule Off-White", descricao: "Mule fechado off-white com recorte em 'H'. Sofisticada e clean.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-07.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Flatform Caramelo Tachas", descricao: "Sandália flatform caramelo de duas tiras com tachas douradas.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-08.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Taça Caramelo", descricao: "Sandália de salto taça caramelo com tiras finas. Delicada e moderna.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-09.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Bloco Caramelo", descricao: "Sandália de salto bloco caramelo com strass trançado.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-10.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Bloco Branca", descricao: "Sandália de salto bloco branca com trança e strass. Perfeita pra eventos.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-11.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Mocassim Tratorado Caramelo", descricao: "Mocassim caramelo de solado tratorado. Estilo e atitude.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-12.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Tamanco Verde Fivela", descricao: "Tamanco slide verde claro com fivela redonda. Tendência da estação.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-13.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Fino Dourada", descricao: "Sandália de salto fino dourada. Brilho certo pra ocasiões especiais.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-14.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Taça Strass", descricao: "Sandália de salto taça caramelo com tiras de strass. Glamour discreto.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-15.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Bloco Nude Medalhão", descricao: "Sandália nude de salto bloco com medalhão artesanal e detalhe dourado. Elegância delicada.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-16.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Tênis Rosê Detalhe Dourado", descricao: "Tênis rosê com mesh respirável, cadarço bege e ilhós dourado. Leveza pro dia a dia.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-17.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Tênis Branco Off-White", descricao: "Tênis branco com recortes off-white e friso dourado. Clássico que combina com tudo.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-18.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Papete Anabela Bege Argola Dourada", descricao: "Papete anabela bege com tiras em nó e argola dourada. Conforto com brilho na medida.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-19.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Papete Dourada Tiras com Argola", descricao: "Papete flatform com tiras finas douradas e argola metálica. Iluminada e confortável.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-20.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Tênis Branco Matelassê", descricao: "Tênis branco matelassê com detalhes bege e coração metálico. Sofisticação esportiva.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-21.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Rasteira Café Discos Dourados", descricao: "Rasteira café com discos em tons terrosos e dourados. Estilo boho elegante.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-22.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Baixa Trança Dourada Strass", descricao: "Sandália de salto baixo com tiras trançadas douradas e strass. Brilho discreto.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-23.jpg", disponivel: true, destaque: false },
];
