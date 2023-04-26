import React from "react";
import styled from "styled-components";
export const MapExpence = ({ el, todos, setTodos }) => {
  const dateMonth = new Date(el.date).toLocaleString("en-US", {
    month: "long",
  });
  const dateFullYear = new Date(el.date).getFullYear();
  const dateDay = new Date(el.date).getDate();
  const deleteExpence = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  return (
    <DivMap>
      <div style={{ display: "flex", alignItems: "center" }}>
        <DivDateMap>
          <p>{dateMonth}</p>
          <p>{dateFullYear}</p>
          <p>{dateDay}</p>
        </DivDateMap>
        <TitleMap>{el.title}</TitleMap>
      </div>
      <div style={{ display: "flex" }}>
        <AmountMap>$ {el.amount}</AmountMap>
        <DeleteMap onClick={() => deleteExpence(el.id)}>DELETE</DeleteMap>
      </div>
    </DivMap>
  );
};
const DivDateMap = styled.div`
  background-color: #1a1a1a;
  width: 84px;
  height: 80px;
  border-radius: 10px;
  color: #ffffff;
  text-align: center;
  padding-top: 7px;
  margin-right: 14px;
  border: 1px solid #ffffff;
  line-height: 25px;
`;
const DivMap = styled.div`
  background-color: #4b4b4b;
  height: 104px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  padding: 0 16px;
`;
const TitleMap = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
`;
const AmountMap = styled.p`
  padding: 10px 18px;
  background: #40005d;
  border: 1px solid #ffffff;
  border-radius: 10px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin-right: 14px;
`;
const DeleteMap = styled.button`
  padding: 10px 18px;
  background: #a90f0f;
  border: 1px solid #ffffff;
  border-radius: 10px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`