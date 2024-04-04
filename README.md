# HyperMarket

## 📕 Sobre o projeto

Um projeto simples utilizando Next.js 14, retratando a entidade de um supermercado. O estoque do supermercado começa com 10 produtos cadastrados. Cada produto tem 3 propriedades. nome, preço e quantidade.

### 🔖 Abaixo temos algumas funções presentes na aplicação.

<ul>
<li>O operador de caixa é capaz de cadastrar produtos no estoque do supermercado. 🛒</li>
<li>O operador de caixa é capaz de inserir vários produtos dentro do carrinho do cliente. 🛒</li>
<li>O projeto conta com um algoritmo que retornará o troco do cliente com a menor quantidade de cédulas e moedas brasileiras. 💵</li>
<li>A soma do valor de todos os produtos dentro do carrinho. ➕</li>
<li>O calculo de impostos sobre o produto de um mercado. Tais como ICMS, ISS, PIS e COFINS. 💸</li>
</ul>

<hr>


### 🔖 Principais funções.

<uL>
<li><b>FormatCoin ( valor: number, coinType: string)</b> --> Recebe como paramento um valor númerico e o tipo da moeda. Retorna um valor monetário.</li>  <br/>
<li><b>SplitNumber ( valor: number)</b> --> Espera receber um valor númerico em seguida Realiza a separação  deste número que possua casas decimais. Retorna uma lista de dois números, inteiro e números decimais/flutuantes.</li><br/>
<li><b>CalculateImpost ( valor: number)</b> --> Espera receber um valor númerico e retornará o valor do calculo dos seguintes impostos ICMS, ISS, PIS e CONFINS sobre um produto.</li><br/>
<li><b>CalculateTotalPrice ( ListaDeProdutos: ProductProps[] )</b> --> A função espera receber uma lista de produtos. Será utilizado a função Array.reduce para somar o resto da multiplição valor do produto X quantidade.</li>
</ul>

<hr>

### 🗂️ Distribuição de pastas.

<p>As pastas do projeto se encontram todas dentro da pasta principal <b>src</b>.</p>

`src`
<ul>
<li>📁 app --> Páginas da aplicação</li>
<li>
📁 Shared
<ul>
    <li>📁 actions -> Ações do lado do "servidor".</li>        
    <li>📁 components --> Todos os componentes da aplicação.</li>        
    <li>📁 contexts --> Contexto da aplicação.</li>        
    <li>📁 providers --> Provedor Geral da aplicação.</li>        
    <li>📁 lib --> Lista de produtos do mercado e Algoritmo de notas.</li>
    <li>📁 utils --> Funções úteis durante a aplicação.</li>
</ul>
</li>
<li>📁 styles --> Estilos gerais da aplicação.</li>
<li>📁 types --> Type utilizado na aplicação.</li>
</ul>


<hr>

#### 📖 Adendos

Todo o conteudo do carrinho foi criado utilizando a API Context do React e distribuido o acesso ao carrinho por toda a aplicação.<br/>

Todas as funcões da aplicação constam com comentários para mais detalhes.

Atualmente a aplicação não consta com um banco de dados. Mas, na proxima versão terá o registro de Usuario e seu perfil de acesso. Como a persistencia dos produtos e usuario no banco de dados.

<hr>


#### Dependências

<ul>
<li>Node -version: 18.18.0</li>
<li>Next.js -version: 14.1.4</li>
<li>React.js -version: ^18</li>
<li>ReactIcons -version: ^5.0.1</li>
<li>Styled-Component -version: ^6.1.8</li>
<li>TypeScript -version: ^5</li>
<li>Eslint -version: ^8</li> 
</ul>
<hr>

<br>


Este é um projeto [`Next.js`](https://nextjs.org/) inicializado com [´create-next-app´](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


# Inicializando a aplicação.

Primerio é necessario iniciar a aplicação.

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```


Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.