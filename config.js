// ============================================================
//  ESPAÇO 35 — CONFIGURAÇÕES GERAIS
//  Mude aqui o número do WhatsApp e os textos do topo.
// ============================================================

const CONFIG = {
  // Número no formato internacional, só dígitos: 55 + DDD + número
  whatsapp: "5585992442091",

  // Mensagem que já vem escrita quando o cliente clica em "Quero esse"
  // {modelo}, {marca} e {codigo} são trocados automaticamente pelo par escolhido.
  mensagemWhatsapp: "Oi! 💛 Tenho interesse no(a) {marca} {modelo} (Cód. {codigo}, tam. 35) que vi no catálogo. Ainda está disponível?",

  // Mensagem do botão geral "Falar no WhatsApp"
  mensagemGeral: "Oi! 👠 Vi o catálogo da Espaço 35 e quero saber mais sobre os pares tamanho 35.",

  instagram: "espaco35calcados",

  // PREÇOS por categoria (os mesmos do site espaco35.vercel.app).
  // "de" = preço riscado · "varejo" = preço por par · "atacado" = preço por par a partir de atacadoMinimo peças.
  // Este catálogo mostra varejo E atacado: envie o link só para clientes e revendedoras.
  atacadoMinimo: 6,
  precos: {
    "Tênis":     { de: 229.90, varejo: 129.90, atacado: 109.90 },
    "Sapatos":   { de: 199.90, varejo: 119.90, atacado: 99.90 },
    "Sandálias": { de: 189.90, varejo: 99.90,  atacado: 89.90 },  // rasteiras também usam este preço
  },
  cidade: "Fortaleza – CE",
};
