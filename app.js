// ============================================================
//  ESPAÇO 35 — LÓGICA DO CATÁLOGO
//  Produtos -> produtos.js   |   textos/whatsapp -> config.js
//  Cada par pode ter várias imagens (carrossel + lightbox).
// ============================================================

(function () {
  const grade = document.getElementById("grade");
  const filtros = document.getElementById("filtros");
  const vazio = document.getElementById("vazio");

  function reais(v) { return "R$ " + Number(v).toFixed(2).replace(".", ","); }
  function linkWhats(numero, mensagem) {
    return "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
  }
  function imagensDe(prod) {
    if (prod.imagens && prod.imagens.length) return prod.imagens;
    if (prod.imagem) return [prod.imagem];
    return [];
  }

  document.getElementById("cidade").textContent = CONFIG.cidade;
  const ig = document.getElementById("igLink");
  ig.href = "https://instagram.com/" + CONFIG.instagram;
  ig.textContent = "@" + CONFIG.instagram;
  document.getElementById("whatsGeral").href = linkWhats(CONFIG.whatsapp, CONFIG.mensagemGeral);
  document.getElementById("whatsFloat").href = linkWhats(CONFIG.whatsapp, CONFIG.mensagemGeral);

  // ---------- LIGHTBOX ----------
  const lb = document.createElement("div");
  lb.className = "lightbox"; lb.hidden = true;
  lb.innerHTML =
    '<button class="lb-fechar" aria-label="Fechar">&times;</button>' +
    '<button class="lb-seta lb-prev" aria-label="Anterior">&#8249;</button>' +
    '<img class="lb-img" alt="" />' +
    '<button class="lb-seta lb-next" aria-label="Próxima">&#8250;</button>' +
    '<span class="lb-contador"></span>';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector(".lb-img");
  const lbCont = lb.querySelector(".lb-contador");
  let lbList = [], lbIdx = 0;
  function lbShow(i) {
    lbIdx = (i + lbList.length) % lbList.length;
    lbImg.src = "imagens/" + lbList[lbIdx];
    lbCont.textContent = (lbIdx + 1) + "/" + lbList.length;
    lb.querySelectorAll(".lb-seta").forEach(function (b) { b.hidden = lbList.length < 2; });
    lbCont.hidden = lbList.length < 2;
  }
  function abrirLightbox(lista, i) { lbList = lista; lb.hidden = false; lbShow(i); }
  function fecharLightbox() { lb.hidden = true; }
  lb.querySelector(".lb-fechar").onclick = fecharLightbox;
  lb.addEventListener("click", function (e) { if (e.target === lb) fecharLightbox(); });
  lb.querySelector(".lb-prev").onclick = function () { lbShow(lbIdx - 1); };
  lb.querySelector(".lb-next").onclick = function () { lbShow(lbIdx + 1); };
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") fecharLightbox();
    if (e.key === "ArrowLeft") lbShow(lbIdx - 1);
    if (e.key === "ArrowRight") lbShow(lbIdx + 1);
  });

  function placeholderFoto() {
    return '<div class="foto-vazia"><span>👠</span>foto em breve</div>';
  }

  function criarCard(prod) {
    const card = document.createElement("article");
    card.className = "card" + (prod.disponivel ? "" : " esgotado");

    const foto = document.createElement("div");
    foto.className = "card-foto";
    const imgs = imagensDe(prod);
    let idx = 0;

    if (imgs.length) {
      const imgEl = document.createElement("img");
      imgEl.src = "imagens/" + imgs[0];
      imgEl.alt = prod.marca + " " + prod.modelo + " tamanho 35";
      imgEl.loading = "lazy";
      imgEl.onerror = function () { foto.innerHTML = placeholderFoto(); reaplicarSelos(foto, prod); };
      imgEl.addEventListener("click", function () { abrirLightbox(imgs, idx); });
      foto.appendChild(imgEl);

      if (imgs.length > 1) {
        foto.classList.add("tem-carrossel");
        function mostrar(i) { idx = (i + imgs.length) % imgs.length; imgEl.src = "imagens/" + imgs[idx]; atualizarPontos(); }
        const prev = document.createElement("button");
        prev.className = "card-seta card-prev"; prev.innerHTML = "&#8249;"; prev.setAttribute("aria-label", "Anterior");
        prev.onclick = function (e) { e.stopPropagation(); mostrar(idx - 1); };
        const next = document.createElement("button");
        next.className = "card-seta card-next"; next.innerHTML = "&#8250;"; next.setAttribute("aria-label", "Próxima");
        next.onclick = function (e) { e.stopPropagation(); mostrar(idx + 1); };
        const pontos = document.createElement("div");
        pontos.className = "card-pontos";
        imgs.forEach(function (_, i) { const d = document.createElement("span"); if (i === 0) d.className = "ativo"; pontos.appendChild(d); });
        function atualizarPontos() {
          pontos.querySelectorAll("span").forEach(function (s, i) { s.className = i === idx ? "ativo" : ""; });
        }
        foto.appendChild(prev); foto.appendChild(next); foto.appendChild(pontos);
        const tag = document.createElement("span");
        tag.className = "card-multi"; tag.textContent = imgs.length + " fotos";
        foto.appendChild(tag);
      }
    } else {
      foto.innerHTML = placeholderFoto();
    }
    reaplicarSelos(foto, prod);

    const corpo = document.createElement("div");
    corpo.className = "card-corpo";
    let precosHtml;
    if (prod.preco === null || prod.preco === undefined || prod.preco === "") {
      precosHtml = '<span class="preco preco-consulta">Sob consulta</span>';
    } else {
      precosHtml = '<span class="preco">' + reais(prod.preco) + "</span>";
      if (prod.precoDe) precosHtml = '<span class="preco-de">' + reais(prod.precoDe) + "</span>" + precosHtml;
    }
    let botao;
    if (prod.disponivel) {
      const msg = CONFIG.mensagemWhatsapp.replace("{marca}", prod.marca).replace("{modelo}", prod.modelo);
      botao = '<a class="btn-whats" target="_blank" rel="noopener" href="' + linkWhats(CONFIG.whatsapp, msg) + '">Quero esse 💛</a>';
    } else {
      botao = '<span class="btn-whats desativado">Esgotado</span>';
    }
    corpo.innerHTML =
      '<span class="card-marca">' + prod.marca + "</span>" +
      '<h2 class="card-modelo">' + prod.modelo + "</h2>" +
      '<p class="card-desc">' + (prod.descricao || "") + "</p>" +
      '<span class="card-tam">Tamanho 35 · original e novo</span>' +
      '<div class="precos">' + precosHtml + "</div>" + botao;

    card.appendChild(foto);
    card.appendChild(corpo);
    return card;
  }

  function reaplicarSelos(foto, prod) {
    foto.querySelectorAll(".selo, .selo-esgotado").forEach(function (e) { e.remove(); });
    if (!prod.disponivel) {
      const s = document.createElement("div"); s.className = "selo-esgotado"; s.textContent = "Esgotado"; foto.appendChild(s);
    } else if (prod.destaque) {
      const s = document.createElement("div"); s.className = "selo"; s.textContent = "Últimas unidades"; foto.appendChild(s);
    }
  }

  function render(marcaSel) {
    grade.innerHTML = "";
    const lista = (marcaSel === "Todos") ? PRODUTOS : PRODUTOS.filter(function (p) { return p.marca === marcaSel; });
    lista.slice().sort(function (a, b) { return (b.disponivel - a.disponivel); })
      .forEach(function (p) { grade.appendChild(criarCard(p)); });
    vazio.hidden = lista.length > 0;
  }

  function montarFiltros() {
    const marcas = ["Todos"].concat(Array.from(new Set(PRODUTOS.map(function (p) { return p.marca; }))));
    marcas.forEach(function (m, i) {
      const b = document.createElement("button");
      b.className = "chip" + (i === 0 ? " ativo" : "");
      b.textContent = m;
      b.addEventListener("click", function () {
        filtros.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("ativo"); });
        b.classList.add("ativo"); render(m);
      });
      filtros.appendChild(b);
    });
  }

  montarFiltros();
  render("Todos");
})();
