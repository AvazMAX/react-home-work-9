import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Login = ({ openExpence, setOpenExpence }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState();
  const [passwordDirty, setPasswordDirty] = useState();
  const [formValid, setFormValid] = useState(false);

  const openExp = () => {
    localStorage.setItem("Auth", !openExpence);
    setOpenExpence(true);
  };
  
  useEffect(() => {
    setOpenExpence(localStorage.getItem("Auth"));
  }, [openExpence]);

  const validEmail = (e) => {
    setEmail(e.target.value);
    setFormValid(e.target.value.includes("@") && password.trim().length >= 8);
  };
  const validPassword = (e) => {
    setPassword(e.target.value);
    setFormValid(e.target.value.trim().length >= 8 && email.includes("@"));
  };
  const blurEmailHandler = () => {
    setEmailDirty(email.includes("@"));
  };
  const blurPasswordHandler = () => {
    setPasswordDirty(password.trim().length >= 8);
  };
  return (
    <div>
      <FonPink></FonPink>
      <DivLogin>
        <ContainerLogin>
          <LabelEmail>E-mail</LabelEmail>
          <Input
            onBlur={blurEmailHandler}
            name="email"
            onChange={validEmail}
            type="email"
            value={email}
            style={
              emailDirty === false
                ? { backgroundColor: "#ff000072" }
                : { backgroundColor: "#0026ff71" }
            }
          />
          <br />
          <LabelPass>Password</LabelPass>
          <Input
            onBlur={blurPasswordHandler}
            name="password"
            onChange={validPassword}
            type="password"
            value={password}
            style={
              passwordDirty === false
                ? { backgroundColor: "#ff000072" }
                : { backgroundColor: "#0026ff71" }
            }
          />
          <br />
          <DivBtn>
            <ButtonLogin disabled={!formValid} onClick={openExp}>
              Login
            </ButtonLogin>
          </DivBtn>
        </ContainerLogin>
      </DivLogin>
    </div>
  );
};
const FonPink = styled.div`
  background-color: #ad9be9;
  width: 100%;
  height: 70px;
`;
const ContainerLogin = styled.div`
  background-color: #ffffff;
  width: 700px;
  height: 160px;
  border-radius: 12px;
  padding: 40px 20px;
  box-shadow: 0px 0px 4px 0.1px;
`;
const DivLogin = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const LabelEmail = styled.label`
  margin-right: 70px;
  margin-left: 10px;
  font-weight: 600;
`;
const LabelPass = styled.label`
  margin-right: 48px;
  margin-left: 10px;
  font-weight: 600;
`;
const Input = styled.input`
  width: 550px;
  border-radius: 6px;
  border: 1px solid #b7b4b4;
  height: 30px;
  margin-top: 15px;
`;
const ButtonLogin = styled.button`
  background-color: #4a026b;
  color: #fff;
  border-radius: 10px;
  width: 90px;
  height: 50px;
  font-size: 17px;
  border: 0;
`;
const DivBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
