import styled from 'styled-components'

export const VideoItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;
  text-decoration: none;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-4px);
  }

  @media (min-width: 576px) {
    width: 48%;
    margin-right: 2%;
  }

  @media (min-width: 768px) {
    width: 31%;
    margin-right: 2%;
  }

  @media (min-width: 1024px) {
    width: 23%;
    margin-right: 1%;
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 1px solid #e0e0e0;
`

export const DespContainer = styled.div`
  padding: 12px;
`

export const Content = styled.p`
  color: ${props => (props.$isDark ? '#ffffff' : '#0f0f0f')};
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  margin: 0 0 8px 0;
  font-weight: 500;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`

export const ChannelName = styled.p`
  color: #606060;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  margin: 4px 0;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`

export const LinkItem = styled.div`
  text-decoration: none;
`
