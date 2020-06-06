import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserData from "../../services/user.service";
import { Container } from "../../styles/common.style";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";
import Loading from "../../Components/Loading/Loading";
import { Ul } from "./main.style";

const Main = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [searchResult, setSearchResult] = useState<any>([]);

  useEffect(() => {
    UserData.getUserData().then((response) => {
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
                  <Link to={`details/${list.login}`}>
                    <img
                      src={list.avatar_url}
                      width="200px"
                      alt={list.avatar}
                    />
                    <h2>{list.login}</h2>
                  </Link>
                </li>
              );
            })}
          </Ul>
        </Container>
      )}
      {loading && <Loading />}
    </>
  );
};

export default Main;
