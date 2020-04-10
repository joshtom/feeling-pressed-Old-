import React from "react";
import Welcome from "../../components/welcome";
import Main from "../../components/main";
import Article from "../../components/Article";
import Mission from "../../components/mission";

export default function Homepage() {
  return (
    <>
      <Main />
      <Welcome />
      <Mission />
      <Article />
    </>
  );
}
