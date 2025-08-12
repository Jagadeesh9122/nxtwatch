import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {Redirect} from 'react-router-dom'
import {IoCloseSharp} from 'react-icons/io5'
import {IoMdSearch} from 'react-icons/io'
import Sidebar from '../Sidebar'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import VideoCard from '../VideoCard'
import {
  LayoutContainer,
  MainContent,
  BannerItem,
  BannerLogo,
  BannerDesp,
  CloseIcon,
  CloseBtn,
  BannerBtn,
  InputContainer,
  InputElement,
  SearchButton,
  SearchIcon,
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

class Home extends Component {
  state = {
    videoData: [],
    searchInput: '',
    closeBanner: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videoData: formattedVideoData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getHomeVideos()
  }

  renderSearchInput = () => {
    const {searchInput} = this.state
    return (
      <>
        <InputContainer>
          <InputElement
            type="search"
            placehoder="Search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <SearchButton onClick={this.onClickSearch} data-testid="searchButton">
            <SearchIcon as={IoMdSearch} />
          </SearchButton>
        </InputContainer>
      </>
    )
  }

  renderNoVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <>
            <FailureContainer>
              <FailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <FailureTxt $isDark={isDarkTheme}>
                No Search results found
              </FailureTxt>
              <FailureDesp $isDark={isDarkTheme}>
                Try different key words or remove search filter
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

  renderHomeVideos = () => {
    const {videoData} = this.state
    if (videoData.length === 0) {
      return this.renderNoVideos()
    }
    return (
      <>
        <UnorderedListItem>
          {videoData.map(eachItem => (
            <VideoCard key={eachItem.id} videoDetails={eachItem} />
          ))}
        </UnorderedListItem>
      </>
    )
  }

  onClickClosebtn = () => {
    this.setState({closeBanner: true})
  }

  onClickRetry = () => {
    this.getHomeVideos()
  }

  renderLoader = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

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
        return this.renderHomeVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {closeBanner, videoData} = this.state
    console.log(videoData)
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
              <SidebarContainer $isDark={isDarkTheme}>
                <Sidebar />
              </SidebarContainer>
              <MainContent $isDark={isDarkTheme} data-testid="home">
                <Header />
                {!closeBanner && (
                  <BannerItem data-testid="banner">
                    <CloseBtn
                      type="button"
                      data-testid="close"
                      onClick={this.onClickClosebtn}
                    >
                      <CloseIcon as={IoCloseSharp} />
                    </CloseBtn>
                    <BannerLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />

                    <BannerDesp>
                      Buy Nxt watch Premium prepaid plans with UPI
                    </BannerDesp>
                    <BannerBtn>GET IT NOW</BannerBtn>
                  </BannerItem>
                )}
                {this.renderSearchInput()}
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

export default Home
