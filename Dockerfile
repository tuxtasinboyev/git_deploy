FROM node:22-alpine

RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

COPY package*.json ./

RUN npm install -g @nestjs/cli && npm install

COPY . .


RUN npx prisma migrate


RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
