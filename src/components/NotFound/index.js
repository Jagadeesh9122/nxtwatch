import Sidebar from '../Sidebar'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import {
  LayoutContainer,
  MainContent,
  NotFoundContainer,
  NotFoundImg,
  PageNotFound,
  NotFoundDesp,
  SidebarContainer,
  SidebarContainerMobile,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const ImgSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <LayoutContainer>
            <SidebarContainer>
              <Sidebar />
            </SidebarContainer>
            <MainContent $isDark={isDarkTheme}>
              <Header />
              <NotFoundContainer>
                <NotFoundImg src={ImgSrc} alt="not found" />
                <PageNotFound $isDark={isDarkTheme}>
                  Page Not Found
                </PageNotFound>
                <NotFoundDesp $isDark={isDarkTheme}>
                  We are sorry, the page you requested could not be found.
                </NotFoundDesp>
              </NotFoundContainer>
            </MainContent>
            <SidebarContainerMobile $isDark={isDarkTheme}>
              <Sidebar />
            </SidebarContainerMobile>
          </LayoutContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
