# ---------- Build Stage ----------
FROM node:18 AS build

WORKDIR /app

# Copy package files from app folder
COPY app/package*.json ./

RUN npm install

# Copy the rest of the app
COPY app/ .

# Build the app
RUN npm run build


# ---------- Production Stage ----------
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]