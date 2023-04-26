import React from "react";
import styled from "styled-components";

export const ExpenceFilter = ({ todos, setTodos, select, setSelect }) => {
  const verx = () => {
    setTodos([
      ...todos.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      }),
    ]);
  };
  const vniz = () => {
    setTodos([
      ...todos.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      }),
    ]);
  };
  return (
    <>
      <DivCont>
        <div>
          <ButtonFilter onClick={vniz}>Decrement</ButtonFilter>
          <ButtonFilter onClick={verx}>Increment</ButtonFilter>
        </div>
        <Select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </Select>
      </DivCont>
    </>
  );
};
const ButtonFilter = styled.button`
  width: 100px;
  margin: 0 30px 0 0;
  height: 30px;
  border-radius: 9px;
  border: 0;
  font-size: 16px;

`;
const DivCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`
const Select = styled.select`
  width: 100px;
  border-radius: 10px;
  border: 0;
`