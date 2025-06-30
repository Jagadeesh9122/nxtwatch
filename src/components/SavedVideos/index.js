import {Component} from 'react'

import Sidebar from '../Sidebar'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import TrendingVideoCard from '../TrendingVideoCard'
import {
  LayoutContainer,
  MainContent,
  UnorderedListItem,
  FailureContainer,
  FailureImg,
  FailureTxt,
  FailureDesp,
  SidebarContainer,
  SidebarContainerMobile,
} from './styledComponents'

class SavedVideos extends Component {
  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <>
            <FailureContainer>
              <FailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <FailureTxt $isDark={isDarkTheme}>
                No saved videos found
              </FailureTxt>
              <FailureDesp $isDark={isDarkTheme}>
                You can save your videos while watching them
              </FailureDesp>
            </FailureContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSavedVideo = () => {
    const {savedVideos} = this.context
    return (
      <>
        <UnorderedListItem>
          {savedVideos.map(eachItem => (
            <TrendingVideoCard key={eachItem.id} videoDetails={eachItem} />
          ))}
        </UnorderedListItem>
      </>
    )
  }

  render() {
    const {isDarkTheme, savedVideos} = this.context
    return (
      <LayoutContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <MainContent $isDark={isDarkTheme} data-testid="savedVideos">
          <Header />
          {savedVideos.length > 0
            ? this.renderSavedVideo()
            : this.renderFailureView()}
        </MainContent>
        <SidebarContainerMobile $isDark={isDarkTheme}>
          <Sidebar />
        </SidebarContainerMobile>
      </LayoutContainer>
    )
  }
}
SavedVideos.contextType = ThemeContext
export default SavedVideos
