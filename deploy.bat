git add .
git commit -m "testando servidor Amazon"
git push
$env:NODE_OPTIONS="--openssl-legacy-provider"
npm run deploy