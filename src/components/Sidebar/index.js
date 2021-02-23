import React from 'react'
import {SidebarContainer,Icon,CloseIcon, SidebarWrapper,SidebarLink,SideBtnWrap,SidebarRoute,SidebarMenu,NavLogo} from './SidebarElements'
import logo from './mpartial.png'
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
             <NavLogo to='/'>
             <img src={logo} width="220" alt="logo"/>
                </NavLogo>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        Ground-Truth-Data

                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        How It Works


                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Fee Structure

                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Example Deliverables

                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Submission Portal

                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        Contact Us

                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute tp="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
