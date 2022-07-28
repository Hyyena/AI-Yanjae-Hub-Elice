import SignInForm from "./pages/user/SignInForm";
import SignUpForm from "./pages/user/SignUpForm";
import { useEffect, useState } from "react";

const Login = () => {
  // view를 변경하기 위한 useState
  const [view, setView] = useState({
    signIn: false,
    signUp: false,
  });

  // 로그인 입력 받을 데이터를 props로 넘겨줌
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  // signInData 값이 변경이 될 때마다 console에서 확인 가능
  // useEffect(() => {
  //   console.log(signInData);
  // }, [signInData]);

  // 로그인 data를 입력 받는 함수
  const onChangeSignInData = (e) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    });
  };

  // 회원가입 입력 받을 데이터를 props로 넘겨줌
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    rePassword: "",
    name: "",
  });

  useEffect(() => {
    console.log(signUpData);
  }, [signUpData]);

  // 회원가입 data를 입력 받는 함수
  const onChangeSignUpData = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Movie</h1>
            <p className="lead text-muted">
              리뷰하고 싶은 영화를 선택하고 평가를 해주세요.
              <br />
              삭제와 수정은 자유롭게 가능합니다.
            </p>
            <p>
              <button
                className="btn btn-primary my-2 m-1"
                onClick={() => {
                  setView({
                    signIn: true,
                    signUp: false,
                  });
                }}
              >
                Sign in
              </button>
              <button
                className="btn btn-secondary my-2 m-1"
                onClick={() => {
                  setView({
                    signIn: false,
                    signUp: true,
                  });
                }}
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </section>
      {view.signIn ? (
        <SignInForm
          signInData={signInData}
          onChangeSignInData={onChangeSignInData}
        />
      ) : (
        <></>
      )}
      {view.signUp ? (
        <SignUpForm
          signUpData={signUpData}
          onChangeSignUpData={onChangeSignUpData}
        />
      ) : (
        <></>
      )}
    </main>
  );
};

export default Login;
