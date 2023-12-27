import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Message } from "primereact/message";
import { useValidation } from "../../hooks/useValidation";
import "../../assets/style/Page5.css";

const Page5: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupError, setSignupError] = useState<string | null>(null);
  const { isValidEmail } = useValidation();

  const handleSignUp = () => { 
    if (password ===''  || confirmPassword ==='' || username ==='' || email==='' ) setSignupError("Incomplete form");
    else if (!isValidEmail(email) && password !== confirmPassword) {
        setSignupError("Invalid email format and passwords do not match");
        return;
    } else if (!isValidEmail(email)) {
        setSignupError("Invalid email format");
        return;
    }
    else if (password !== confirmPassword) setSignupError("Passwords do not match");
    else setSignupError(null);
  };

  return (
      <div className="signup-form">
          <Card title="Sign Up" subTitle="Create your account" style={{ width: "300px" }}>
              <div className="form">
                  <div className="input">
                      <label htmlFor="usernamr">Username</label>
                      <InputText id="username" type="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                  </div>
                  <div className="input">
                      <label htmlFor="email">Email</label>
                      <InputText id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className="input">
                      <label htmlFor="password">Password</label>
                      <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <div className="input">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <InputText id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                  </div>
                  <div className="signup">
                      <Button label="Sign Up" onClick={handleSignUp} />
                  </div>
                  {signupError && <Message severity="error" text={signupError} />}
              </div>
        </Card>
      </div>
  );
};

export default Page5;
