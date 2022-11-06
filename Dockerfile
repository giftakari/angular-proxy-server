# syntax=docker/dockerfile:1.4

## PART 01 - BUILD APP
FROM node:17.0.1-bullseye-slim AS build
WORKDIR /project
RUN npm install -g npm@8.19.3
RUN npm install -g @angular/cli
COPY ./angular/package.json ./angular/package-lock.json ./
RUN npm install
COPY ./angular/ .
RUN echo -e "N" | ng build

## PART 02 - SERVE APP IN NGINX
FROM nginx:1.23.2-alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /project/dist/cors-issues /usr/share/nginx/html
