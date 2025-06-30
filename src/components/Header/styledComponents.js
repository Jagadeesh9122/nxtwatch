import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 100%;
  background-color: ${props => (props.$isDark ? '#181818' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 40px;
  box-shadow: ${props =>
    props.$isDark ? 'none' : '0 2px 4px rgba(0,0,0,0.1)'};

  @media (max-width: 576px) {
    padding: 10px 16px;
  }
`

export const Watch = styled.img`
  width: 120px;
  height: auto;

  @media (max-width: 576px) {
    width: 100px;
  }
`

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 576px) {
    gap: 12px;
  }
`

export const ThemeButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
`

export const ThemeIcon = styled.img`
  width: 24px;
  height: 24px;
`

export const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const LogOutBtn = styled.button`
  padding: 6px 12px;
  border: 1px solid ${props => (props.$isDark ? '#ffffff' : '#3b82f6')};
  background: transparent;
  border-radius: 6px;
  color: ${props => (props.$isDark ? '#ffffff' : '#3b82f6')};
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 576px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`

export const RoutesContainer = styled.div`
  width: 15%;
  background-color: ${props => (props.$isDark ? '#212121' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 20px 0;
  height: 100vh;

  @media (max-width: 768px) {
    width: 30%;
  }

  @media (max-width: 576px) {
    display: none;
  }
`

export const RouteInnerContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const RouteContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.$isDark ? '#383838' : '#e2e8f0')};
  }
`

export const LinkItem = styled.div`
  text-decoration: none;
`

export const RouteIcon = styled.div`
  font-size: 20px;
  color: ${props => (props.$isDark ? '#ffffff' : '#616e7c')};
  margin-right: 12px;
  display: flex;
  align-items: center;
`

export const RouteName = styled.p`
  font-size: 16px;
  color: ${props => (props.$isDark ? '#ffffff' : '#383838')};
  font-family: 'Roboto', sans-serif;
  margin: 0;
`

export const ContactContainer = styled.div`
  padding: 20px;
  border-top: 1px solid ${props => (props.$isDark ? '#383838' : '#dcdcdc')};

  @media (max-width: 576px) {
    padding: 16px;
  }
`

export const ContactUs = styled.h1`
  font-size: 16px;
  color: ${props => (props.$isDark ? '#ffffff' : '#616e7c')};
  font-weight: 500;
  margin-bottom: 12px;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`

export const SocialMediaIcon = styled.img`
  width: 24px;
  height: 24px;
`

export const ContactUsDesp = styled.p`
  font-size: 14px;
  color: ${props => (props.$isDark ? '#d7dfe9' : '#475569')};
  font-family: 'Roboto', sans-serif;
  margin: 0;
`

export const PopUpContainer = styled.div`
  border-radius: 7px;
  background-color: ${props => (props.$isDark ? '#313131' : '#ffffff')};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 320px;
`

export const PopUpTxt = styled.p`
  color: ${props => (props.$isDark ? '#ffffff' : '#00306e')};
  font-size: 16px;
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 20px;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

export const CancelConfirmBtn = styled.button`
  background-color: ${props => (props.$isConfirm ? '#3b82f6' : 'transparent')};
  color: ${props => (props.$isConfirm ? '#ffffff' : '#64748b')};
  border: ${props => (props.$isConfirm ? '0px' : '1px solid  #64748b')};
  padding: 8px 16px;
  border-radius: 7px;
  cursor: pointer;
  font-size: 14px;
`
