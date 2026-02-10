* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
  background: #f4f4f6;
  color: #111;
  padding-bottom: 100px;
}

.topo {
  text-align: center;
  padding: 25px 15px;
}

.topo h1 {
  font-size: 26px;
}

.topo p {
  color: #666;
  margin-top: 6px;
}

.infos {
  display: flex;
  justify-content: space-around;
  padding: 15px;
  font-size: 14px;
}

h2 {
  padding: 15px;
  font-size: 20px;
}

.catalogo {
  padding: 10px 15px;
  display: grid;
  gap: 15px;
}

.card {
  background: #fff;
  border-radius: 18px;
  padding: 15px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
  cursor: pointer;
  transition: transform .2s, box-shadow .2s;
}

.card:hover {
  transform: translateY(-3px);
}

.card.selecionado {
  outline: 3px solid #000;
}

.card h3 {
  font-size: 18px;
}

.card p {
  color: #555;
  margin: 4px 0;
}

.card strong {
  font-size: 18px;
  display: block;
  margin-top: 8px;
}

/* FEEDBACKS */
.feedbacks {
  padding: 20px 15px;
}

.feedback-lista {
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.feedback-lista::-webkit-scrollbar {
  display: none;
}

.feedback-card {
  min-width: 260px;
  background: #fff;
  border-radius: 18px;
  padding: 8px;
  box-shadow: 0 8px 18px rgba(0,0,0,0.15);
}

.feedback-card img {
  width: 100%;
  border-radius: 14px;
  display: block;
}

/* BOTÃO */
#whats {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: #fff;
  border: none;
  padding: 16px 22px;
  border-radius: 40px;
  font-size: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

#contador {
  margin-left: 8px;
  font-weight: bold;
}
