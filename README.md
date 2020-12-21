# SSG CV with Nextjs + Docker
Resume website with NextJS and Docker by Oussema Trichi


### to install it locally without Docker:
```bash
git clone https://github.com/iamtrichi/nextjs-cv-docker.git
cd nextjs-cv-docker
npm i
```
##### on development:
```bash
npm run dev
```
##### on production:
```bash
npm run build
npm run start
```
### Running with Docker:
#### Docker Image
the image is automated Builded on dockerhub as the name:
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
