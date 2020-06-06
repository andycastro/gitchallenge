import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap");
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Archivo Black', sans-serif;
    -webkit-font-smoothing: antialiased !important;
    background-color: #fff;
    color: #444
  }
  img{
    border-radius: 5px;
    margin-bottom: 20px;
  }
  h1, h2, h3, h4, h5 {
    color: #444;
    font-weight:100;
  }
  li {
    list-style:none;
    margin:20px 0 20px 40px;
  }
`;
