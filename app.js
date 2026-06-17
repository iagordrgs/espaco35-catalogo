// ============================================================
//  ESPAÇO 35 — BOUTIQUE (lógica)
//  Produtos -> produtos.js   |   textos/whatsapp -> config.js
// ============================================================
(function () {
  const grade = document.getElementById("grade");
  const filtros = document.getElementById("filtros");
  const vazio = document.getElementById("vazio");

  function reais(v){ return "R$ " + Number(v).toFixed(2).replace(".", ","); }
  function linkWhats(num, msg){ return "https://wa.me/" + num + "?text=" + encodeURIComponent(msg); }
  function imagensDe(p){ return (p.imagens && p.imagens.length) ? p.imagens : (p.imagem ? [p.imagem] : []); }
  function tipoDe(p){
    const m = (p.modelo || "").toLowerCase();
    if (/tênis|tenis/.test(m)) return "Tênis";
    if (/rasteira/.test(m)) return "Rasteiras";
    if (/scarpin|sapatilha|mocassim|slingback/.test(m)) return "Sapatos";
    return "Sandálias";
  }

  // ---- config / links ----
  const waGeral = linkWhats(CONFIG.whatsapp, CONFIG.mensagemGeral);
  ["topoWa","heroWa","rodWa","whatsFloat"].forEach(function(id){ const e=document.getElementById(id); if(e) e.href=waGeral; });
  document.getElementById("rodCidade").textContent = CONFIG.cidade;
  const ig = document.getElementById("rodIg");
  ig.href = "https://instagram.com/" + CONFIG.instagram; ig.textContent = "@" + CONFIG.instagram;
  document.getElementById("ano").textContent = new Date().getFullYear();

  // ---- header sólido no scroll ----
  const topo = document.getElementById("topo");
  function onScroll(){ topo.classList.toggle("solid", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll); onScroll();

  // ---- menu mobile ----
  const nav = document.getElementById("nav");
  document.getElementById("menuBtn").addEventListener("click", function(){ nav.classList.toggle("aberto"); });
  nav.querySelectorAll("a").forEach(function(a){ a.addEventListener("click", function(){ nav.classList.remove("aberto"); }); });

  // ---- Instagram grid ----
  var igImgs = [16,32,45,47,63,55];
  var igGrid = document.getElementById("igGrid");
  igImgs.forEach(function(n){
    var a = document.createElement("a");
    a.href = "https://instagram.com/" + CONFIG.instagram; a.target="_blank"; a.rel="noopener";
    a.innerHTML = '<img loading="lazy" src="imagens/espaco35-' + String(n).padStart(2,"0") + '.jpg" alt="Espaço 35 no Instagram">';
    igGrid.appendChild(a);
  });

  // ---- Lightbox ----
  const lb = document.createElement("div");
  lb.className = "lightbox"; lb.hidden = true;
  lb.innerHTML = '<button class="lb-fechar" aria-label="Fechar">&times;</button>'
    + '<button class="lb-seta lb-prev" aria-label="Anterior">&#8249;</button>'
    + '<img class="lb-img" alt="" />'
    + '<button class="lb-seta lb-next" aria-label="Próxima">&#8250;</button>'
    + '<span class="lb-contador"></span>';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector(".lb-img"), lbCont = lb.querySelector(".lb-contador");
  let lbList = [], lbIdx = 0;
  function lbShow(i){ lbIdx=(i+lbList.length)%lbList.length; lbImg.src="imagens/"+lbList[lbIdx];
    lbCont.textContent=(lbIdx+1)+"/"+lbList.length;
    lb.querySelectorAll(".lb-seta").forEach(function(b){ b.hidden=lbList.length<2; }); lbCont.hidden=lbList.length<2; }
  function abrir(lista,i){ lbList=lista; lb.hidden=false; lbShow(i); }
  function fechar(){ lb.hidden=true; }
  lb.querySelector(".lb-fechar").onclick=fechar;
  lb.addEventListener("click", function(e){ if(e.target===lb) fechar(); });
  lb.querySelector(".lb-prev").onclick=function(){ lbShow(lbIdx-1); };
  lb.querySelector(".lb-next").onclick=function(){ lbShow(lbIdx+1); };
  document.addEventListener("keydown", function(e){ if(lb.hidden) return;
    if(e.key==="Escape") fechar(); if(e.key==="ArrowLeft") lbShow(lbIdx-1); if(e.key==="ArrowRight") lbShow(lbIdx+1); });

  function placeholderFoto(){ return '<div class="foto-vazia"><span>🤍</span>foto em breve</div>'; }
  function selos(foto, prod){
    foto.querySelectorAll(".selo,.selo-esgotado").forEach(function(e){ e.remove(); });
    if(!prod.disponivel){ var s=document.createElement("div"); s.className="selo-esgotado"; s.textContent="Esgotado"; foto.appendChild(s); }
    else if(prod.destaque){ var s2=document.createElement("div"); s2.className="selo"; s2.textContent="Últimas unidades"; foto.appendChild(s2); }
  }

  function criarCard(prod){
    const card=document.createElement("article");
    card.className="card"+(prod.disponivel?"":" esgotado");
    const foto=document.createElement("div"); foto.className="card-foto";
    const imgs=imagensDe(prod); let idx=0;
    if(imgs.length){
      const imgEl=document.createElement("img");
      imgEl.src="imagens/"+imgs[0]; imgEl.alt=prod.marca+" "+prod.modelo+" tamanho 35"; imgEl.loading="lazy";
      imgEl.onerror=function(){ foto.innerHTML=placeholderFoto(); selos(foto,prod); };
      imgEl.addEventListener("click", function(){ abrir(imgs, idx); });
      foto.appendChild(imgEl);
      // favorito
      const fav=document.createElement("button"); fav.className="fav"; fav.innerHTML="♡"; fav.setAttribute("aria-label","Favoritar");
      fav.onclick=function(e){ e.stopPropagation(); fav.classList.toggle("ativo"); fav.innerHTML=fav.classList.contains("ativo")?"♥":"♡"; };
      foto.appendChild(fav);
      if(imgs.length>1){
        foto.classList.add("tem-carrossel");
        function mostrar(i){ idx=(i+imgs.length)%imgs.length; imgEl.src="imagens/"+imgs[idx]; pintar(); }
        const prev=document.createElement("button"); prev.className="card-seta card-prev"; prev.innerHTML="&#8249;";
        prev.onclick=function(e){ e.stopPropagation(); mostrar(idx-1); };
        const next=document.createElement("button"); next.className="card-seta card-next"; next.innerHTML="&#8250;";
        next.onclick=function(e){ e.stopPropagation(); mostrar(idx+1); };
        const pontos=document.createElement("div"); pontos.className="card-pontos";
        imgs.forEach(function(_,i){ var d=document.createElement("span"); if(i===0) d.className="ativo"; pontos.appendChild(d); });
        function pintar(){ pontos.querySelectorAll("span").forEach(function(s,i){ s.className=i===idx?"ativo":""; }); }
        foto.appendChild(prev); foto.appendChild(next); foto.appendChild(pontos);
        const tag=document.createElement("span"); tag.className="card-multi"; tag.textContent=imgs.length+" fotos"; foto.appendChild(tag);
      }
    } else { foto.innerHTML=placeholderFoto(); }
    selos(foto,prod);

    const corpo=document.createElement("div"); corpo.className="card-corpo";
    let precos;
    if(prod.preco==null||prod.preco===""){ precos='<span class="preco preco-consulta">Sob consulta</span>'; }
    else { precos='<span class="preco">'+reais(prod.preco)+"</span>"; if(prod.precoDe) precos='<span class="preco-de">'+reais(prod.precoDe)+"</span>"+precos; }
    let botao;
    if(prod.disponivel){ var msg=CONFIG.mensagemWhatsapp.replace("{marca}",prod.marca).replace("{modelo}",prod.modelo);
      botao='<a class="btn-whats" target="_blank" rel="noopener" href="'+linkWhats(CONFIG.whatsapp,msg)+'">Quero esse</a>'; }
    else { botao='<span class="btn-whats desativado">Esgotado</span>'; }
    corpo.innerHTML='<span class="card-marca">'+prod.marca+"</span>"
      +'<h2 class="card-modelo">'+prod.modelo+"</h2>"
      +'<span class="card-tam">Tamanho 35 · original e novo</span>'
      +'<div class="precos">'+precos+"</div>"+botao;
    card.appendChild(foto); card.appendChild(corpo);
    return card;
  }

  function render(tipoSel){
    grade.innerHTML="";
    const lista = (tipoSel==="Tudo") ? PRODUTOS : PRODUTOS.filter(function(p){ return tipoDe(p)===tipoSel; });
    lista.slice().sort(function(a,b){ return (b.disponivel-a.disponivel); }).forEach(function(p){ grade.appendChild(criarCard(p)); });
    vazio.hidden = lista.length>0;
  }
  function setFiltro(tipo){
    filtros.querySelectorAll(".chip").forEach(function(c){ c.classList.toggle("ativo", c.dataset.tipo===tipo); });
    render(tipo);
  }
  function montarFiltros(){
    ["Tudo","Sandálias","Rasteiras","Tênis","Sapatos"].forEach(function(t,i){
      var b=document.createElement("button"); b.className="chip"+(i===0?" ativo":""); b.textContent=t; b.dataset.tipo=t;
      b.addEventListener("click", function(){ setFiltro(t); });
      filtros.appendChild(b);
    });
  }

  // categorias e rodapé filtram a coleção
  document.querySelectorAll("[data-tipo]").forEach(function(el){
    if(el.classList.contains("chip")) return;
    el.addEventListener("click", function(){ setFiltro(el.dataset.tipo);
      document.getElementById("colecao").scrollIntoView({behavior:"smooth"}); });
  });

  montarFiltros();
  render("Tudo");
})();
