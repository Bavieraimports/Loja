const telefone = "5547999123456"; // número certo

const cards = document.querySelectorAll(".card");
const radios = document.querySelectorAll('input[name="produto"]');
const btn = document.getElementById("btnWhats");

let modelo = "";
let preco = "";

cards.forEach(card => {
  card.addEventListener("click", () => {
    // limpa seleção
    cards.forEach(c => c.classList.remove("selecionado"));

    // marca atual
    card.classList.add("selecionado");

    const radio = card.querySelector("input");
    radio.checked = true;

    modelo = radio.dataset.modelo;
    preco = radio.dataset.preco;

    btn.disabled = false;
  });
});

btn.addEventListener("click", () => {
  const msg = `Olá! Tenho interesse no ${modelo} pelo valor de ${preco}.`;
  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(msg)}`;
  window.open(link, "_blank");
});
