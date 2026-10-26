---
title: Painel RegeneraRS — transversal e eixos
style: painel.css
toc: false
---

```js
import {cabecalho, rodape} from "./components/cabecalho.js";
import {valorizacoes} from "./components/valorizacoes.js";
import {pessoas} from "./components/pessoas.js";
import {eixos} from "./components/eixos.js";
const dados = FileAttachment("data/painel.json").json();
```

```js
display(cabecalho(dados));
```

<div id="valorizacoes" class="ancora"></div>

```js
display(valorizacoes(dados));
```

<div id="pessoas" class="ancora"></div>

```js
display(pessoas(dados));
```

<div id="eixos" class="ancora"></div>

```js
display(eixos(dados));
```

```js
display(rodape(dados));
```
