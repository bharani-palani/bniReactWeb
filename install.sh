printf "Installing node modules...\n"
sleep 7 &
PID=$!
i=1
sp="/-\|"
printf -n ' '
while [ -d /proc/$PID ]
do
  printf "\b${sp:i++%${#sp}:1}"
done
npm install
printf "npm install completed.\n"
printf "Deploying Bharani React Webiste ...\n"
gcloud app deploy
printf "Bharani React Webiste Successfully Depolyed ..."
