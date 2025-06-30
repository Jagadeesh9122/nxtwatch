import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoItem,
  ThumbnailImg,
  DespContainer,
  Content,
  ChannelName,
} from './styledComponents'

const GameCard = props => {
  const {gameDetails} = props
  const {id, thumbnailUrl, title, viewCount} = gameDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideoItem as={Link} to={`/videos/${id}`}>
            <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
            <DespContainer>
              <Content $isDark={isDarkTheme}>{title}</Content>
              <ChannelName>{viewCount} Watching WorldWide</ChannelName>
            </DespContainer>
          </VideoItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GameCard
