// ============================================================
//  ESPAÇO 35 — LÓGICA DO CATÁLOGO
//  Você normalmente NÃO precisa mexer aqui.
//  Para mudar produtos -> produtos.js   |   textos/whatsapp -> config.js
// ============================================================

(function () {
  const grade = document.getElementById("grade");
  const filtros = document.getElementById("filtros");
  const vazio = document.getElementById("vazio");

  // ---- formata preço em R$ ----
  function reais(v) {
    return "R$ " + Number(v).toFixed(2).replace(".", ",");
  }

  // ---- monta o link do WhatsApp ----
  function linkWhats(numero, mensagem) {
    return "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
  }

  // ---- preenche rodapé / config ----
  document.getElementById("cidade").textContent = CONFIG.cidade;
  const ig = document.getElementById("igLink");
  ig.href = "https://instagram.com/" + CONFIG.instagram;
  ig.textContent = "@" + CONFIG.instagram;
  document.getElementById("whatsGeral").href = linkWhats(CONFIG.whatsapp, CONFIG.mensagemGeral);

  // ---- cria um card de produto ----
  function criarCard(prod) {
    const card = document.createElement("article");
    card.className = "card" + (prod.disponivel ? "" : " esgotado");

    // foto (ou espaço elegante se não houver)
    const foto = document.createElement("div");
    foto.className = "card-foto";
    if (prod.imagem) {
      const img = document.createElement("img");
      img.src = "imagens/" + prod.imagem;
      img.alt = prod.marca + " " + prod.modelo + " tamanho 35";
      img.loading = "lazy";
      // se a foto não carregar, troca por placeholder
      img.onerror = function () { foto.innerHTML = placeholderFoto(); reaplicarSelos(foto, prod); };
      foto.appendChild(img);
    } else {
      foto.innerHTML = placeholderFoto();
    }
    reaplicarSelos(foto, prod);

    // corpo
    const corpo = document.createElement("div");
    corpo.className = "card-corpo";

    let precosHtml;
    if (prod.preco === null || prod.preco === undefined || prod.preco === "") {
      precosHtml = '<span class="preco preco-consulta">Sob consulta</span>';
    } else {
      precosHtml = '<span class="preco">' + reais(prod.preco) + "</span>";
      if (prod.precoDe) {
        precosHtml = '<span class="preco-de">' + reais(prod.precoDe) + "</span>" + precosHtml;
      }
    }

    let botao;
    if (prod.disponivel) {
      const msg = CONFIG.mensagemWhatsapp
        .replace("{marca}", prod.marca)
        .replace("{modelo}", prod.modelo);
      botao = '<a class="btn-whats" target="_blank" rel="noopener" href="' +
        linkWhats(CONFIG.whatsapp, msg) + '">Quero esse 💛</a>';
    } else {
      botao = '<span class="btn-whats desativado">Esgotado</span>';
    }

    corpo.innerHTML =
      '<span class="card-marca">' + prod.marca + "</span>" +
      '<h2 class="card-modelo">' + prod.modelo + "</h2>" +
      '<p class="card-desc">' + (prod.descricao || "") + "</p>" +
      '<span class="card-tam">Tamanho 35 · original e novo</span>' +
      '<div class="precos">' + precosHtml + "</div>" +
      botao;

    card.appendChild(foto);
    card.appendChild(corpo);
    return card;
  }

  function placeholderFoto() {
    return '<div class="foto-vazia"><span>👠</span>foto em breve</div>';
  }

  function reaplicarSelos(foto, prod) {
    // remove selos antigos
    foto.querySelectorAll(".selo, .selo-esgotado").forEach(function (e) { e.remove(); });
    if (!prod.disponivel) {
      const s = document.createElement("div");
      s.className = "selo-esgotado";
      s.textContent = "Esgotado";
      foto.appendChild(s);
    } else if (prod.destaque) {
      const s = document.createElement("div");
      s.className = "selo";
      s.textContent = "Último par";
      foto.appendChild(s);
    }
  }

  // ---- renderiza a grade conforme a marca selecionada ----
  function render(marcaSel) {
    grade.innerHTML = "";
    const lista = (marcaSel === "Todos")
      ? PRODUTOS
      : PRODUTOS.filter(function (p) { return p.marca === marcaSel; });

    // disponíveis primeiro, esgotados por último
    lista.slice().sort(function (a, b) { return (b.disponivel - a.disponivel); })
      .forEach(function (p) { grade.appendChild(criarCard(p)); });

    vazio.hidden = lista.length > 0;
  }

  // ---- monta os chips de filtro a partir das marcas existentes ----
  function montarFiltros() {
    const marcas = ["Todos"].concat(
      Array.from(new Set(PRODUTOS.map(function (p) { return p.marca; })))
    );
    marcas.forEach(function (m, i) {
      const b = document.createElement("button");
      b.className = "chip" + (i === 0 ? " ativo" : "");
      b.textContent = m;
      b.addEventListener("click", function () {
        filtros.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("ativo"); });
        b.classList.add("ativo");
        render(m);
      });
      filtros.appendChild(b);
    });
  }

  // ---- inicia ----
  montarFiltros();
  render("Todos");
})();
