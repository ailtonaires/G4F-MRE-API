# G4F-MRE-API

Pré requisitos: 
- Node.js 18.19.1
- npm 10.2.1
- npx 10.2.1
- Docker 26.0.2
- Docker-compose 2.26.1
- Nest 10.3.2
- Git

## Instruções para rodar o projeto sem Docker

Para rodar o projeto localmente (sem Docker):

1. Clone o repositório:
```bash
git clone git@github.com:ailtonaires/G4F-MRE-API.git
```

2. Acesse a pasta do projeto:
```bash
cd G4F-MRE-API
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o projeto:
```bash
npm run start
```

5. Acesse o projeto no navegador:
```bash
http://localhost:3001
```

6. Acesse o json-server no navegador:
```bash
http://localhost:5002
```

7. Para rodar os testes:
```bash
npm run test
```

## Instruções para rodar o projeto com Docker

Para rodar o projeto localmente (com Docker):

1. Clone o repositório:
```bash
git clone clone git@github.com:ailtonaires/G4F-MRE-API.git
```

2. Acesse a pasta do projeto:
```bash
cd G4F-MRE-API
```

3. Execute o projeto:
```bash
docker-compose up
```

4. Acesse o projeto no navegador:
```bash
http://localhost:3001
```

5. Acesse o json-server no navegador:
```bash
http://localhost:5002
```

6. Para rodar os testes:
```bash
docker-compose run --rm app npm run test
```

## Documentação da API

A documentação da API pode ser acessada em:
```bash
http://localhost:3001/docs
```

## Estrutura do projeto

```
G4F-MRE-API
.
├── Dockerfile
├── Dockerfile.dev
├── README.md
├── docker-compose.yml
├── nest-cli.json
├── package-lock.json
├── package.json
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── cep
│   │   ├── cep.controller.ts
│   │   ├── cep.module.ts
│   │   └── cep.service.ts
│   ├── config
│   │   ├── apiCep.ts
│   │   └── apiNoticias.ts
│   ├── db
│   │   └── db.json
│   ├── interceptor
│   │   └── all-exceptions.filter.ts
│   ├── main.ts
│   ├── noticia
│   │   ├── dto
│   │   ├── noticia.controller.spec.ts
│   │   ├── noticia.controller.ts
│   │   ├── noticia.module.ts
│   │   └── noticia.service.ts
│   └── utils
│       └── codesToMessages.ts
├── tests
│   └── noticia.feature
├── tsconfig.build.json
└── tsconfig.json

```



