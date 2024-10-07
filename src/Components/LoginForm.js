import { Card } from 'antd';
import "./LoginForm.css";
import { Button, Input, Form } from 'antd';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';


function LoginForm() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();
    const { login, isAuthenticated  } = useAuth();
    const [cardMoving,setCardMoving] = useState(false);

    const handleSubmit = () => {
        setNameError("");
        setPasswordError("");

        let hasError = false;

        if (name.trim() === "") {
            setNameError("Enter your name");
            hasError = true;
        }
        if (name !== "vkondepudi@miraclesoft.com") {
            setNameError("Incorrect name");
            hasError = true;
        }
        if (password.trim() === "") {
            setPasswordError("Enter your password");
            hasError = true;
        }
        if (password !== "Vinnu@123") {
            setPasswordError("Incorrect password");
            hasError = true;
        }

        // Only reset fields if there are no errors
        if (!hasError) {
            console.log("Submitted Name:", name);
            console.log("Submitted Password:", password);
            setName("");
            setPassword("");
            login();
            navigate('/task')
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
          navigate(''); // Redirect to task page if already authenticated
        }
      }, [isAuthenticated, navigate]);

    const handleChangeName = (event) => {
        setName(event.target.value);
        if (nameError) {
            setNameError(""); 
        }
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        if (passwordError) {
            setPasswordError(""); 
        }
    };

    return (
        <div className='body'
        style={{backgroundImage: cardMoving ? 'none' : 'linear-gradient(to right, #4a88d0 , #6b63bc)' 
             }}
          onMouseEnter={() => setCardMoving(true)}
          onMouseLeave={() => setCardMoving(false)}
        >
            <Card
                 className="card"
                 style={{backgroundImage: cardMoving ? 'linear-gradient(to right, #4a88d0 , #6b63bc)' :
                    'none' }}
                  onMouseEnter={() => setCardMoving(true)}
                  onMouseLeave={() => setCardMoving(false)}
            >
                <Form onFinish={handleSubmit}>
                    <h1
                    //  style={{color : mouseMoving ? 'balck' : 'white'}}
                    // onMouseEnter={() => setCardMoving(true)}
                    // onMouseLeave={() => setCardMoving(false)}

                    >Login</h1>
                    <Input 
                        placeholder="Enter Name" 
                        onChange={handleChangeName} 
                        value={name} 
                    />
                    {nameError && <span className='errorMessage'>{nameError}</span>}
                    <Input.Password 
                        placeholder="Enter Password" 
                        onChange={handleChangePassword} 
                        value={password} 
                    />
                    {passwordError && <span className='errorMessage'>{passwordError}</span>}<br/>
                    <Button type="primary" htmlType="submit" className='btn'>Submit</Button>
                </Form>
            </Card>
        </div>
    )
}

export default LoginForm;
