const telefone = "5547999123456"; // número do WhatsApp
const cards = document.querySelectorAll(".card");
const botao = document.getElementById("whats");
const contador = document.getElementById("contador");

// Conjunto de cards selecionados
let selecionados = new Set();

// Função que alterna a seleção de um card
function toggleCard(card) {
  // efeito de afundar
  card.classList.add("afundado");
  setTimeout(() => card.classList.remove("afundado"), 120);

  // alterna seleção
  if (card.classList.contains("selecionado")) {
    card.classList.remove("selecionado");
    selecionados.delete(card);
  } else {
    card.classList.add("selecionado");
    selecionados.add(card);
  }

  // atualiza contador do lado do botão
  contador.textContent = selecionados.size > 0 ? selecionados.size : "";
}

// Adiciona evento pointerdown (compatível PC, Android e iOS)
cards.forEach(card => {
  card.addEventListener("pointerdown", (e) => {
    e.preventDefault(); // evita clique fantasma no mobile
    toggleCard(card);
  });
});

// Evento do botão WhatsApp
botao.addEventListener("click", () => {
  if (selecionados.size === 0) {
    alert("Selecione pelo menos um modelo");
    return;
  }

  // Gera a mensagem com todos os selecionados
  let mensagem = "Olá! Tenho interesse nos seguintes modelos:\n";
  selecionados.forEach(card => {
    mensagem += `- ${card.dataset.modelo} pelo valor de ${card.dataset.preco}\n`;
  });

  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
});

// Animação de entrada ao carregar a página
window.addEventListener("load", () => {
  document.querySelector('.topo').classList.add('mostrar');
  document.querySelector('.infos').classList.add('mostrar');
  document.querySelector('h2').classList.add('mostrar');

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('mostrar');
    }, index * 150); // efeito cascata
  });
});
