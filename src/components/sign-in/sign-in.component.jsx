import React, {useState} from 'react';
import {connect} from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.action';

const SignIn = ({emailSignInStart, googleSignInStart}) => {

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  })
  const {email, password} = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  }

  const handleChange = event => {
    const {value, name} = event.target;
    setUserCredentials({...userCredentials, [name]: value});
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput name='email'
                   type='email'
                   value={email}
                   label='Email'
                   handleChange={handleChange}
                   required/>
        <FormInput name='password'
                   type='password'
                   value={password}
                   label='Password'
                   handleChange={handleChange}
                   required/>
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isSecondary>Sign in With Google</CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);