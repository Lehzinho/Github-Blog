# 🚀 GitHub Blog  

Bem-vindo(a) ao **GitHub Blog**, um projeto desenvolvido no **Ignite - Trilha ReactJS** da **Rocketseat**! Neste desafio, criamos um blog dinâmico utilizando a **API do GitHub** para listar e exibir issues como publicações.  

---

## 📝 **Sobre o Projeto**  

O **GitHub Blog** permite:  

✔️ Exibir um perfil do GitHub com nome, bio, seguidores e outras informações.  
✔️ Listar e buscar issues de um repositório para exibir como posts.  
✔️ Criar uma página para exibir o conteúdo completo de uma issue como um artigo.  


## 🛠 **Tecnologias Utilizadas**  

Este projeto foi desenvolvido utilizando as seguintes tecnologias:  

- **React**  
- **TypeScript**  
- **Vite**  
- **Axios** (para requisições HTTP)  
- **Styled-Components** (para estilização)  
- **Redux** (gerenciamento de estado)  
- **React Hook Form** + **Zod** (validação de formulários)  
- **React Router DOM** (roteamento)  
- **React Markdown** (para renderizar Markdown das issues)  
- **Jest & React Testing Library** (para testes)  

---

## 🔗 **APIs Utilizadas**  

Para obter os dados, utilizamos as APIs públicas do **GitHub**:  

🔹 **[GitHub Users API](https://docs.github.com/pt/rest/users/users#get-a-user)** → Para buscar os dados do usuário.  
🔹 **[GitHub Search API](https://docs.github.com/pt/rest/search)** → Para buscar issues do repositório.  
🔹 **[GitHub Issues API](https://docs.github.com/pt/rest/issues/issues#get-an-issue)** → Para exibir o conteúdo completo de uma issue.  

---

## 🚀 **Como Executar o Projeto**  

### **1️⃣ Clone o repositório**  
```bash
git clone https://github.com/seu-usuario/github-blog.git
cd github-blog
```

### **2️⃣ Instale as dependências**  
```bash
npm install
# ou
yarn install
```

### **3️⃣ Execute o projeto**  
```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em:  
🔗 **http://localhost:5173**  

---

## 📚 **Funcionalidades Implementadas**  

✅ Exibição dinâmica do perfil do GitHub.  
✅ Listagem de issues do repositório como posts.  
✅ Busca eficiente de publicações.  
✅ Exibição do conteúdo completo de cada issue.  
✅ Conversão do Markdown das issues para HTML.  

---

## 🔥 **Dicas Extras**  

✅ Utilize **React Router DOM** para rotas dinâmicas, recebendo o `number` da issue como parâmetro.  
✅ Para exibir o Markdown corretamente, utilize a biblioteca **React Markdown**.  
✅ Caso precise, você pode melhorar a usabilidade e personalização do layout com **Styled Components**.  


---

## 📜 **Licença**  

Este projeto foi desenvolvido como parte do **Ignite - Rocketseat**.  

💜 Feito com muito aprendizado e código por [Alexandre Toulios](https://github.com/Lehzinho).  
