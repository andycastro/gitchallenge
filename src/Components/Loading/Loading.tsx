import React from "react";
import { FireworkSpinner } from "react-spinners-kit";
import { CenterContainer } from "./loading.style";

const Loading = () => {
  return (
    <>
      <CenterContainer>
        <FireworkSpinner size={55} color={"#444"} />
        <p>loading...</p>
      </CenterContainer>
    </>
  );
};

export default Loading;
