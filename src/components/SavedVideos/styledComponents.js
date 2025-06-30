import styled from 'styled-components'

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

export const UnorderedListItem = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 20px 0 0;

  @media (max-width: 768px) {
    gap: 16px;
  }
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
`

export const FailureImg = styled.img`
  width: 400px;
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 220px;
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
  color: ${props => (props.$isDark ? '#cccccc' : '#475569')};
  font-size: 16px;
  font-family: 'Roboto';
  max-width: 460px;
  margin-bottom: 0;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`

export const RetryBtn = styled.button`
  margin-top: 16px;
  background-color: #4f46e5;
  color: ${props => (props.$isDark ? '#000000' : '#ffffff')};
  border-radius: 6px;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-family: 'Roboto';
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 576px) {
    width: 100%;
    max-width: 180px;
  }
`
