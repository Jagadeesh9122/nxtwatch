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
  background-color: ${props => (props.$isDark ? '#181818' : '#ffffff')};

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

export const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #1e293b;

  @media (max-width: 576px) {
    font-size: 24px;
  }
`

export const BannerItem = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 16px;

  @media (max-width: 576px) {
    padding: 12px;
  }
`

export const CloseBtn = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  align-self: flex-end;
`

export const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
`

export const BannerLogo = styled.img`
  width: 150px;
  height: 50px;

  @media (max-width: 576px) {
    width: 120px;
    height: auto;
  }
`

export const BannerDesp = styled.p`
  color: #231f20;
  font-size: 18px;
  font-family: 'Roboto';
  width: 40%;

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 576px) {
    width: 100%;
    font-size: 16px;
  }
`

export const BannerBtn = styled.button`
  background-color: transparent;
  color: #231f20;
  border: 1px solid #231f20;
  padding: 6px 12px;
  width: 120px;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 576px) {
    width: 100px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  margin-top: 15px;

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const InputElement = styled.input`
  background-color: #ffffff;
  color: #1e293b;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid #cccccc;
  width: 70%;
  font-size: 14px;

  @media (max-width: 576px) {
    width: 65%;
  }
`

export const SearchButton = styled.button`
  background-color: #ebebeb;
  border-radius: 2px;
  border: 1px solid #cccccc;
  cursor: pointer;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const UnorderedListItem = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 15px 0 0 0;
  gap: 24px;
  justify-content: flex-start;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
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
  width: 120px;
  padding: 8px 12px;
  text-align: center;
  cursor: pointer;

  @media (max-width: 576px) {
    width: 100%;
  }
`
