import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const RoutesContainer = styled.div`
  width: 15%;
  min-width: 200px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: row;
    margin-left: 30px;
    width: 100%;
    height: auto;
    padding: 5px 0;
    position: relative;
    border-top: 0px solid ${props => (props.$isDark ? '#383838' : '#dcdcdc')};
  }
`

export const RouteInnerContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`

export const RouteContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: transparent;
  }

  @media (max-width: 768px) {
    padding: 10px;
    flex-direction: column;
    justify-content: center;
  }
`

export const LinkItem = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100%;
`

export const RouteIcon = styled.div`
  font-size: 20px;
  color: ${props => (props.$isActive ? '#ff0b37' : '#64748b')};
  margin-right: 12px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 4px;
  }
`

export const RouteName = styled.p`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  color: ${props => (props.$isActive ? '#ff0b37' : '#64748b')};

  @media (max-width: 768px) {
    display: none;
  }
`

export const ContactContainer = styled.div`
  padding: 20px;
  border-top: 1px solid ${props => (props.$isDark ? '#383838' : '#dcdcdc')};

  @media (max-width: 768px) {
    display: none;
  }
`

export const ContactUs = styled.p`
  font-size: 16px;
  color: ${props => (props.$isDark ? '#ffffff' : '#616e7c')};
  font-weight: 500;
  margin-bottom: 12px;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`

export const SocialMediaIcon = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`

export const ContactUsDesp = styled.p`
  font-size: 14px;
  color: ${props => (props.$isDark ? '#d7dfe9' : '#475569')};
  font-family: 'Roboto', sans-serif;
  margin: 0;
`
