const SignUpForm = ({ signUpData, onChangeSignUpData }) => {
  return (
    <div className="album">
      <div className="container">
        <form className="col g-4 was-validated" novalidate>
          <div className="col-md-4 my-4" style={{ float: "none", margin: "0 auto" }}>
            <label for="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelp"
              onChange={onChangeSignUpData}
              value={signUpData.email}
              required
            />
            <div id="emailHelp" className="form-text" style={{ float: "none", margin: "0 auto" }}>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="col-md-4 my-4" style={{ float: "none", margin: "0 auto" }}>
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={onChangeSignUpData}
              value={signUpData.password}
              required
            />
          </div>
          <div className="col-md-4 my-4" style={{ float: "none", margin: "0 auto" }}>
            <label for="rePassword" className="form-label">
              Check Password
            </label>
            <input
              type="password"
              className="form-control"
              name="rePassword"
              id="rePassword"
              onChange={onChangeSignUpData}
              value={signUpData.rePassword}
              required
            />
          </div>
          <div className="col-md-4 my-4" style={{ float: "none", margin: "0 auto" }}>
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              onChange={onChangeSignUpData}
              value={signUpData.name}
              required
            />
          </div>
          <div className="col-md-4 my-4" style={{ float: "none", margin: "0 auto" }}>
          <button type="submit" className="btn btn-primary">
            Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
