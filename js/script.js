function abrirWhatsApp() {
  const numero = "5586999999999";
  const mensagem = "Olá, gostaria de fazer um pedido!";
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
}

function pedir(item) {
  const numero = "5586999999999";
  const mensagem = `Olá, gostaria de pedir: ${item}`;
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
}

function abrirMapa() {
  window.open("https://www.google.com/maps/search/?api=1&query=Teresina+PI", "_blank");
}

function abrirInstagram() {
  window.open("https://www.instagram.com/", "_blank");
}