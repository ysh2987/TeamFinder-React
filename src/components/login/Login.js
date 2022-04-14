import React from 'react';
import styled from 'styled-components';

function Login({ setModalOpen1 }) {
  const test = () => {
    setModalOpen1(false);
  };
  return (
    <StyledModalWrap>
      <div className="login-header">
        <p className="logo">Team-Finder</p>
        <p onClick={test} className="cancel">
          X
        </p>
      </div>
      <div className="login-body">
        <p>아이디</p>
        <input type="text" placeholder="아이디" />
        <p className="cancel">비밀번호</p>
        <input type="password" placeholder="비밀번호" />
        <div className="button-wrap">
          <button type="button" className="login-btn" disabled={true}>
            로그인
          </button>
          <button type="button" className="signup-btn">
            회원가입
          </button>
        </div>
      </div>
    </StyledModalWrap>
  );
}

export default Login;

const StyledModalWrap = styled.div`
  .login-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f8f9fa;
    padding: 10px 1rem;
    .cancel {
      font-weight: bold;
      cursor: pointer;
    }
    .logo {
      font-size: 1.2rem;
      font-family: 'Anton', sans-serif;
    }
  }
  .login-body {
    padding: 0 1rem;
    input {
      width: 100%;
      padding: 1rem;
      border: 1px solid #000;
    }
    input + input {
      margin-top: 20px;
    }
    p {
      font-weight: bold;
      margin: 15px 0;
    }
    .button-wrap {
      margin-top: 30px;
      button {
        width: 100%;
        padding: 10px 0;
      }
      .login-btn {
        background-color: #272e33;
        color: #fff;
        &:disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }
      }
      .signup-btn {
        background-color: #000;
        color: #fff;
        margin-top: 20px;
      }
    }
  }
`;
