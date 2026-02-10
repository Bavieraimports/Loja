const telefone = "5547992181482";
const cards = document.querySelectorAll(".card");
const botao = document.getElementById("whats");
const contador = document.getElementById("contador");

let selecionados = new Set();

function toggleCard(card) {
  if (card.classList.contains("selecionado")) {
    card.classList.remove("selecionado");
    selecionados.delete(card);
  } else {
    card.classList.add("selecionado");
    selecionados.add(card);
  }
  contador.textContent = selecionados.size || "";
}

cards.forEach(card => {
  card.addEventListener("pointerdown", e => {
    e.preventDefault();
    toggleCard(card);
  });
});

botao.addEventListener("click", () => {
  if (selecionados.size === 0) {
    alert("Selecione pelo menos um modelo");
    return;
  }

  let msg = "Olá! Tenho interesse nos seguintes modelos:\n";
  selecionados.forEach(card => {
    msg += - ${card.dataset.modelo} por ${card.dataset.preco}\n;
  });

  window.open(
    https://wa.me/${telefone}?text=${encodeURIComponent(msg)},
    "_blank"
  );
});

window.addEventListener("load", () => {
  document.querySelector(".topo").classList.add("mostrar");
  document.querySelector(".infos").classList.add("mostrar");
  document.querySelector("h2").classList.add("mostrar");
  document.querySelector(".prova-social").classList.add("mostrar");

  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add("mostrar"), i * 150);
  });
});
