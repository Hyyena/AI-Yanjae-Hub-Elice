import $ from "jquery";
import axios from "axios";
import port from "./../../data/port.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";

const SignInForm = ({ signInData, onChangeSignInData }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const onClickLoginButton = () => {
    if (signInData.email === "") {
      alert("이메일을 입력해주세요.");
      $("#email").focus();
      return;
    }

    if (signInData.password === "") {
      alert("비밀번호를 입력해주세요.");
      $("#password").focus();
      return;
    }

    sendSignInData()
      .then((res) => {
        console.log(res);
        setCookie("userData", res.data, { path: "/" });
        alert("로그인 성공!");
        navigate("/review/list");
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(e.response.data.fail);
      })
      .finally(() => {
        console.log(cookies.userData);
      });
  };

  const sendSignInData = async () => {
    return await axios.post(`${port.url}/user/signIn`, signInData);
  };

  return (
    <div className="album">
      <div className="container">
        <form className="col g-4">
          <div
            className="col-md-4 my-4"
            style={{ float: "none", margin: "0 auto" }}
          >
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelp"
              onChange={onChangeSignInData}
              defaultValue={signInData.email}
            />
          </div>
          <div
            className="col-md-4 my-4"
            style={{ float: "none", margin: "0 auto" }}
          >
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={onChangeSignInData}
              defaultValue={signInData.password}
            />
          </div>
          <div
            className="col-md-4 my-4"
            style={{ float: "none", margin: "0 auto" }}
          >
            <p className="text-danger">{errorMessage}</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onClickLoginButton}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
