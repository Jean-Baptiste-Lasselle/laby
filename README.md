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
# sets Laby's port number
export LABY_PORT=3000
# sets Laby's
export LABY_HOST=0.0.0.0
# Ever heard about servers' Backlog? Google that and come back on that config param
export LABY_BACKLOG=500
# npm run start
npm start
```

# Load a static website to the static endpoint

* First, stop the serer. Then execute : 

```bash
# the dowloaded file must be a valid zip archive
export TEMPLATE_DOWNLOAD_URI=https://templated.co/industrious/download
cd laby/www
curl -L https://templated.co/industrious/download -o template.zip
unzip template.zip
cd ../..
npm start
```

* Click on the Static Endpoint Access Button

![Click on the Static Endpoint Access Button](https://github.com/Jean-Baptiste-Lasselle/laby/raw/master/documentation/images/CLICK_THE_STATIC_ENDPOINT_ACCESS_BUTTON_ON_HOMEPAGE_2019-03-28%2013-17-04.png)


**_What you get_**

![You only get what you give](https://github.com/Jean-Baptiste-Lasselle/laby/raw/master/documentation/images/LABY_EXAMPLE_STATIC_ENDPOINT_LOADED_2019-03-28)

<!--
![screeshow 3](ccc)
-->
