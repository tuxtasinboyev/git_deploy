FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g @nestjs/cli && npm install

COPY . .
RUN  npx prisma migrate
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
