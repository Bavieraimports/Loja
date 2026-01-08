const telefone = "5547999123456"; // número correto (Brasil)
const cards = document.querySelectorAll(".card");
const botao = document.getElementById("whats");
const contador = document.getElementById("contador");

let selecionados = new Set();

cards.forEach(card => {
  card.addEventListener("pointerdown", (e) => {
    e.preventDefault();

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
  });
});

// botão WhatsApp
botao.addEventListener("click", () => {
  if (selecionados.size === 0) {
    alert("Selecione pelo menos um modelo");
    return;
  }

  // gera mensagem com todos os selecionados
  let mensagem = "Olá! Tenho interesse nos seguintes modelos:\n";
  selecionados.forEach(card => {
    mensagem += `- ${card.dataset.modelo} pelo valor de ${card.dataset.preco}\n`;
  });

  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
});
