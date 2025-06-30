import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  FormContainer,
  WatchLogo,
  InputContainer,
  Label,
  InputElement,
  CheckboxContainer,
  Checkbox,
  ShowPasswordLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    userInput: '',
    password: '',
    passwordVisible: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = event => {
    this.setState({passwordVisible: event.target.checked})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userInput, password} = this.state
    const userDetails = {username: userInput, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      userInput,
      password,
      passwordVisible,
      showSubmitError,
      errorMsg,
    } = this.state

    return (
      <LoginContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <WatchLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="watch"
          />
          <InputContainer>
            <Label htmlFor="username">USERNAME</Label>
            <InputElement
              type="text"
              id="username"
              value={userInput}
              onChange={this.onChangeUserInput}
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">PASSWORD</Label>
            <InputElement
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={this.onChangePassword}
            />
          </InputContainer>
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              id="checkbox"
              checked={passwordVisible}
              onChange={this.onChangeCheckbox}
            />
            <ShowPasswordLabel htmlFor="checkbox">
              Show password
            </ShowPasswordLabel>
          </CheckboxContainer>
          <InputContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
          </InputContainer>
        </FormContainer>
      </LoginContainer>
    )
  }
}

export default LoginForm
