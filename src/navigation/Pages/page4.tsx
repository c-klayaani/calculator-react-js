import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Message } from "primereact/message";
import { Link } from "react-router-dom";
import { useValidation } from "../../hooks/useValidation";
import "../../assets/style/Page4.css";

const Page4: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const { isValidEmail } = useValidation();

  const handleLogin = () => {
    if (!isValidEmail(email)) {
        setLoginError("Invalid email format");
        return;
    }
    else if (email === "sam@hotmail.com" && password === "123@s") setLoginError(null);
    else setLoginError("Invalid email or password");
  };

  return (
    <div className="login-form">
        <Card title="Login" subTitle="Enter your email and password" style={{ width: "300px" }}>
            <div className="form">
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <InputText id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input">
                    <label htmlFor="password">Password</label>
                    <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="login-signup">
                    <div className="login">
                            <Button label="Login" onClick={handleLogin} />
                    </div>
                    <div className="sign-up">
                        <Link to="/page5">
                            <Button label="Sign Up" className="p-button-secondary" />
                        </Link>
                    </div>
                </div>
                {loginError && <Message severity="error" text={loginError} />}
            </div>
        </Card>
    </div>
  );
};

export default Page4;
