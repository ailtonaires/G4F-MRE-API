FROM node:18-alpine AS base
COPY package*.json ./
RUN npm install

FROM base AS final
WORKDIR /backend
COPY ./ ./

EXPOSE 3001
EXPOSE 5002