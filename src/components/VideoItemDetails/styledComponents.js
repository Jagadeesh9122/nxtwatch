import styled from 'styled-components'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs'

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`

export const SidebarContainer = styled.div`
  display: flex;

  @media (max-width: 576px) {
    display: none;
  }
`

export const SidebarContainerMobile = styled.div`
  display: none;

  @media (max-width: 576px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: ${props => (props.$isDark ? '#181818' : '#ffffff')};
    border-top: 1px solid #ccc;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
  }
`

export const MainContent = styled.div`
  flex: 1;
  padding: 24px;
  padding-bottom: 80px;
  overflow-y: auto;
  background-color: ${props => (props.$isDark ? '#181818' : '#f9f9f9')};

  @media (max-width: 576px) {
    padding: 16px;
    padding-bottom: 80px;
  }
`
export const VideoPlayerContainer = styled.div`
  align-self: center;
  margin-top: 20px;
  width: 80%;
  height: 700px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

export const Title = styled.p`
  color: ${props => (props.$isDark ? '#ffffff' : '#181818')};
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: left;
  margin-bottom: 0px;
`

export const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const ViewsDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const ViewDateContent = styled.p`
  color: ${props => (props.$isDark ? '#e2e8f0' : '#181818')};
  font-size: 14px;
  font-family: 'Roboto';
  padding-right: 15px;
`

export const OptionContainer = styled(ViewsDateContainer)`
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
`

export const IconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0px;
  background-color: transparent;
`

export const StyledLikeBtn = styled(AiOutlineLike)`
  width: 18px;
  height: 18px;
  color: ${props => (props.$isActive ? '#2563eb' : '#64748b')};
  margin-right: 10px;
`

export const StyledDislikeBtn = styled(AiOutlineDislike)`
  width: 18px;
  height: 18px;
  color: ${props => (props.$isActive ? '#2563eb' : '#64748b')};
  margin-right: 10px;
`

export const StyledSaveBtn = styled(BsBookmark)`
  width: 18px;
  height: 18px;
  color: ${props => (props.$isActive ? '#2563eb' : '#64748b')};
  margin-right: 10px;
`

export const IconName = styled.p`
  color: ${props => (props.$isActive ? '#3b82f6' : '#94a3b8')};
  font-size: 14px;
  font-family: 'Roboto';
  margin: 0;
`

export const Line = styled.hr`
  width: 100%;
  border: ${props =>
    props.$isDark ? '1px solid #ffffff' : '1px solid #181818'};
  margin-bottom: 10px;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 10px;
`

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`

export const ChannelContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ChannelName = styled.h1`
  color: ${props => (props.$isDark ? '#ffffff' : '#181818')};
  font-size: 14px;
  font-family: 'Roboto';
  margin: 0 0 3px 0;
`

export const SubscriberCount = styled.p`
  margin: 0;
  color: ${props => (props.$isDark ? '#ffffff' : '#181818')};
  font-size: 12px;
  font-family: 'Roboto';
`

export const Description = styled.p`
  color: ${props => (props.$isDark ? '#ffffff' : '#181818')};
  font-size: 16px;
  font-family: 'Roboto';
  padding-left: 40px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const FailureImg = styled.img`
  width: 400px;
  height: 400px;

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`

export const FailureTxt = styled.h1`
  color: ${props => (props.$isDark ? '#ffffff' : '#000000')};
  font-size: 26px;
  font-family: 'Roboto';
  margin-bottom: 0px;
  text-align: center;
`

export const FailureDesp = styled.p`
  color: ${props => (props.$isDark ? '#ffffff' : '#000000')};
  font-size: 18px;
  font-family: 'Roboto';
  text-align: center;
`

export const RetryBtn = styled.button`
  margin-top: 10px;
  background-color: #4f46e5;
  color: ${props => (props.$isDark ? '#000000' : '#ffffff')};
  border-radius: 7px;
  border: 0px;
  width: 140px;
  padding: 8px;
  text-align: center;
  cursor: pointer;
`
