# Etapa 1: Build da aplicação React
FROM node:18-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm ci

# Copia o restante dos arquivos do projeto
COPY . .

# Executa o build de produção via Vite
RUN npm run build

# Etapa 2: Servidor Web Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Remove a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia a nossa configuração customizada do Nginx (suporte a React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos gerados no build (da Etapa 1) para a pasta do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]

