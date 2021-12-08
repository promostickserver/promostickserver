import React, { useState, useEffect } from 'react'
import { TextField, Button } from "@material-ui/core/";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addUser } from '../../actions/activation'
import useStyles from './styles';

const App = () => {
  const { code } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();

  const [activationCode, setActivationCode] = useState();
  const [nameAndSurname, setNameAndSurname] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  useEffect(() => {
    setActivationCode(code)
  }, [])

  const handleClick = async () => {
    console.log('received')
    const userData = {
      activationCode,	
      nameAndSurname ,
      address,
      email,
      phoneNumber
    }
    await dispatch(addUser(userData))
  }

  return (
    <div>
        <TextField 
          label="Activation Code"
          variant="outlined"
          inputProps={
					  { readOnly: true, }
				  }
          onChange={(e) => setActivationCode(e.target.value)} value={activationCode}
        />
        <TextField 
          label="Name and Surname"
          variant="outlined"
          onChange={(e) => setNameAndSurname(e.target.value)}
        />
        <TextField 
          label="Address"
          variant="outlined"
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField 
          label="Email Address"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField 
          label="Phone Number"
          variant="outlined"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button
            variant="contained"
            onClick={handleClick}
        >Submit</Button>
    </div>
  )
}

export default App