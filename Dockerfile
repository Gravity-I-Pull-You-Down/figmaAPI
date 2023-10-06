# Production Dockerfile
FROM node:16-alpine

RUN apk add --no-cache git
RUN apk add --no-cache openssh

WORKDIR /data

# Copy package.json and package-lock.json files first
COPY package*.json ./

# Install dependencies
RUN git clone -b master https://github.com/Gravity-I-Pull-You-Down/figmaAPI.git /data/app

WORKDIR /data/app

RUN npm install

COPY . .

# Build application
RUN npm run build

# Run the server in production mode
CMD ["npm", "run", "server:prod", "--host=0.0.0.0"]

# Remove source code from production image
# RUN rm -Rf src

EXPOSE 8001