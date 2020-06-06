import React, { useState, useEffect } from "react";
import DetailsUsers from "../../services/details.service";
import { useHistory } from "react-router-dom";
import { Container } from "../../styles/common.style";
import Header from "../../Components/Header/Header";
import Loading from "../../Components/Loading/Loading";
import { BackButton } from "./detail.style";

const DetailsUser = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const readCurrentUrl = window.location.pathname;
  const login = readCurrentUrl.split("details/")[1];

  useEffect(() => {
    DetailsUsers.getDetailUser(login).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, [login]);

  const history = useHistory();

  return (
    <>
      {!loading && (
        <>
          <Container>
            <Header />
            <BackButton onClick={() => history.goBack()}>Voltar</BackButton>
            <img src={data.avatar_url} width="200px" alt={data.name} />
            <p>Nome: {data.name}</p>
            <p>Quantidade de respositórios: {data.public_repos}</p>
            <p>Seguidores: {data.followers}</p>
            <p>Entrou em: {data.created_at}</p>
          </Container>
        </>
      )}
      {loading && <Loading />}
    </>
  );
};

export default DetailsUser;
