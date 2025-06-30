import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

export const FormContainer = styled.form`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;

  @media (max-width: 576px) {
    padding: 16px;
    max-width: 90%;
  }
`

export const WatchLogo = styled.img`
  width: 100px;
  height: auto;
  align-self: center;
  margin-bottom: 24px;
`

export const InputContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Label = styled.label`
  color: #616e7c;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 6px;
`

export const InputElement = styled.input`
  background-color: transparent;
  border: 1px solid #616e7c;
  border-radius: 6px;
  padding: 10px;
  color: #000000;
  font-size: 14px;
  font-family: 'Roboto';
  width: 100%;
  box-sizing: border-box;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4px;
  margin-bottom: 16px;
`

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`

export const ShowPasswordLabel = styled.label`
  color: #616e7c;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 8px;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  font-family: 'Roboto';
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 6px;
  margin-top: 8px;
  width: 100%;
`

export const ErrorMsg = styled.p`
  font-size: 13px;
  color: #ff0b37;
  font-family: 'Roboto';
  margin-top: 8px;
`
