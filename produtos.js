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
  { marca: "Mississipi", modelo: "Slingback Prata Biqueira Dourada", descricao: "Sapatilha slingback prata com biqueira dourada. Elegante e versátil.", preco: null, precoDe: null, imagem: "espaco35-01.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Rasteira Tiras Mostarda", descricao: "Rasteira de tiras finas com aplique dourado. Leve e charmosa.", preco: null, precoDe: null, imagem: "espaco35-02.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Rasteira Gladiadora Caramelo", descricao: "Rasteira estilo gladiadora caramelo com detalhe em strass.", preco: null, precoDe: null, imagem: "espaco35-03.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Tênis Casual Caramelo", descricao: "Tênis casual caramelo com listra preta. Conforto pro dia a dia.", preco: null, precoDe: null, imagem: "espaco35-04.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Baixo Caramelo", descricao: "Sandália de salto bloco baixo caramelo com tira metalizada.", preco: null, precoDe: null, imagem: "espaco35-05.jpg", disponivel: true, destaque: false },
  { marca: "Campesí", modelo: "Rasteira Dourada Trançada", descricao: "Rasteira slide dourada com tiras trançadas. Conforto inteligente.", preco: null, precoDe: null, imagem: "espaco35-06.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Mule Off-White", descricao: "Mule fechado off-white com recorte em 'H'. Sofisticada e clean.", preco: null, precoDe: null, imagem: "espaco35-07.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Flatform Caramelo Tachas", descricao: "Sandália flatform caramelo de duas tiras com tachas douradas.", preco: null, precoDe: null, imagem: "espaco35-08.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Taça Caramelo", descricao: "Sandália de salto taça caramelo com tiras finas. Delicada e moderna.", preco: null, precoDe: null, imagem: "espaco35-09.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Bloco Caramelo", descricao: "Sandália de salto bloco caramelo com strass trançado.", preco: null, precoDe: null, imagem: "espaco35-10.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Bloco Branca", descricao: "Sandália de salto bloco branca com trança e strass. Perfeita pra eventos.", preco: null, precoDe: null, imagem: "espaco35-11.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Mocassim Tratorado Caramelo", descricao: "Mocassim caramelo de solado tratorado. Estilo e atitude.", preco: null, precoDe: null, imagem: "espaco35-12.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Tamanco Verde Fivela", descricao: "Tamanco slide verde claro com fivela redonda. Tendência da estação.", preco: null, precoDe: null, imagem: "espaco35-13.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Fino Dourada", descricao: "Sandália de salto fino dourada. Brilho certo pra ocasiões especiais.", preco: null, precoDe: null, imagem: "espaco35-14.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Taça Strass", descricao: "Sandália de salto taça caramelo com tiras de strass. Glamour discreto.", preco: null, precoDe: null, imagem: "espaco35-15.jpg", disponivel: true, destaque: false },
];
