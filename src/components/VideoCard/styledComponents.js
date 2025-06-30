import styled from 'styled-components'

export const VideoItem = styled.li`
  width: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;
  text-decoration: none;
  margin: 10px;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 1024px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;

  @media (max-width: 480px) {
    padding: 8px;
  }
`

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 16px;

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px 12px 12px;

  @media (max-width: 480px) {
    padding: 0 8px 8px 8px;
  }
`

export const Content = styled.p`
  color: ${props => (props.$isDark ? '#ffffff' : '#0f0f0f')};
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  margin: 0 0 8px 0;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`

export const ChannelName = styled.p`
  color: #606060;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  margin: 4px 0;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`

export const ViewsDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  font-size: 13px;
  color: #606060;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`

export const LinkItem = styled.div`
  text-decoration: none;
`
