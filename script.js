const telefone = "5547999123456"; // número correto

const cards = document.querySelectorAll(".card");
const botao = document.getElementById("whats");

let modeloSelecionado = "";
let precoSelecionado = "";

// efeito + seleção
cards.forEach(card => {

  // MOBILE: afundar
  card.addEventListener("touchstart", () => {
    card.classList.add("afundado");
  }, { passive: true });

  card.addEventListener("touchend", () => {
    card.classList.remove("afundado");
  });

  card.addEventListener("touchcancel", () => {
    card.classList.remove("afundado");
  });

  // seleção
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("selecionado"));
    card.classList.add("selecionado");

    modeloSelecionado = card.dataset.modelo;
    precoSelecionado = card.dataset.preco;
  });
});

// WhatsApp
botao.addEventListener("click", () => {
  if (!modeloSelecionado) {
    alert("Selecione um modelo primeiro");
    return;
  }

  const mensagem = `Olá! Tenho interesse no ${modeloSelecionado} pelo valor de ${precoSelecionado}.`;
  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
});
