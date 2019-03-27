# The laby server
Is just a simple HTTP server :

* statically serving files in the `laby/www` folder
* providing a customizable endpoint at /LABY_HOST/


# Install it

<!-- https://parceljs.org/getting_started.html -->



```bash
export URI_DE_CE_REPO=https://github.com/Jean-Baptiste-Lasselle/laby

mkdir -p ~/laby
cd ~/laby

git clone $URI_DE_CE_REPO . 
```


# Configure and Run it

Inside the 

```bash
# sets Laby's port number
export LABY_PORT=3000 
# sets Laby's 
export LABY_HOST=0.0.0.0 
export LABY_BACKLOG=500 
npm run start
```


**_What you get 



<!--
![screeshow 3](ccc)
-->





