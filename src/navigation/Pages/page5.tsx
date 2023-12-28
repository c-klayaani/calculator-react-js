import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Tooltip } from "primereact/tooltip";
import { useValidation } from "../../hooks/useValidation";
import "../../assets/style/Page5.css";


const Page5: React.FC = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [usernameError, setUsernameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);
    const { isValidEmail } = useValidation();

    const handleSignUp = () => {
        setUsernameError(null);
        setEmailError(null);
        setPasswordError(null);
        setConfirmPasswordError(null);
        if (username === "") setUsernameError("Username is required");
        if (email === "") setEmailError("Email is required");
        if (password === "") setPasswordError("Password is required");
        if (confirmPassword === "") setConfirmPasswordError("Confirm Password is required");
        if (!isValidEmail(email) && password !== confirmPassword) {
        setEmailError("Invalid email format");
        setConfirmPasswordError("Passwords do not match");
        } else if (!isValidEmail(email)) setEmailError("Invalid email format");
        else if (password !== confirmPassword) setConfirmPasswordError("Passwords do not match");
        if (usernameError || emailError || passwordError || confirmPasswordError) return;
    };

    return (
        <div className="signup-form">
            <Card title="Sign Up" subTitle="Create your account" style={{ width: "300px" }}>
                <div className="form">
                <div className="input">
                    <label htmlFor="username">Username</label>
                    <InputText id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} className={usernameError ? "p-invalid" : ""}/>
                    {usernameError && <Tooltip target={`#${"username"}`} position="bottom" content={usernameError} />}
                </div>
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
                <div className="input">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <InputText id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={confirmPasswordError ? "p-invalid" : ""}/>
                    {confirmPasswordError && ( <Tooltip target={`#${"confirmPassword"}`} position="bottom" content={confirmPasswordError} />)}
                </div>
                <div className="signup">
                    <Button label="Sign Up" onClick={handleSignUp} />
                </div>
                </div>
            </Card>
        </div>
    );
};

export default Page5;
