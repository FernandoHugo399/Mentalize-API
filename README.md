# API Doe Mais

## :mag: About: 
Structure of a typescript api, already configured with eslint
<br>



## 👷 how to run it:
```bash
# clone the repository
git clone https://github.com/FernandoHugo399/API-Doe-Mais

# open an IDE of your choice

# Add data to .env
# Create database in postgres with dump that was made available

# run yarn to install dependencies, after that, use yarn dev to start the server
yarn
yarn dev
```


## Routes:
```bash
# All institutions
Get: /institutions

# One institution
Get: /institution/:id

# Information of institution
Get: /institution-information/:id

# All messages
Get: /messages

# Save message
Post: /save-message
```


