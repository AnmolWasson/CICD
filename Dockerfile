FROM node:22-slim AS deps
WORKDIR /src
COPY package.json package-lock.json ./
RUN npm ci  --omit=dev 


FROM node:22-slim AS builder
WORKDIR /src
COPY --from=deps ./src/node_modules ./node_modules
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node" , "src/index.js"]