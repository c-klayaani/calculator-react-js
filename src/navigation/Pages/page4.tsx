import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Message } from "primereact/message";
import { Link } from "react-router-dom";
import { Tooltip } from "primereact/tooltip";
import { useValidation } from "../../hooks/useValidation";
import "../../assets/style/Page4.css";

const Page4: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [loginError, setLoginError] = useState<string | null>(null);
    const { isValidEmail } = useValidation();

    const handleLogin = () => {
        setEmailError(null);
        setPasswordError(null);
        setLoginError(null);
        if (email === "") setEmailError("Email is required");
        else if (!isValidEmail(email)) setEmailError("Invalid email format");
        else if (email !== "sam@hotmail.com") setEmailError("Your email is not correct");
        if (password === "") setPasswordError("Password is required");
        else if (password !== "123@s") setPasswordError("Your password is not correct");
        if (!emailError && !passwordError) setLoginError(null);
      };

    return (
        <div className="login-form">
            <Card title="Login" subTitle="Enter your email and password" style={{ width: "300px" }}>
                <div className="form">
                <div className="input">
                    <label htmlFor="email">Email</label>
                    <InputText id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={emailError ? "p-invalid" : ""}/>
                    {emailError && <Tooltip target={`#${"email"}`} position="bottom" content={emailError} />}
                </div>
                <div className="input">
                    <label htmlFor="password">Password</label>
                    <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={passwordError ? "p-invalid" : ""}/>
                    {passwordError && <Tooltip target={`#${"password"}`} position="bottom" content={passwordError} />}
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
