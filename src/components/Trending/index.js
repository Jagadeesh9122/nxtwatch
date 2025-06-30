import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {Redirect} from 'react-router-dom'

import Sidebar from '../Sidebar'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import TrendingVideoCard from '../TrendingVideoCard'
import {
  LayoutContainer,
  MainContent,
  TrendingTitleContainer,
  IconContainer,
  TrendingIcon,
  TrendingTitle,
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

class Trending extends Component {
  state = {trendingVideoData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedVideoData = data.videos.map(eachItem => ({
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        id: eachItem.id,
        publishedAt: formatDistanceToNow(new Date(eachItem.published_at), {
          addSuffix: true,
        }),
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        trendingVideoData: formattedVideoData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendingVideoCard = () => {
    const {trendingVideoData} = this.state
    return (
      <>
        <UnorderedListItem>
          {trendingVideoData.map(eachItem => (
            <TrendingVideoCard key={eachItem.id} videoDetails={eachItem} />
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
    this.getTrendingVideos()
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
        return this.renderTrendingVideoCard()
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
              <MainContent $isDark={isDarkTheme} data-testid="trending">
                <Header />
                <TrendingTitleContainer $isDark={isDarkTheme}>
                  <IconContainer>
                    <TrendingIcon />
                  </IconContainer>
                  <TrendingTitle $isDark={isDarkTheme}>Trending</TrendingTitle>
                </TrendingTitleContainer>
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

export default Trending
