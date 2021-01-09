FROM node:14.15.0
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN apt-get update && apt-get install netcat -y && npm install --production
COPY . .
COPY wait-for-it.sh ./
RUN chmod +x ./wait-for-it.sh
EXPOSE 5000
CMD ["npm", "start"]