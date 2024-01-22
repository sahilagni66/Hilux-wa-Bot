FROM node:lts-buster

RUN git clone https://github.com/S-U-P-E-R-I-O-R/Hilux-wa-Bot/root/Hilux-wa-Bot

WORKDIR /root/Hilux-wa-Bot

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

RUN npm install


CMD ["npm", "start"]
