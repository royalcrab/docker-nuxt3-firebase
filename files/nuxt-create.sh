nuxi init work
cd work
yarn add bootstrap @popperjs/core bootstrap-icons firebase
cp -n /opt/firebase.json ./
cp /opt/nuxt.config.ts ./
cp -n /opt/env ./.env
mkdir ./plugins
cp -n /opt/firebase.client.ts ./plugins