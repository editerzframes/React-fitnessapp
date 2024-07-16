import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./login.module.css";
import useToken from "../../components/useToken";
import { useNavigate } from "react-router-dom";

async function loginUser(apiData) {
  return fetch("https://hormone.zip2box.com/api/user/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      code: "e80674",
    },
    body: JSON.stringify(apiData),
  }).then((data) => data.json());
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken, userData } = useToken();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiData = {
      email: email,
      password: password,
      type: "email",
    };
    const data = await loginUser(apiData);
    // console.log(data);
    setToken(data);
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <div>
      <h1 className={styles.title}>Login Form</h1>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.loginForm}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
