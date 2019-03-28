TODO:  mettre une page HTML dans le www

# The laby server

Is just a simple HTTP server :

* statically serving files in the `laby/www` folder
* providing a REST API endpoint at http://`$LABY_HOST`/antenna/api/flowers :
  * This endpoint is what I call My _antenna_, which I customize ad redeploy on-the-fly, to make actual devops tests
  * I especially use it in docker environements, to determine whether the problem came from the software, from the infrastructure, or even better, from both


# Install it

<!-- https://parceljs.org/getting_started.html -->



```bash

# ---- BUILD ENV.

export LABY_RELEASE_VERSION=0.0.1
export LABY_SOCIAL_DEV_TEAM=https://github.com/Jean-Baptiste-Lasselle
export LABY_WOULD_YOU_LIKE_TO_KNOW_MORE=https://github.com/Jean-Baptiste-Lasselle/laby/readme
export LABY_STATIC_ANTENNA=/antenna/static
export LABY_RESTAPI_ANTENNA=/antenna/api/flowers

export URI_DE_CE_REPO=https://github.com/Jean-Baptiste-Lasselle/laby

mkdir -p ~/laby
cd ~/laby

git clone $URI_DE_CE_REPO .

npm run build

```


# Configure and Run it

Inside the

```bash
# ---- run env.
npm start
```


**_What you get_**



<!--
![screeshow 3](ccc)
-->
