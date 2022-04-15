import React, { useState } from 'react';
import styled from 'styled-components';

function SignUp() {
  // const dispatch = useDispatch();
  // const { loginRejected } = useSelector((state) => state.login);

  const [loginData, setloginData] = useState({
    id: '',
    nickName: '',
    pw: '',
    pwConfirm: '',
  });

  const { id, pw, pwConfirm, nickName } = loginData;

  const onChange = (e) => {
    const { value, name } = e.target;
    setloginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <StyledModalWrap>
      <div className="login-body">
        <p>아이디</p>
        <div className="check">
          <input
            name="id"
            onChange={onChange}
            value={id}
            type="name"
            placeholder="아이디"
            autoComplete="new-password"
          />
        </div>

        <p className="cancel">닉네임</p>
        <input
          name="nickName"
          onChange={onChange}
          value={nickName}
          type="text"
          placeholder="비밀번호"
          autoComplete="new-password"
        />
        <p className="cancel">비밀번호</p>
        <input
          name="pw"
          onChange={onChange}
          value={pw}
          type="password"
          placeholder="비밀번호"
          autoComplete="new-password"
        />
        <p className="cancel">비밀번호 확인</p>
        <input
          name="pwConfirm"
          onChange={onChange}
          value={pwConfirm}
          type="password"
          placeholder="비밀번호"
          autoComplete="new-password"
        />

        <div className="button-wrap">
          <button
            type="button"
            className="login-btn"
            // onClick={loginClick}
            disabled={!(id && pw && pwConfirm)}
          >
            회원가입 하기
          </button>
          {/* <button
            onClick={() => setLoginPage('signUp')}
            type="button"
            className="signup-btn"
          >
            회원가입
          </button> */}
        </div>
      </div>
    </StyledModalWrap>
  );
}

export default SignUp;

const StyledModalWrap = styled.div`
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
    .check {
      display: flex;
    }
    p {
      font-weight: bold;
      margin: 15px 0;
    }
    .fail-login {
      font-size: 0.7rem;
      color: red;
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
