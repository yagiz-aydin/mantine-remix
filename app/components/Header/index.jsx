import GithubIcon from "../../assets/github.svg";
import {HeaderContainer, GithubIconContainer} from "./styled";

const Header = () => {
    return(
        <HeaderContainer onClick={() => window.open("https://github.com/yagiz-aydin/mantine-remix")}>
            <GithubIconContainer src={GithubIcon}/>
        </HeaderContainer>
    )
}

export default Header