import React, { useEffect, useRef, useState } from "react";
import { isEmail, isPasswordValid } from "../../utils/validation";
import { Link, useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Login } from "../../api/reporterApi";
import { Message } from "primereact/message";
import { Tooltip } from "primereact/tooltip";
import { Button } from "primereact/button";
import { Toast } from 'primereact/toast';
import { Card } from "primereact/card";
import "../../assets/style/Page4.css";

const Page4: React.FC = () => {
    const toast = useRef<Toast>(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [loginError] = useState<string | null>(null);
    const navigate = useNavigate();

    const isFormValid = () =>{
        let isValid = true;
        if (!isEmail(email)) {
            isValid = false;
            setEmailError("This email is not valid.");};
        if (!isPasswordValid(password)) {
            setPasswordError("Password should be 8 characters");
            isValid = false;};
        if (isValid) {
            setEmailError(null);
            setPasswordError(null);
        }
        return isValid;
    }

    const showError = () => {
        toast.current?.show({
            severity: "error",
            summary: "Error",
            detail: "Login failed. Please check your credentials.",
            life: 3000
        });
    };
    

    useEffect(() => {if (loginError != null) showError();}, [loginError]);

    const login = async () => {
        try {
            const response = await Login(email, password);
            if (!response.error) navigate(pageFourRoute);
        } catch (error: any) {
            showError();
        }
    }

    const handleLogin = () => isFormValid() && login();

    return (
        <div className="login-form">
            <Toast ref={toast} />
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

export const pageFourRoute = "/page6";
export default Page4;
