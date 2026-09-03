# 🍔 Brasa Burger

Landing page responsiva para uma hamburgueria artesanal, desenvolvida com **HTML5, CSS3 e JavaScript**.

O projeto foi criado com foco em **design, experiência do usuário e conversão**, apresentando a marca, seus principais produtos e direcionando o visitante para pedidos através do WhatsApp.

> **Projeto conceitual desenvolvido para estudo e portfólio.**

---

## 📸 Preview

![Brasa Burger Preview](img/preview.png)

---

## 🌐 Projeto

🔗 **[Acessar o projeto](#)**

[https://alderlancorrea.github.io/Brasa-Burger/]

---

## 📸 Sobre o projeto

O **Brasa Burger** simula a presença digital de uma hamburgueria artesanal.

A proposta foi desenvolver uma landing page com identidade visual própria, apresentação dos produtos e uma jornada simples para o usuário:

**Conhecer → Explorar → Confiar → Pedir**

A página foi pensada principalmente para usuários que acessam pelo celular e chegam através de redes sociais.

---

## 🎯 Objetivos

- Criar uma presença digital para um negócio local;
- Apresentar os principais produtos da hamburgueria;
- Destacar a identidade da marca;
- Facilitar o contato com o cliente;
- Direcionar pedidos para o WhatsApp;
- Criar uma experiência agradável em diferentes dispositivos;
- Praticar desenvolvimento Front-end com tecnologias nativas.

---

## ✨ Funcionalidades

- 🍔 Seção de cardápio com produtos, preços e descrições
- 📲 Botões de pedido direcionados ao WhatsApp
- 💬 Geração do link de WhatsApp através de JavaScript
- ⭐ Seção de avaliações
- 🔥 Seção de diferenciais da marca
- 📍 Informações de atendimento e delivery
- 📱 Layout responsivo
- ✨ Animações de entrada durante a navegação
- 🔗 Botão flutuante do WhatsApp
- 🖼️ Imagens otimizadas em formato AVIF
- 🎨 Identidade visual personalizada
- 🔎 Meta tags básicas para SEO e compartilhamento

---

## 🧭 Estrutura da página

A landing page foi organizada seguindo uma jornada de conversão:

```text
Hero
  ↓
A casa
  ↓
Cardápio
  ↓
Diferenciais
  ↓
Avaliações
  ↓
Contato
  ↓
Pedido pelo WhatsApp
```

### Hero

Apresentação principal da marca com chamada para ação e destaque visual do produto.

### A casa

Apresentação da história e da proposta da Brasa Burger.

### Cardápio

Exibição dos principais hambúrgueres, ingredientes, preços e opções para realizar o pedido.

### Diferenciais

Apresentação dos pontos que destacam a experiência da hamburgueria.

### Avaliações

Depoimentos utilizados como elemento de prova social.

### Contato

Horário de atendimento, informações sobre delivery e chamada para pedido.

---

## 🎨 Design

A interface utiliza uma identidade visual **escura, moderna e sofisticada**, criada para combinar com a proposta da marca.

### Características visuais

- Fundo escuro;
- Laranja como cor de destaque;
- Tipografia `Oswald` para títulos;
- Tipografia `DM Sans` para textos;
- Fotografias dos produtos como elementos principais;
- Alto contraste;
- CTAs destacados;
- Animações sutis.

A identidade foi pensada para transmitir uma sensação de **produto artesanal, intenso e premium**.

---

## 📱 Responsividade

O layout foi desenvolvido para se adaptar a diferentes tamanhos de tela.

A interface utiliza **CSS Grid, Flexbox, Media Queries e tipografia responsiva com `clamp()`** para reorganizar o conteúdo conforme o dispositivo.

O projeto possui ajustes específicos para diferentes larguras de tela, incluindo dispositivos móveis.

---

## ⚡ Performance

Foram aplicadas algumas técnicas simples para melhorar o carregamento da página:

- Imagens em formato **AVIF**;
- `loading="lazy"` para imagens fora do primeiro viewport;
- `preload` para a imagem principal do Hero;
- `fetchpriority="high"` na imagem principal;
- `preconnect` para carregamento das fontes;
- JavaScript sem bibliotecas externas;
- Uso de APIs nativas do navegador.

---

## ♿ Acessibilidade

Foram utilizados recursos básicos de acessibilidade, incluindo:

- HTML semântico;
- `lang="pt-BR"`;
- textos alternativos nas imagens;
- `aria-label` no botão flutuante do WhatsApp;
- navegação principal identificada com `aria-label`;
- hierarquia de títulos;
- elementos interativos utilizando links.

---

## 🔎 SEO e compartilhamento

A página possui uma estrutura inicial de SEO e compartilhamento social, incluindo:

- `<title>` personalizado;
- `meta description`;
- `lang="pt-BR"`;
- Open Graph;
- título e descrição para compartilhamento;
- imagem definida para compartilhamento;
- estrutura semântica de conteúdo.

---

## 🛠️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estrutura e semântica |
| CSS3 | Layout, responsividade, animações e identidade visual |
| JavaScript | Interações, WhatsApp e animações |
| Google Fonts | Tipografia |
| AVIF | Otimização das imagens |

---

## 📁 Estrutura do projeto

```text
Brasa-Burger/
│
├── img/
│   ├── favicon-32x32.png
│   ├── hamburger classic.avif
│   ├── hamburger bacon.avif
│   ├── hamburger fire.avif
│   ├── hamburger tradicional.avif
│   └── ...
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Como executar

Clone o repositório:

```bash
git clone https://github.com/AlderlanCorrea/Brasa-Burger.git
```

Entre na pasta:

```bash
cd Brasa-Burger
```

Depois, abra o arquivo `index.html` no navegador.

Durante o desenvolvimento, também é possível utilizar a extensão **Live Server** no Visual Studio Code.

---

## 📲 Integração com WhatsApp

Os botões de pedido utilizam o atributo `data-whatsapp` para identificar os elementos que devem receber o link de atendimento.

O JavaScript centraliza essa configuração, permitindo que diferentes CTAs da página utilizem o mesmo número e comportamento.

---

## 📚 Principais aprendizados

Este projeto permitiu praticar:

- HTML5 semântico;
- CSS Grid;
- Flexbox;
- Media Queries;
- Variáveis CSS;
- Tipografia responsiva com `clamp()`;
- Transições e animações;
- `IntersectionObserver`;
- Manipulação do DOM;
- Atributos `data-*`;
- Integração com WhatsApp;
- Otimização de imagens;
- Responsividade;
- Princípios de UI/UX;
- Design orientado à conversão;
- SEO básico.

---

## ⚠️ Projeto conceitual

O Brasa Burger é um projeto desenvolvido para **estudo e portfólio**.

Informações como produtos, preços, avaliações, horários, localização e contato são fictícias e utilizadas apenas para representar um cenário de negócio.

---

## 👨‍💻 Autor

**Alderlan Corrêa**

Estudante de Engenharia da Computação e desenvolvedor Front-end em formação.

> **Aprendendo, construindo e inovando.**

---

## 📄 Licença

Projeto desenvolvido para fins educacionais e de portfólio.
