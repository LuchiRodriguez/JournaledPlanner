import { useState } from "react";
import aside from "../App/img/aside.png";
import logo from "../App/img/logo.svg";
import { SignInContainer, SignInForm, Wrapper, LogIn } from "../App/Styles";
import { createUser, postUser } from "../App/api/User";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [birthday, setBirthday] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await postUser(email, password);
      console.log("Login exitoso");
      navigate("/home");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <SignInContainer>
      <aside>
        <img alt="" src={aside} />
      </aside>

      <main>
        <div>
          <img src={logo} alt="" />

          <h1>Welcome to Journaled Planner!</h1>

          <p>
            Efficiently organize your schedule, set goals, and track your
            progress while journaling your thoughts and experiences.
          </p>

          <SignInForm action="#">
            <div>
              <label htmlFor="FirstName">First Name</label>

              <input
                type="text"
                id="FirstName"
                name="first_name"
                required
                autoComplete="firstname"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="LastName">Last Name</label>

              <input
                type="text"
                id="LastName"
                name="last_name"
                required
                autoComplete="lastname"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="Email"> Email </label>

              <input
                type="email"
                id="Email"
                name="email"
                required
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="Birthday"> Birthday </label>

              <input
                type="date"
                id="Birthday"
                name="Birthday"
                required
                autoComplete="birthday"
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="Password"> Password </label>

              <input
                type="password"
                id="Password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="PasswordConfirmation">
                Password Confirmation
              </label>

              <input
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                required
              />
            </div>
          </SignInForm>
          <section>
            {/* <div>
              <label htmlFor="MarketingAccept">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                />

                <span>
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
            </div>

            <div>
              <p>
                By creating an account, you agree to our{" "}
                <a href="#">terms and conditions</a> and{" "}
                <a href="#">privacy policy</a>.
              </p>
            </div> */}

            <div>
              <button
                onClick={async () => {
                  await createUser({
                    firstname,
                    lastname,
                    email,
                    birthday,
                    password,
                  });
                  navigate("/home");
                }}
              >
                Create an account
              </button>

              <p>
                Already have an account?
                <br />
                <span onClick={() => setLogin(true)}>Log in</span>.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Wrapper $login={login} onClick={() => setLogin(false)} />
      <LogIn $login={login}>
        <form onSubmit={handleLogin}>
          <label htmlFor="EmailLogin"> Email </label>
          <input
            type="email"
            id="EmailLogin"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="PasswordLogin"> Password </label>
          <input
            type="password"
            id="PasswordLogin"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log in</button>
        </form>
      </LogIn>
    </SignInContainer>
  );
};

export default SignIn;
