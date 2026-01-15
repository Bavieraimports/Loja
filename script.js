const telefone = "5547992181482"; // WhatsApp correto

const cards = Array.from(document.querySelectorAll(".card"));
const botao = document.getElementById("whats");
const contador = document.getElementById("contador");
const catalogo = document.querySelector(".catalogo");

// ---------- ORDENA AUTOMATICAMENTE POR PREÇO ----------
cards
  .sort((a, b) => {
    const precoA = parseFloat(
      a.dataset.preco.replace("R$", "").replace(/\./g, "").replace(",", ".")
    );
    const precoB = parseFloat(
      b.dataset.preco.replace("R$", "").replace(/\./g, "").replace(",", ".")
    );
    return precoA - precoB;
  })
  .forEach(card => catalogo.appendChild(card));

// ---------- SELEÇÃO MÚLTIPLA ----------
let selecionados = new Set();

function toggleCard(card) {
  card.classList.add("afundado");
  setTimeout(() => card.classList.remove("afundado"), 120);

  if (card.classList.contains("selecionado")) {
    card.classList.remove("selecionado");
    selecionados.delete(card);
  } else {
    card.classList.add("selecionado");
    selecionados.add(card);
  }

  contador.textContent = selecionados.size > 0 ? selecionados.size : "";
}

cards.forEach(card => {
  card.addEventListener("pointerdown", e => {
    e.preventDefault();
    toggleCard(card);
  });
});

// ---------- BOTÃO WHATS ----------
botao.addEventListener("click", () => {
  if (selecionados.size === 0) {
    alert("Selecione pelo menos um modelo");
    return;
  }

  let mensagem = "Olá! Tenho interesse nos seguintes modelos:\n";
  selecionados.forEach(card => {
    mensagem += `- ${card.dataset.modelo} por ${card.dataset.preco}\n`;
  });

  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
});

// ---------- ANIMAÇÃO DE ENTRADA ----------
window.addEventListener("load", () => {
  document.querySelector(".topo")?.classList.add("mostrar");
  document.querySelector(".infos")?.classList.add("mostrar");
  document.querySelector("h2")?.classList.add("mostrar");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("mostrar");
    }, index * 120);
  });
});
