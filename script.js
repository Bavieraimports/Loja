const telefone = "5547999123456"; // número correto (Brasil)

const cards = document.querySelectorAll(".card");
const botao = document.getElementById("whats");

let modeloSelecionado = "";
let precoSelecionado = "";
let numeroSelecionado = 0;

cards.forEach((card, index) => {
  card.addEventListener("pointerdown", (e) => {
    e.preventDefault(); // evita clique fantasma no mobile

    const jaSelecionado = card.classList.contains("selecionado");

    // efeito de afundar
    card.classList.add("afundado");
    setTimeout(() => card.classList.remove("afundado"), 120);

    // limpa seleção
    cards.forEach(c => {
      c.classList.remove("selecionado");
      c.querySelector(".check").textContent = ""; // limpa número
    });

    if (jaSelecionado) {
      // desmarca
      modeloSelecionado = "";
      precoSelecionado = "";
      numeroSelecionado = 0;
    } else {
      // seleciona
      card.classList.add("selecionado");
      modeloSelecionado = card.dataset.modelo;
      precoSelecionado = card.dataset.preco;
      numeroSelecionado = index + 1;
      card.querySelector(".check").textContent = numeroSelecionado; // mostra número
    }
  });
});

// botão WhatsApp
botao.addEventListener("click", () => {
  if (!modeloSelecionado) {
    alert("Selecione um modelo primeiro");
    return;
  }

  const mensagem = `Olá! Tenho interesse no ${modeloSelecionado} pelo valor de ${precoSelecionado}.`;
  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
});
