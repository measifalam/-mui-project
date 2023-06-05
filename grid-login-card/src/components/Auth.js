import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';


const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: " ",
    password: " ",
  });
  
const handleChange = (e)=>{
  setInput((prevState)=>({
    ...prevState,[e.target.name]:e.target.value,
  }))
}

const resetHandle = ()=>{
  setIsSignup(!isSignup)
  setInput({name:"",email:'',password:''})
}

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(input)
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h3" padding={3} textAlign="center">
            {isSignup ? "SignUp" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              name="name"
              value={input.name}
              margin="normal"
              onChange
              ={handleChange}
              type={"text"}
              variant="outlined"
              placeholder="Name"
            />
          )}
          <TextField
            name="email"
            value={input.email}
            onChange={handleChange}
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="email"
          />
          <TextField
            name="password"
            input={input.password}
            onChange={handleChange}
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="password"
          />

          <Button type="submit" 
          endIcon={
            isSignup?<AppRegistrationOutlinedIcon/>:<LoginOutlinedIcon/>
          }
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            {isSignup ? "SignUp" : "Login"}
          </Button>
          <Button color="info"
          onClick={resetHandle}
          endIcon={isSignup?<LoginOutlinedIcon/>:<AppRegistrationOutlinedIcon/>}
          >
            Change to {isSignup ? "Login" : "SignUp"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
