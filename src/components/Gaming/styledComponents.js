import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'

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

export const GamingTitleContainer = styled.div`
  background-color: ${props => (props.$isDark ? '#313131' : '#f1f1f1')};
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 576px) {
    padding: 10px;
  }
`

export const IconContainer = styled.div`
  background-color: #000000;
  border-radius: 50px;
  padding: 10px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GamingIcon = styled(SiYoutubegaming)`
  color: #ff0000;
  width: 24px;
  height: 24px;

  @media (max-width: 576px) {
    width: 18px;
    height: 18px;
  }
`

export const GamingTitle = styled.h1`
  color: ${props => (props.$isDark ? '#ffffff' : '#181818')};
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`

export const UnorderedListItem = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
  gap: 16px;
  justify-content: flex-start;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`

export const FailureImg = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 400px;
  }
`

export const FailureTxt = styled.h1`
  color: ${props => (props.$isDark ? '#ffffff' : '#000000')};
  font-size: 24px;
  font-family: 'Roboto';
  margin-bottom: 8px;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`

export const FailureDesp = styled.p`
  color: ${props => (props.$isDark ? '#d7dfe9' : '#475569')};
  font-size: 16px;
  font-family: 'Roboto';
  margin-bottom: 12px;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`

export const RetryBtn = styled.button`
  margin-top: 10px;
  background-color: #4f46e5;
  color: ${props => (props.$isDark ? '#000000' : '#ffffff')};
  border-radius: 7px;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  font-family: 'Roboto';
  cursor: pointer;

  @media (max-width: 576px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 120px;
  }
`
