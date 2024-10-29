# Inicializa um projeto Node.js

npm init -y

# Cria a pasta src

mkdir src

# Cria o arquivo inicial

echo 'console.log("hello world");' > src\dado.ts

# Instala as dependências

npm i typescript tsx tsup

# Cria o arquivo tsconfig

npx tsc --init

# Scripts padrões

"scripts": {
"dist": "tsup src",
"start:dev": "tsx src/index.ts",
"start:watch": "tsx watch src/index.ts",
"start:dist": "npm run dist && node dist/index.js"
},

### Anotações 

** o typescript é uma linguagem que tem de ser transcrição para o javascript **

** com o tsconfig é possivel passar regras para o funcionamento da transcrição do typescript. 
Um arquivo de configuração usado para especificar opções do compilador TypeScript para um projeto. **

-- o tsc faz o transpile automatico. --

saiba mais https://www.typescriptlang.org/pt/
