# SSG CV with Nextjs + Docker
Resume website with NextJS and Docker by Oussema Trichi


[TOC]


### to install it locally without Docker:
```npm
git clone https://github.com/iamtrichi/nextjs-cv-docker.git
cd nextjs-cv-docker
npm i
```
##### on development:
```npm
npm run dev
```
##### on production:
```npm
npm run dev
```
### Running with Docker:
#### Docker Image
the image is saved on dockerhub as 
```
trichi/mon-cv
```

you can run it by this command :
```bash
docker run -d -p 3000:3000 trichi/mon-cv
```
#### Dockerfile used to create the image:
```Dockerfile
FROM node:slim

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

RUN npm install

COPY . /usr/src/app

RUN npm run build

EXPOSE 3000
CMD "npm" "run" "dev"
```