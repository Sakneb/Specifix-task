import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("user");
  const [password, setPassword] = useState("12345678");
  const router = useRouter();

  const handleClick = () => {
    router.push("/mainpage");
  };

  return (
    <div className={styles.main__container}>
      <div className={styles.logo}>
        <Image
          priority
          src="/assets/logo.png"
          alt="Specifix Logo"
          width={165}
          height={120}
        />
      </div>

      <div className={styles.login__container}>
        <div className={styles.title}>
          <h1>Welcome!</h1>
          <h2>Login to get started</h2>
        </div>
        <form id="form_id" method="post" className={styles.input__container}>
          <div className={styles.login__form}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.button__container}>
            <button
              className={styles.button}
              type="button"
              onClick={handleClick}
            >
              Login
            </button>
          </div>

          <div className={styles.register__prompt}>
            <p>
              Dont have an account?
              <Link
                href="/"
                style={{ color: "#4f9bd5", textDecoration: "underline" }}
              >
                {" "}
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
