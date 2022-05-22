import { Container as MContainer, Center } from '@mantine/core';
import { LayoutContainer } from "./styled";

const Layout = ({bgSpeed, children}) => {
  return (
    <LayoutContainer as={MContainer} bgSpeed={bgSpeed}>
        <div id="space">
            <div class="stars"></div>
            <div class="stars"></div>
            <div class="stars"></div>
            <div class="stars"></div>
            <Center className="center-container">
                {children}
            </Center>
        </div>
    </LayoutContainer>
  )
}

export default Layout;