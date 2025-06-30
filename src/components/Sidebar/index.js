import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {FaFireAlt} from 'react-icons/fa'
import {IoMdHome} from 'react-icons/io'
import {SiYoutubegaming} from 'react-icons/si'
import {IoSaveOutline} from 'react-icons/io5'
import ThemeContext from '../../context/ThemeContext'

import {
  RoutesContainer,
  RouteInnerContainer,
  RouteContainer,
  RouteIcon,
  RouteName,
  LinkItem,
  ContactContainer,
  ContactUs,
  SocialMediaContainer,
  SocialMediaIcon,
  ContactUsDesp,
} from './styledComponents'

class Sidebar extends Component {
  render() {
    const {location} = this.props
    const activePath = location.pathname

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <RoutesContainer $isDark={isDarkTheme}>
              <RouteInnerContainer>
                <LinkItem to="/">
                  <RouteContainer>
                    <RouteIcon as={IoMdHome} $isActive={activePath === '/'} />
                    <RouteName $isActive={activePath === '/'}>Home</RouteName>
                  </RouteContainer>
                </LinkItem>
                <LinkItem to="/trending">
                  <RouteContainer>
                    <RouteIcon
                      as={FaFireAlt}
                      $isActive={activePath === '/trending'}
                    />
                    <RouteName $isActive={activePath === '/trending'}>
                      Trending
                    </RouteName>
                  </RouteContainer>
                </LinkItem>
                <LinkItem to="/gaming">
                  <RouteContainer>
                    <RouteIcon
                      as={SiYoutubegaming}
                      $isActive={activePath === '/gaming'}
                    />
                    <RouteName $isActive={activePath === '/gaming'}>
                      Gaming
                    </RouteName>
                  </RouteContainer>
                </LinkItem>
                <LinkItem to="/saved-videos">
                  <RouteContainer>
                    <RouteIcon
                      $isActive={activePath === '/saved-videos'}
                      as={IoSaveOutline}
                    />
                    <RouteName $isActive={activePath === '/saved-videos'}>
                      Saved Videos
                    </RouteName>
                  </RouteContainer>
                </LinkItem>
              </RouteInnerContainer>

              <ContactContainer>
                <ContactUs>CONTACT US</ContactUs>
                <SocialMediaContainer>
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaContainer>
                <ContactUsDesp>
                  Enjoy! Now to see your channels and recommendations!
                </ContactUsDesp>
              </ContactContainer>
            </RoutesContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Sidebar)
