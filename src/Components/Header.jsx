import React, { useEffect, useState } from "react";
import { Expence } from "./Expence";
import styled from "styled-components";

export const Header = ({ setOpenExpence }) => {
  const [jsonOpen, setJsonOpen] = useState(false);
  const [data, setData] = useState([]);
  const logOut = () => {
    setOpenExpence(false);
    localStorage.clear();
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <DivContainer>
        <Button onClick={() => setJsonOpen(false)}>Expenses</Button>
        <Button onClick={() => setJsonOpen(true)}>Users</Button>
        <Button onClick={logOut}>Login Out</Button>
      </DivContainer>
      {jsonOpen ? (
        <>
          {data.map((el) => {
            return (
              <ContJson>
                <DivJson>
                  <h1>{el.name}</h1>
                  <p>{el.email}</p>
                </DivJson>
              </ContJson>
            );
          })}
        </>
      ) : (
        <>
          <Expence />
        </>
      )}
    </>
  );
};
const DivContainer = styled.div`
  background-color: #ad9be9;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
const Button = styled.button`
  margin-right: 20px;
  background-color: #4a026b;
  color: #fff;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  font-size: 16px;
  border: 0;
`;
const DivJson = styled.div`
  background-color: #ad9be9;
  border-radius: 12px;
  width: 728px;
  /* height: 100px; */
  color: #fff;
  text-align: center;
  padding: 25px;
  margin-top: 20px;
`;
const ContJson = styled.div`
  display: flex;
  justify-content: center;
`