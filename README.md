# README

# Moori Manga Reader
Welcome to the Moori Manga Reader! This is a personal project I started as a way to showcase my web comics but with a commnity aspect similar to steam. If it goes well I would love to open it up to other creators to publish their comics and offer various rewards through digital cards and badges.
## Included so far: 
- devise_token_auth
- faker
- pry rails
- axios
- react-router-dom
- styled-components
- devise-axios
- basic user functionality (login, logout, register)
- Stubbed out navbar and pages
- Filepond (might not use)

## Adding 3rd party libraries

#### Semantic
- to add Semantic
```
    yarn add semantic-ui-react semantic-ui-css
```
in index.js (this way currently does not work with react 5.0)
```javascript
    import "semantic-ui-css/semantic.min.css"
```
OR in index.html
```html
    <body>
        <link
        async
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"/>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
        ...
```

#### MaterialUI
- to add MaterialUI
```
    yarn add @mui/material @emotion/react @emotion/styled
```
OR if you want to use styled-components as the styling engine (can still use styled-components indepently)
```
    yarn add @mui/material @mui/styled-engine-sc
```
then add svg icons
```
    yarn add @mui/icons-material
```
in index.html
```html
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
```

#### AntD
- to add AntDesign
```
    yarn add antd
```
then in index.js
```javascript
    import 'antd/dist/antd.css';
```
