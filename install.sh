echo -e "Installing node modules...\n"
npm install
echo -e "npm install completed.\n"
echo -e "Deploying Bharani React Webiste ...\n"
gcloud app deploy
echo -e "Bharani React Webiste Successfully Depolyed ..."
