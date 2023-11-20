<h3 align="center">
  PROJETO 100% ORIGINAL
</h3>
<br>

# Market App

Este é um aplicativo de mercado simples construído com Node.js, Express e MongoDB para gerenciar produtos. 

## Funcionalidades

- Exibe uma interface web para adicionar, visualizar, atualizar e excluir produtos do mercado.
- Os produtos são exibidos em uma lista com detalhes como nome, preço e quantidade.
- Permite a edição e exclusão de produtos existentes.

## Instalação

Certifique-se de ter o Node.js e o MongoDB instalados na sua máquina.

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Instale as dependências:

```bash
cd nome-do-repositorio
npm install
```

3. Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais do MongoDB:

```env
CONNECTIONSTRING=SUA_CONEXAO_DO_MONGODB
```

## Uso

1. Inicie o servidor:

```bash
node app.js
```

2. Acesse o aplicativo no navegador em [http://localhost:3000/home](http://localhost:3000/home)

## Estrutura do Projeto

- **app.js:** Arquivo principal do servidor Express.
- **Models/productSchema.js:** Define o esquema do produto no MongoDB.
- **Routes/indexRoute.js:** Rotas para o aplicativo.
- **views/index.ejs:** Página principal que exibe e interage com os produtos.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB (Mongoose)
- Json Web Token
- HTML/EJS
- CSS

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request para melhorias, correções de bugs ou novas funcionalidades.

## Autor

Eliezer - [GitHub](https://github.com/SmallCityProgrammer)

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
