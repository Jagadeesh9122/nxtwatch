import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoItem,
  ThumbnailImg,
  DespContainer,
  Content,
  ChannelName,
  ViewsDateContainer,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, name, viewCount, publishedAt} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideoItem as={Link} to={`/videos/${id}`}>
            <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
            <DespContainer>
              <Content $isDark={isDarkTheme}>{title}</Content>
              <ChannelName>{name}</ChannelName>
              <ViewsDateContainer>
                <ChannelName>{viewCount} views</ChannelName>
                <ChannelName>• {publishedAt}</ChannelName>
              </ViewsDateContainer>
            </DespContainer>
          </VideoItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoCard
