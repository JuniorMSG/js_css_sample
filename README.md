## Default parcel

> npm init -y  
> npm i -D parcel-bundler  
> npm install -D parcel-plugin-static-files-copy  
> npm i -D postcss autoprefixer # 구형 모듈에 대한 호환성   
> npm i -D @babel/core @babel/preset-env
> npm i -D @babel/plugin-transform-runtime

## Default Setting - webpack
> npm i -D webpack webpack-cli webpack-dev-server@next
> npm i html-webpack-plugin
> npm i -D copy-webpack-plugin
> npm install --save-dev sass sass-loader css-loader style-loader
> npm install --save-dev @babel/core @babel/preset-env babel-loader
> npm install --save-dev @babel/runtime @babel/plugin-transform-runtime


## Reset CSS
~~~
<link href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css" rel="stylesheet">
~~~