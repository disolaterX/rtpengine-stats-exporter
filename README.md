## Setup Node & PM2 to run this in demon mode

You can follow the steps below to set up Node and PM2:

1. Install Node.js:
   ```bash
   sudo apt install nodejs
   ```
2. Install PM2 globally:
   ```bash
   sudo npm install pm2 -g
   ```
3. Restart PM2 using the configuration file:
   ```bash
   pm2 restart pm2.config.js
   ```
4. Save PM2:
   ```bash
   pm2 startup && pm2 save
   ```
