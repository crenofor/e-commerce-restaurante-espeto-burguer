# Espeto Burguer THE

Um site moderno e responsivo para exibição de uma hamburgueria, com cardápio, localização e integração direta com o WhatsApp para pedidos.

---

## Funcionalidades

* Página única com navegação por seções
* Cardápio com produtos e preços
* Integração com WhatsApp para pedidos
* Localização com Google Maps incorporado
* Layout moderno e responsivo
* Botão flutuante do WhatsApp
* Destaque de produtos (mais vendidos)

---

## Tecnologias utilizadas

* HTML5
* CSS3 (Flexbox + Grid)
* JavaScript
* Google Maps Embed
* WhatsApp API (wa.me)

---

## Estrutura do projeto

```
restaurante-site/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── logo.png
    └── whatsapp.png
```

---

## Como usar

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Acesse a pasta:

```
cd restaurante-site
```

3. Abra o arquivo:

```
index.html
```

---

## Configuração do WhatsApp

No arquivo `script.js`, altere o número:

```javascript
const numero = "5586999999999";
```

Formato correto:

* Código do país (55)
* DDD
* Número

Exemplo:

```
5586988887777
```

---

## Configuração da localização

Substitua no HTML:

```html
src="https://www.google.com/maps?q=Teresina%20PI&output=embed"
```

Você pode pegar o link em:

* Google Maps → Compartilhar → Incorporar mapa

---

## Personalização

Você pode alterar facilmente:

* Cores → `style.css`
* Produtos → seção de cardápio no HTML
* Imagens → pasta `img`
* Textos → diretamente no HTML

---

## 👨‍💻 Autor

@GRUPO DE SISTEMAS PARA INTERNET - UNICET
