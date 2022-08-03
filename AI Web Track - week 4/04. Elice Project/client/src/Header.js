import kakaoLoginButtonImg from "./img/kakao_login_medium_narrow.png";

import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);

  useEffect(() => {
    if (cookies.userData === undefined) {
      navigate("/");
    }
  }, [cookies]);

  //---------------------------------- kakao oauth -----------------------------------
  const REST_API_KEY = "2a4b9060f87455c878ed43fd10976ee1";
  const REDIRECT_URI = "http://localhost:3004/oauth/kakao/callback";

  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  //----------------------------------------------------------------------------------

  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">
                Add some information about the album below, the author, or any
                other background context. Make it p few sentences long so folks
                can pick up some informative tidbits. Then, link them off to
                some social networking sites or contact information.
              </p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <p className="text-white">Follow on Twitter</p>
                </li>
                <li>
                  <p className="text-white">Like on Facebook</p>
                </li>
                <li>
                  <p className="text-white">E-mail me</p>
                </li>
              </ul>
              <h4 className="text-white">Info</h4>
              {cookies.userData ? (
                <ul className="list-unstyled">
                  <li>
                    <button
                      className="btn btn-danger"
                      style={{ marginBottom: "5%" }}
                      onClick={() => {
                        removeCookie("userData", { path: "/" });
                        navigate("/");
                      }}
                    >
                      Log Out
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-primary">Info</button>
                  </li>
                </ul>
              ) : (
                <ul className="list-unstyled">
                  <li style={{ marginBottom: "5%" }}>
                    <a href={KAKAO_AUTH_URI}>
                      {/* <img src={"/img/kakao_login_medium_narrow.png"} alt="..." /> */}
                      <img src={kakaoLoginButtonImg} alt="..." width={170} />
                    </a>
                  </li>
                  <li>
                    <button
                      className="btn btn-light"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Sign In
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <p
            href="/review/list"
            className="navbar-brand d-flex align-items-center"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
            <strong>Movie Review</strong>
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
