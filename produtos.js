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
  { marca: "Mississipi", modelo: "Slingback Prata Biqueira Dourada", descricao: "Sapatilha slingback prata com biqueira dourada. Elegante e versátil.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-01.jpg", disponivel: true, destaque: true },
  { marca: "Mississipi", modelo: "Rasteira Tiras Mostarda", descricao: "Rasteira de tiras finas com aplique dourado. Leve e charmosa.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-02.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Rasteira Gladiadora Caramelo", descricao: "Rasteira estilo gladiadora caramelo com detalhe em strass.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-03.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Tênis Casual Caramelo", descricao: "Tênis casual caramelo com listra preta. Conforto pro dia a dia.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-04.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Baixo Caramelo", descricao: "Sandália de salto bloco baixo caramelo com tira metalizada.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-05.jpg", disponivel: true, destaque: false },
  { marca: "Campesí", modelo: "Rasteira Dourada Trançada", descricao: "Rasteira slide dourada com tiras trançadas. Conforto inteligente.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-06.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Mule Off-White", descricao: "Mule fechado off-white com recorte em 'H'. Sofisticada e clean.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-07.jpg", disponivel: true, destaque: true },
  { marca: "Mississipi", modelo: "Flatform Caramelo Tachas", descricao: "Sandália flatform caramelo de duas tiras com tachas douradas.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-08.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Taça Caramelo", descricao: "Sandália de salto taça caramelo com tiras finas. Delicada e moderna.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-09.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Bloco Caramelo", descricao: "Sandália de salto bloco caramelo com strass trançado.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-10.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Bloco Branca", descricao: "Sandália de salto bloco branca com trança e strass. Perfeita pra eventos.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-11.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Mocassim Tratorado Caramelo", descricao: "Mocassim caramelo de solado tratorado. Estilo e atitude.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-12.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Tamanco Verde Fivela", descricao: "Tamanco slide verde claro com fivela redonda. Tendência da estação.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-13.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Fino Dourada", descricao: "Sandália de salto fino dourada. Brilho certo pra ocasiões especiais.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-14.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Taça Strass", descricao: "Sandália de salto taça caramelo com tiras de strass. Glamour discreto.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-15.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Salto Bloco Nude Medalhão", descricao: "Sandália nude de salto bloco com medalhão artesanal e detalhe dourado. Elegância delicada.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-16.jpg", disponivel: true, destaque: true },
  { marca: "Mississipi", modelo: "Tênis Rosê Detalhe Dourado", descricao: "Tênis rosê com mesh respirável, cadarço bege e ilhós dourado. Leveza pro dia a dia.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-17.jpg", disponivel: true, destaque: true },
  { marca: "Mississipi", modelo: "Tênis Branco Off-White", descricao: "Tênis branco com recortes off-white e friso dourado. Clássico que combina com tudo.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-18.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Papete Anabela Bege Argola Dourada", descricao: "Papete anabela bege com tiras em nó e argola dourada. Conforto com brilho na medida.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-19.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Papete Dourada Tiras com Argola", descricao: "Papete flatform com tiras finas douradas e argola metálica. Iluminada e confortável.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-20.jpg", disponivel: true, destaque: true },
  { marca: "Mississipi", modelo: "Tênis Branco Matelassê", descricao: "Tênis branco matelassê com detalhes bege e coração metálico. Sofisticação esportiva.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-21.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Rasteira Café Discos Dourados", descricao: "Rasteira café com discos em tons terrosos e dourados. Estilo boho elegante.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-22.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Baixa Trança Dourada Strass", descricao: "Sandália de salto baixo com tiras trançadas douradas e strass. Brilho discreto.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-23.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Mocassim Marrom Fivela", descricao: "Mocassim marrom com fivela dourada. Clássico e confortável.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-24.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Scarpin Off-White Salto Bloco", descricao: "Scarpin off-white de salto bloco. Elegante e versátil.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-25.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sapatilha Preta Tira", descricao: "Sapatilha preta com tira e bico fino. Atemporal.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-26.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Scarpin Caramelo Fivela Dourada", descricao: "Scarpin caramelo bico fino com fivela dourada. Sofisticado.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-27.jpg", disponivel: true, destaque: true },
  { marca: "Mississipi", modelo: "Rasteira Off-White Tiras Cruzadas", descricao: "Rasteira off-white de tiras cruzadas. Leve e clean.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-28.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Marrom Flatform Fivela", descricao: "Sandália marrom flatform com fivela dourada. Moderna.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-29.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Marrom Pedraria", descricao: "Sandália marrom com pedraria. Brilho no ponto certo.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-30.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Off-White Argola Dourada", descricao: "Sandália off-white com argola dourada. Delicada.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-31.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Anabela Dourada Tachas", descricao: "Anabela dourada com tachas. Glamour e conforto.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-32.jpg", disponivel: true, destaque: true },
  { marca: "Mississipi", modelo: "Sandália Nude Salto Bloco", descricao: "Sandália nude de salto bloco. Discreta e elegante.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-33.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Dourada Tiras Finas", descricao: "Sandália dourada de tiras finas. Iluminada.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-34.jpg", disponivel: true, destaque: false },
  { marca: "Campesí", modelo: "Sandália Rosê Salto Bloco", descricao: "Sandália rosê de salto bloco. Romântica e moderna.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-35.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Papete Branca Pedraria", descricao: "Papete branca com pedraria. Conforto com brilho.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-36.jpg", disponivel: true, destaque: false },
  { marca: "Pink Cats", modelo: "Tênis Branco Detalhe Lilás", descricao: "Tênis branco com detalhes lilás. Jovem e confortável.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-37.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Tênis Off-White Recorte", descricao: "Tênis off-white com recortes. Casual e leve.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-38.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Dourada Salto Baixo", descricao: "Sandália dourada de salto baixo. Charme diário.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-39.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Rosê Pedra", descricao: "Sandália rosê com pedra. Delicada e brilhante.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-40.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Rasteira Marrom Tiras Finas", descricao: "Rasteira marrom de tiras finas. Despojada.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-41.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Caramelo Tiras", descricao: "Sandália caramelo de tiras. Versátil e leve.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-42.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Anabela Caramelo Fivela", descricao: "Anabela caramelo com fivela. Conforto com altura.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-43.jpg", disponivel: true, destaque: true },
  { marca: "Mississipi", modelo: "Rasteira Nude Pedraria", descricao: "Rasteira nude com pedraria. Sofisticação no plano.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-44.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Tamanco Verde Slide", descricao: "Tamanco verde slide. Tendência da estação.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-45.jpg", disponivel: true, destaque: true },
  { marca: "Mississipi", modelo: "Rasteira Caramelo Tiras", descricao: "Rasteira caramelo de tiras. Básica indispensável.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-46.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Caramelo Salto Taça", descricao: "Sandália caramelo de salto taça. Moderna e feminina.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-47.jpg", disponivel: true, destaque: true },
  { marca: "Mississipi", modelo: "Sandália Caramelo Trançada", descricao: "Sandália caramelo de tiras trançadas. Charmosa.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-48.jpg", disponivel: true, destaque: false },
  { marca: "Campesí", modelo: "Mule Dourado Trançado", descricao: "Mule dourado trançado. Brilho e conforto.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-49.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Papete Bege Flatform", descricao: "Papete bege flatform. Conforto que combina com tudo.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-50.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Caramelo Salto Bloco", descricao: "Sandália caramelo de salto bloco. Clássica.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-51.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Caramelo Fivela", descricao: "Sandália caramelo flatform com fivela. Estilosa.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-52.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Papete Caramelo Velcro", descricao: "Papete caramelo com velcro. Conforto regulável.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-53.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Caramelo Salto Baixo", descricao: "Sandália caramelo de salto baixo. Para o dia a dia.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-54.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Mule Off-White Conforto", descricao: "Mule off-white de solado conforto. Clean e prática.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-55.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Papete Off-White Dupla", descricao: "Papete off-white de tira dupla. Minimalista.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-56.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Rasteira Dourada Tachas", descricao: "Rasteira dourada com tachas. Brilho no passo.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-57.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Tênis Branco Recorte Caramelo", descricao: "Tênis branco com recorte caramelo. Casual chique.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-58.jpg", disponivel: true, destaque: false },
  { marca: "Campesí", modelo: "Sandália Rosê Strass", descricao: "Sandália rosê com strass. Glamour e leveza.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-59.jpg", disponivel: true, destaque: true },
  { marca: "Mississipi", modelo: "Papete Caramelo Tiras Finas", descricao: "Papete caramelo de tiras finas. Delicada.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-60.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Sandália Dourada Salto Tiras", descricao: "Sandália dourada de salto com tiras. Festa e brilho.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-61.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Tênis Off-White Cadarço", descricao: "Tênis off-white com cadarço. Conforto diário.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-62.jpg", disponivel: true, destaque: false },
  { marca: "Mississipi", modelo: "Tênis Rosê Casual", descricao: "Tênis rosê casual. Fofo e confortável.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-63.jpg", disponivel: true, destaque: true },
  { marca: "Mississipi", modelo: "Tênis Bege Matelassê", descricao: "Tênis bege matelassê de plataforma. Tendência.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-64.jpg", disponivel: true, destaque: true },
  { marca: "Mississipi", modelo: "Tênis Off-White Plataforma", descricao: "Tênis off-white de plataforma. Estiloso e leve.", preco: 69.90, precoDe: 100.00, imagem: "espaco35-65.jpg", disponivel: true, destaque: false },
];
