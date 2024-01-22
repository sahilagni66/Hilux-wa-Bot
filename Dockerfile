FROM quay.io/superior/Hilux-wa-Bot:latest
RUN git clone https://github.com/S-U-P-E-R-I-O-R/Hilux-wa-Bot/root/Hilux-wa-Bot/
WORKDIR /root/Hilux-wa-Bot/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
