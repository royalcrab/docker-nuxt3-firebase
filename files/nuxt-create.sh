nuxi init work
if [ $? != 0 ]; then
    echo 'Already exist work directory.'
    exit 1
fi
cd work
yarn add bootstrap @popperjs/core bootstrap-icons firebase
cp -n /opt/firebase.json ./
cp /opt/nuxt.config.ts ./
cp -n /opt/env ./.env
mkdir ./plugins
cp -n /opt/firebase.client.ts ./plugins