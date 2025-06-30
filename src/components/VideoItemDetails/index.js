import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import Sidebar from '../Sidebar'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import {
  LayoutContainer,
  MainContent,
  VideoPlayerContainer,
  Title,
  DataContainer,
  ViewsDateContainer,
  ViewDateContent,
  OptionContainer,
  IconContainer,
  StyledLikeBtn,
  StyledDislikeBtn,
  StyledSaveBtn,
  IconName,
  ChannelContainer,
  ChannelLogo,
  ChannelContent,
  ChannelName,
  SubscriberCount,
  Description,
  Line,
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

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    like: false,
    dislike: false,
    save: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedVideoData = {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: formatDistanceToNow(
          new Date(data.video_details.published_at),
          {addSuffix: true},
        ),
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }

      const {savedVideos = []} = this.context
      const isAlreadySaved = savedVideos.some(
        video => video.id === formattedVideoData.id,
      )

      this.setState({
        videoDetails: formattedVideoData,
        save: isAlreadySaved,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  updateSavedVideos = () => {
    const {save, videoDetails} = this.state
    const {addToSaved = () => {}, removeFromSaved = () => {}} = this.context

    if (save) {
      addToSaved(videoDetails)
    } else {
      removeFromSaved(videoDetails.id)
    }
  }

  onClickLikeBtn = () => {
    this.setState(prevState => ({like: !prevState.like}))
    this.setState({dislike: false})
  }

  onClickDislikeBtn = () => {
    this.setState(prevState => ({dislike: !prevState.dislike}))
    this.setState({like: false})
  }

  onClickSaveBtn = () => {
    this.setState(
      prevState => ({save: !prevState.save}),
      this.updateSavedVideos,
    )
  }

  renderVideoPlayer = () => {
    const {videoDetails, like, dislike, save} = this.state
    const saveTxt = save ? 'Saved' : 'Save'
    const {
      name,
      profileImageUrl,
      subscriberCount,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = videoDetails

    const {isDarkTheme} = this.context

    return (
      <VideoPlayerContainer>
        <ReactPlayer url={videoUrl} controls width="100%" height="90%" />
        <Title $isDark={isDarkTheme}>{title}</Title>
        <DataContainer>
          <ViewsDateContainer>
            <ViewDateContent $isDark={isDarkTheme}>
              {viewCount} views
            </ViewDateContent>
            <ViewDateContent $isDark={isDarkTheme}>
              {publishedAt}
            </ViewDateContent>
          </ViewsDateContainer>
          <OptionContainer>
            <IconContainer onClick={this.onClickLikeBtn}>
              <StyledLikeBtn $isActive={like} />
              <IconName $isActive={like}>Like</IconName>
            </IconContainer>
            <IconContainer onClick={this.onClickDislikeBtn}>
              <StyledDislikeBtn $isActive={dislike} />
              <IconName $isActive={dislike}>Dislike</IconName>
            </IconContainer>
            <IconContainer onClick={this.onClickSaveBtn}>
              <StyledSaveBtn $isActive={save} />
              <IconName $isActive={save}>{saveTxt}</IconName>
            </IconContainer>
          </OptionContainer>
        </DataContainer>
        <Line $isDark={isDarkTheme} />
        <ChannelContainer>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
          <ChannelContent>
            <ChannelName $isDark={isDarkTheme}>{name}</ChannelName>
            <SubscriberCount $isDark={isDarkTheme}>
              {subscriberCount}
            </SubscriberCount>
          </ChannelContent>
        </ChannelContainer>
        <Description $isDark={isDarkTheme}>{description}</Description>
      </VideoPlayerContainer>
    )
  }

  onClickRetry = () => {
    this.getVideoDetails()
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
        return this.renderVideoPlayer()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {isDarkTheme} = this.context

    return (
      <LayoutContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <MainContent $isDark={isDarkTheme} data-testid="videoItemDetails">
          <Header />
          {this.renderSwitchStatus()}
        </MainContent>
        <SidebarContainerMobile $isDark={isDarkTheme}>
          <Sidebar />
        </SidebarContainerMobile>
      </LayoutContainer>
    )
  }
}
VideoItemDetails.context = ThemeContext
export default VideoItemDetails
