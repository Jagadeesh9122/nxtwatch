import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoItem,
  ThumbnailImg,
  ChannelContainer,
  ChannelLogo,
  ContentContainer,
  Content,
  ChannelName,
  ViewsDateContainer,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    thumbnailUrl,
    profileImageUrl,
    title,
    name,
    viewCount,
    publishedAt,
  } = videoDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <VideoItem as={Link} to={`/videos/${id}`}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <ChannelContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <Content $isDark={isDarkTheme}>{title}</Content>
              </ChannelContainer>
              <ContentContainer>
                <ChannelName>{name}</ChannelName>
                <ViewsDateContainer>
                  <ChannelName>{viewCount}</ChannelName>
                  <ChannelName>{publishedAt}</ChannelName>
                </ViewsDateContainer>
              </ContentContainer>
            </VideoItem>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoCard
