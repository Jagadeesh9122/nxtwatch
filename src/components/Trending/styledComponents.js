import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'

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

export const TrendingTitleContainer = styled.div`
  background-color: ${props => (props.$isDark ? '#313131' : '#f1f1f1')};
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const IconContainer = styled.div`
  background-color: #000000;
  border-radius: 50px;
  padding: 12px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TrendingIcon = styled(FaFire)`
  color: #ff0000;
  width: 20px;
  height: 20px;

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`

export const TrendingTitle = styled.h1`
  color: ${props => (props.$isDark ? '#ffffff' : '#181818')};
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

export const UnorderedListItem = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
  gap: 16px;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const FailureImg = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`

export const FailureTxt = styled.h1`
  color: ${props => (props.$isDark ? '#ffffff' : '#000000')};
  font-size: 26px;
  font-family: 'Roboto';
  margin-bottom: 0;
  text-align: center;
`

export const FailureDesp = styled.p`
  color: ${props => (props.$isDark ? '#ffffff' : '#000000')};
  font-size: 18px;
  font-family: 'Roboto';
  margin-bottom: 0;
  text-align: center;
`

export const RetryBtn = styled.button`
  margin-top: 10px;
  background-color: #4f46e5;
  color: ${props => (props.$isDark ? '#000000' : '#ffffff')};
  border-radius: 7px;
  border: 0;
  width: 120px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Roboto';

  @media (max-width: 480px) {
    width: 100px;
    padding: 8px;
  }
`
