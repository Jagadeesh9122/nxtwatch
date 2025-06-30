import styled from 'styled-components'

export const VideoItem = styled.li`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: ${props => (props.$isDark ? '#272727' : '#f1f5f9')};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 12px;
  }
`

export const ThumbnailImg = styled.img`
  width: 300px;
  height: 170px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 16px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: 12px;
  }
`

export const DespContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`

export const Content = styled.p`
  color: ${props => (props.$isDark ? '#ffffff' : '#0f0f0f')};
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px 0;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const ChannelName = styled.p`
  color: #aaa;
  font-size: 14px;
  margin: 2px 0;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`

export const ViewsDateContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  color: #aaa;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
  }
`
