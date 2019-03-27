# The laby server

Is just a simple HTTP server :

* statically serving files in the `laby/www` folder
* providing a REST API endpoint at http://`$LABY_HOST`/antenna/api/flowers :
  * This endpoint is what I call My _antenna_, which I customize ad redeploy on-the-fly, to make actual devops tests
  * I especially use it in docker environements, to determine whether the problem came from the software, from the infrastructure, or even better, from both


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
# Ever heard about servers' Backlog? Google that and come back on that config param
export LABY_BACKLOG=500
# npm run start
npm start
```


**_What you get_**



<!--
![screeshow 3](ccc)
-->
