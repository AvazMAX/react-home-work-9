import React, { useEffect, useState } from "react";
import { ExpenceFilter } from "./ExpenceFilter";
import { MapExpence } from "./MapExpence";
import { ExpenceChart } from "./ExpenceChart";
import styled from "styled-components";

export const Expence = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [select, setSelect] = useState("2023");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("Todo")) || []
  );

  const addExpenceTodo = () => {
    if (title && amount && date !== "") {
      const data = {
        title: title,
        amount: amount,
        date: date,
        id: Math.random(),
      };
      setTodos([...todos, data]);
    } else {
      alert("Please fill in field!");
    }
    setTitle("");
    setAmount("");
    setDate("");
  };
  useEffect(() => {
    const todosString = JSON.stringify(todos);
    localStorage.setItem("Todo", todosString);
  }, [todos]);

  useEffect(() => {
    const db = localStorage.getItem("Todo");
    const bd = JSON.parse(db);
    setTodos(bd);
  }, [setTodos]);

  const filteredYear = todos?.filter(({ date }) => {
    const stringify = new Date(date).getFullYear().toString();
    return stringify === select;
  });
  return (
    <>
      <ContExpence>
        <DivExpence>
          <DivInputTitleAmount>
            <div>
              <label>Title</label>
              <br />
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
            </div>
            <div>
              <label>Amount</label>
              <br />
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
              />
            </div>
          </DivInputTitleAmount>
          <DivDate>
            <label>Date</label>
            <br />
            <Input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </DivDate>
          <DivBtnExp>
            <BtnExp onClick={addExpenceTodo}>Add Expence</BtnExp>
          </DivBtnExp>
        </DivExpence>
      </ContExpence>
      <ContFilterChart>
        <DivFilterChart>
          <ExpenceFilter
            todos={todos}
            setTodos={setTodos}
            select={select}
            setSelect={setSelect}
          />
          <ExpenceChart filteredYear={filteredYear} />
          {filteredYear?.map((el) => {
            return <MapExpence el={el} todos={todos} setTodos={setTodos} />;
          })}
        </DivFilterChart>
      </ContFilterChart>
    </>
  );
};
const ContExpence = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const DivExpence = styled.div`
  background-color: #ad9be9;
  width: 780px;
  height: 287px;
  border-radius: 12px;
`;
const Input = styled.input`
  width: 340px;
  height: 39px;
  background: #ffffff;
  border-radius: 8px;
  border: 0;
`;
const DivInputTitleAmount = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;
const DivDate = styled.div`
  margin: 20px 23px;
`;
const DivBtnExp = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 28px;
  gap: 20px;
  margin-right: 23px;
`;
const BtnExp = styled.button`
  background: #4a026b;
  height: 50px;
  border-radius: 10px;
  padding: 10px 20px;
  color: #fff;
  border: 0;
  font-size: 16px;
`;
const ContFilterChart = styled.div`
  display: flex;
  justify-content: center;
`;
const DivFilterChart = styled.div`
  background-color: #1f1f1f;
  width: 780px;
  margin-top: 26px;
  border-radius: 12px;
`;
