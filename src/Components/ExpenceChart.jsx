import React from "react";
import styled from "styled-components";

export const ExpenceChart = ({ filteredYear }) => {
  const months = [
    { label: "Jan", currentPrice: 0 },
    { label: "Feb", currentPrice: 0 },
    { label: "Mar", currentPrice: 0 },
    { label: "Apr", currentPrice: 0 },
    { label: "May", currentPrice: 0 },
    { label: "Jun", currentPrice: 0 },
    { label: "Jul", currentPrice: 0 },
    { label: "Aug", currentPrice: 0 },
    { label: "Sep", currentPrice: 0 },
    { label: "Oct", currentPrice: 0 },
    { label: "Nov", currentPrice: 0 },
    { label: "Dec", currentPrice: 0 },
  ];
  filteredYear?.forEach((element) => {
    const as = new Date(element.date).getMonth();
    months[as].currentPrice += element.amount;
  });
  return (
    <ContainerChartBar>
      {months.map((item) => {
        const percent = (item.currentPrice * 100) / 2000;
        return (
          <div key={item.label}>
            <Percent>
              <Per style={{ height: percent }}></Per>
            </Percent>
            <p>{item.label}</p>
          </div>
        );
      })}
    </ContainerChartBar>
  );
};
const Percent = styled.div`
  background-color: #a892ee;
  height: 100.4px;
  width: 20px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
`;
const Per = styled.div`
  background-color: #4826b9;
  transition: 1s;
`;
const ContainerChartBar = styled.div`
  background-color: #f8dfff;
  display: flex;
  justify-content: space-around;
  margin: 10px 20px;
  padding-top: 20px;
  height: 151px;
  border-radius: 12px;
`;
