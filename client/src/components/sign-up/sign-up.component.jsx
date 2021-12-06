import React, {useState} from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user.action';

const SignUp = ({signUpStart}) => {

  const [userCredentials, setCredentials] = useState(
    {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  )

  const {displayName, email, password, confirmPassword} = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }

    signUpStart({displayName, email, password});

  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setCredentials({...userCredentials, [name]: value});
  }


  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          label='Name'
          onChange={handleChange}
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          label='Email'
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);