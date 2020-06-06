import React, { useState, useEffect } from "react";
import { Container } from "../../styles/common.style";
import Header from "../../Components/Header/Header";
import api from "../../services/api";
import { FireworkSpinner } from "react-spinners-kit";
import { Ul } from "./main.style";

const Main = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api.get("/public_members").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  console.log("data", data);

  return (
    <>
      {!loading && (
        <Container>
          <Header />
          <Ul>
            {data.map((list: any) => {
              return (
                <li key={list.id}>
                  <img src={list.avatar_url} width="200px" alt={list.avatar} />
                  <h2>{list.login}</h2>
                </li>
              );
            })}
          </Ul>
        </Container>
      )}
      {loading && (
        <>
          <FireworkSpinner size={55} color={"#444"} />
          <p>loading...</p>
        </>
      )}
    </>
  );
};

export default Main;
