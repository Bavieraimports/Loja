const numero = "55479965444445";

const iphones = [
  { modelo: "iPhone 12", memoria: "64GB", cor: "Preto", bateria: "75%", preco: "R$ 1.550" },
  { modelo: "iPhone 13", memoria: "128GB", cor: "Preto", bateria: "85%", preco: "R$ 2.299" },
  { modelo: "iPhone 14", memoria: "128GB", cor: "Preto", bateria: "100%", preco: "R$ 2.499" },
];

const lista = document.getElementById("lista");
const btn = document.getElementById("btnWhatsapp");

iphones.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="radio"></div>
    <div class="details">
      <h3>${item.modelo}</h3>
      <span>${item.memoria} • ${item.cor} • Bateria ${item.bateria}</span>
    </div>
    <div class="price">${item.preco}</div>
  `;

  card.onclick = () => {
    document.querySelectorAll(".card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");

    const msg = encodeURIComponent(
      `Olá! Tenho interesse no ${item.modelo} ${item.memoria} (${item.cor}) da Baviera Imports.`
    );

    btn.href = `https://wa.me/${numero}?text=${msg}`;
    btn.style.display = "flex";
  };

  lista.appendChild(card);
});
