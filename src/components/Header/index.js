import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  Navbar,
  Watch,
  OptionContainer,
  ThemeButton,
  ThemeIcon,
  ProfileImg,
  LogOutBtn,
  PopUpContainer,
  PopUpTxt,
  ButtonContainer,
  CancelConfirmBtn,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickLogOut = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onClickTheme = () => {
        toggleTheme()
      }
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const ThemeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <>
          <Navbar $isDark={isDarkTheme}>
            <Link to="/">
              <Watch src={logoUrl} alt="website logo" />
            </Link>

            <OptionContainer>
              <ThemeButton onClick={onClickTheme} data-testid="theme">
                <ThemeIcon src={ThemeUrl} />
              </ThemeButton>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogOutBtn type="button" $isDark={isDarkTheme}>
                    Logout
                  </LogOutBtn>
                }
              >
                {close => (
                  <>
                    <PopUpContainer $isDark={isDarkTheme}>
                      <PopUpTxt $isDark={isDarkTheme}>
                        Are you sure, you want to logout?
                      </PopUpTxt>
                      <ButtonContainer>
                        <CancelConfirmBtn
                          type="button"
                          $isConfirm={false}
                          onClick={() => close()}
                        >
                          Cancel
                        </CancelConfirmBtn>
                        <CancelConfirmBtn
                          type="button"
                          $isConfirm
                          onClick={onClickLogOut}
                        >
                          Confirm
                        </CancelConfirmBtn>
                      </ButtonContainer>
                    </PopUpContainer>
                  </>
                )}
              </Popup>
            </OptionContainer>
          </Navbar>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
