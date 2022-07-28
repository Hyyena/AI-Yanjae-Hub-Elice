const SignInForm = ({ signInData, onChangeSignInData }) => {
  return (
    <div className="album">
      <div className="container">
        <form class="col g-4">
          <div className="col-md-4 my-4" style={{ float: "none", margin: "0 auto"}}>
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
              value={signInData.email}
            />
          </div>
          <div className="col-md-4 my-4" style={{ float: "none", margin: "0 auto"}}>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={onChangeSignInData}
              value={signInData.password}
            />
          </div>
          <div className="col-md-4 my-4" style={{ float: "none", margin: "0 auto"}}>
          <button type="submit" className="btn btn-primary">
            Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
