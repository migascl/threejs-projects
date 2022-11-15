## Trabalho 1

---

### Módulo 1

*   Desenvolver objeto em JavaScript para modelação de uma caixa (a caixa é aberta na parte de cima, como ilustrado na figura ao lado). A construção do objeto (construtor da classe Caixa) deverá ter como parâmetros de entrada as suas dimensões em mm (altura, largura, profundidade), assim com a espessura de cada face da caixa também em mm (a espessura é a mesma em todas as faces da caixa).
*   Desenvolver “consola visual”.
*   Adicionar botão “Limpar écran” à “consola visual”, que, quando ativado, origina a limpeza da “área de rendering”.
*   Adicionar botão “Vêr caixa” à “consola visual”, que, quando ativado, origina a visualização de uma caixa na “área de rendering”.

![](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/f2878b5a062eb0a4c12c785fca48989114aa8d5defcf2e79.png)

---

### Módulo 2

*   Adicionar botão “Câmara em perspetiva” à “consola visual”, que, quando ativado, origina a ativação de uma Câmera em perspetiva.
*   Adicionar botão “Câmara ortográfica” à “consola visual”, que, quando ativado, origina a ativação de uma Câmera ortográfica.
*   Adicionar interatividade com o utilizador à “área de rendering”, através dos objetos THREE.TrackballControls, THREE.OrbitControls, FirstPersonControls e FlyControls. Ativar cada um destes controlos a partir da “consola visual”.
*   Desenvolver objeto em JavaScript para modelação de uma estante de armazenagem de um conjunto de caixas conforme ilustração em baixo. A estante tem três andares e cada andar tem duas caixas (atenção, os andares tem inclinação, sendo a inclinação do andar de cima diferente da inclinação dos andares de baixo). A construção do objeto estante (construtor da classe Estante) deverá ter como parâmetros a dimensão da estante em mm (altura, largura, profundidade) e a dimensão das caixas que aí podem ser colocadas também em mm (altura, largura, profundidade). Modelar espaço vazio para uma caixa adicional em cada andar (conforme ilustrado na figura). A parte da frente da estante é a do lado esquerdo (conforme ilustrado na figura). As caixas devem ser representadas pelo objeto Caixa desenvolvido no módulo anterior. Na modelação da estrutura da estante, represente pelo menos a superfície de cada andar (também poderá modelar os apoios verticais e laterais da estante).
*   Adicionar botão “Vêr estante” à “consola visual”, que, quando ativado, origina a visualização de uma estante.

A imagem abaixo representa a estante a modelar (três andares, duas caixas em cada andar, espaço vazio para caixa adicional)

![](file:///C:/Users/migue/AppData/Roaming/marktext/images/2022-11-15-11-47-10-image.png)

A próxima figura identifica uma estante utilizada na industria automóvel. Repare nas caixas e na inclinação dos andares da estante. Cada caixa contém peças que são utilizadas para comporem um kit que é enviado para a linha de montagem dos carros.

![](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/2260f739640a07e23153a1772ebf2f0ef47e18fbc6bca86c.jpg)

---

### Modulo 3

*   Desenvolver objeto em JavaScript para modelação de um armazém. O armazém é constituído por três estantes, encostadas lado a lado, mas com a parte da frente para o mesmo sítio. Na modelação do armazém utilize o objeto Estante desenvolvido no módulo anterior.
*   Adicionar botão “Vêr armazém” à “consola visual”, que, quando ativado, origina a visualização do armazém.

---

### Modulo 4

*   Adicionar luz ambiente à visualização do armazém.
*   Adicionar focos de luz à visualização do armazém. Colocar os focos no teto do armazém, um foco mais ou menos em cima de cada estante.~

---

### Modulo 5

*   Desenvolver objeto em JavaScript para modelação de um robot. Modele o robot com uma caixa fechada (para representar a parte principal do robot), quatro esferas (para representar cada uma das rodas do robot), e dois tubos interligados (para representar o braço do robot).
*   Adicionar botão “Vêr robot” à “consola visual”, que, quando ativado, origina a visualização do robot em frente a uma das estantes do armazém (robot posicionado no lado esquerdo da estante, conforme figura anterior).
*   Adicionar botão “Ativar robot” à “consola visual” que, quando ativado, coloca o robot em movimentação “vai-vém” ao longo da zona da frente das estantes que constituem o armazém (lado esquerdo das estantes).