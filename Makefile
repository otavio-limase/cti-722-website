.PHONY: build-docker up down logs install start build lint clean

# ==============================================================================
# Variáveis
# ==============================================================================
CONTAINER_NAME=website

# ==============================================================================
# Comandos Docker
# ==============================================================================

## build-docker: Constrói a imagem Docker baseada no docker-compose
build-docker:
	docker compose build

## up: Inicia os containers em background
up:
	docker compose up -d

## down: Para e remove os containers do docker-compose
down:
	docker compose down

## logs: Exibe os logs do container em tempo real
logs:
	docker compose logs -f $(CONTAINER_NAME)

# ==============================================================================
# Comandos de Desenvolvimento Local (NPM)
# ==============================================================================

## install: Instala as dependências do projeto
install:
	npm install

## start: Roda o servidor de desenvolvimento local (Vite)
start:
	npm run dev

## build: Executa o build de produção localmente
build:
	npm run build

## lint: Executa a verificação de código (ESLint)
lint:
	npm run lint

## clean: Remove as pastas de build e dependências (dist e node_modules)
clean:
	rm -rf node_modules dist

