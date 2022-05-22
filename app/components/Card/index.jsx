import { Card as MCard, Image, Center } from "@mantine/core";
import Button from "../Button";
import { CardContainer, CardStarContainer, TextDescriptionContainer, TextNameContainer, ImageContainer } from "./styled";
import StarIcon from "../../assets/star.svg";

const Card = ({avatar_url="https://avatars.githubusercontent.com/u/13142323?v=4", name="redux", description= "Predictable state container for JavaScript apps", stargazers_count = 58063, open_issues = 52, html_url = "", condition}) => {
    console.log(condition)
    return(
        <CardContainer as={MCard} $border={condition}>
            <CardStarContainer>
                <ImageContainer src={StarIcon}/>
                {stargazers_count}
            </CardStarContainer>
            <MCard>
                <MCard.Section>
                    <Image fit="contain" src={avatar_url} height={160} alt="avatar_url" />
                </MCard.Section>
        
                <TextNameContainer weight={500}>
                        {name}
                </TextNameContainer>
                <TextDescriptionContainer>
                    {description}
                </TextDescriptionContainer>

                <Center>
                    <Button type={4} onClick={() => window.open(html_url)} text="Go To Github Page"/>
                </Center>
            </MCard>
      </CardContainer>
    )
}
export default Card