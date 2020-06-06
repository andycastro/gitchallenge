import React, { useState, useEffect } from "react";
import { Container } from "../../styles/common.style";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";
import api from "../../services/api";
import { FireworkSpinner } from "react-spinners-kit";
import { Ul } from "./main.style";

const Main = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [searchResult, setSearchResult] = useState<any>([]);

  useEffect(() => {
    api.get("/public_members").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  const handleSearch = (e: any) => {
    const searchingFor = e.target.value || "";
    const lowerCase = searchingFor.toLowerCase();
    const resultSearch = data.filter((element: any) => {
      const lowerElementLogin = element.login.toLowerCase();
      return lowerElementLogin.indexOf(lowerCase) !== -1;
    });
    setSearchResult(resultSearch);
  };

  const listData = searchResult.length !== 0 ? searchResult : data;

  return (
    <>
      {!loading && (
        <Container>
          <Header />
          <Search handleSearch={handleSearch} />
          <Ul>
            {listData.map((list: any) => {
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
