import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 60px;
  li {
    margin: 0;
  }
  img {
    margin: 0;
    box-shadow: 0px 7px 8px #c9c9c9;
    opacity: 1;
    transition: opacity 0.5s;
    &:hover {
      opacity: 0.5;
      transition: opacity 0.7s;
    }
  }
  h2 {
    margin-bottom: 50px;
    text-align: center;
  }
  a {
    text-decoration: none;
  }
`;
