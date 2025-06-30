import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Sidebar from '../Sidebar'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import GameCard from '../GameCard'
import {
  LayoutContainer,
  MainContent,
  GamingTitleContainer,
  IconContainer,
  GamingIcon,
  GamingTitle,
  UnorderedListItem,
  FailureContainer,
  FailureImg,
  FailureTxt,
  FailureDesp,
  RetryBtn,
  SidebarContainer,
  SidebarContainerMobile,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {gamesData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGames()
  }

  getGames = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedGameData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        gamesData: formattedGameData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGamingCard = () => {
    const {gamesData} = this.state
    return (
      <>
        <UnorderedListItem>
          {gamesData.map(eachItem => (
            <GameCard key={eachItem.id} gameDetails={eachItem} />
          ))}
        </UnorderedListItem>
      </>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onClickRetry = () => {
    this.getGames()
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const ImgSrc = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <>
            <FailureContainer>
              <FailureImg src={ImgSrc} alt="failure view" />
              <FailureTxt $isDark={isDarkTheme}>
                Oops! Something Went Wrong
              </FailureTxt>
              <FailureDesp $isDark={isDarkTheme}>
                We are having some trouble to complete your request. Please try
                again.
              </FailureDesp>
              <RetryBtn
                type="button"
                $isDark={isDarkTheme}
                onClick={this.onClickRetry}
              >
                Retry
              </RetryBtn>
            </FailureContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSwitchStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingCard()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <LayoutContainer>
              <SidebarContainer>
                <Sidebar />
              </SidebarContainer>
              <MainContent $isDark={isDarkTheme} data-testid="gaming">
                <Header />
                <GamingTitleContainer $isDark={isDarkTheme}>
                  <IconContainer>
                    <GamingIcon />
                  </IconContainer>
                  <GamingTitle $isDark={isDarkTheme}>Gaming</GamingTitle>
                </GamingTitleContainer>
                {this.renderSwitchStatus()}
              </MainContent>
              <SidebarContainerMobile $isDark={isDarkTheme}>
                <Sidebar />
              </SidebarContainerMobile>
            </LayoutContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
