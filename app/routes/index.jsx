import { useEffect, useState } from "react";
import { ThemeProvider } from "../context";
import { Button, Layout, TextInput, Card } from "../components";
import { searchRepository } from "../agent";
import { HeadTextContainer, CardsContainer, StarIconContainer} from "./styled";
import StarIcon from "../assets/star.svg";

const HomePage = () => {
  // Datas
  const [inputFields, setInputFields] = useState({});
  const [payload, setPayload] = useState({});
  const [cards, setCards] = useState([]);

  // States
  const [loading, setLoading] = useState();
  const [validationFail, setValidationFail] = useState();

  // State Actıons
  const [nextStep, setNextStep] = useState();
  const [starsFast, setStarsFast] = useState();
 
  const inputFieldsSetter = (id, val) => setInputFields((prevState) => ({...prevState, [id]: val}))

  const validationConditions = (_fields) =>  Object.keys(_fields).length === 2 ||  Object.values(_fields).includes("")

  const validationCheck = () => {
    const validation = validationConditions(inputFields)
    if(validation){
      setValidationFail(false)
      return true;
    }
      else {
        setValidationFail(true)
        setLoading(false)
        return false;
      }
  }

  const onSubmit = (e) => {
    setLoading(true)
    const validation = validationCheck()
    if(validation){
      setStarsFast(true);
      const {firstLib, secondLib} = inputFields;
      getSearchRequest("firstLib", firstLib);
      getSearchRequest("secondLib", secondLib);
      return setTimeout(changeStepHandler, 5000)
    }
  }

  const getSearchRequest = async (id, searchParam) => {
    const result = await searchRepository(searchParam);
    return setPayload((prevState) => ({...prevState, [id]: result}))
  }

  useEffect(() =>  {
    changeStepHandler()
  },[payload])

  const changeStepHandler = () => {
    const validation = validationConditions(payload)
    if(validation){
      setNextStep(true);
      setStarsFast(false);
      createResults(payload);
    }
  }

  const destructPayload = (library) => {
    const {owner:{avatar_url}, name, description, stargazers_count, open_issues,  html_url } = library.data.items[0];
    return ({avatar_url, name, description, stargazers_count, open_issues, html_url})
  }

  const createResults = (payload) => {
    const {firstLib, secondLib} = payload;
    const libOne = destructPayload(firstLib);
    const libTwo = destructPayload(secondLib);
    setCards([libOne, libTwo]);
  }

  const CardsList = () => cards.map((card, key) => <Card key={key} {...card} condition={cards[key].stargazers_count > cards[key === 0 ? key+1 : key-1].stargazers_count}/>)

  return (<ThemeProvider>
      <Layout bgSpeed={starsFast}>
        {
            nextStep ? <CardsContainer><CardsList/></CardsContainer>
            : <>
                <StarIconContainer src={StarIcon}/>
                <HeadTextContainer>
                  <p class="down">Github <span></span></p>
                  <p class="slide">Star Battle</p>
                </HeadTextContainer>
                <TextInput id="firstLib" placeholder="First library/package" setter={inputFieldsSetter} error={validationFail && "Bumer"}/>
                <TextInput id="secondLib" placeholder="Second library/package" setter={inputFieldsSetter} error={validationFail && "Bumer"}/>
                <Button onClick={onSubmit} type="4" text="VS" loading={loading} margin="20px"/>
              </> 
        }
      </Layout>
  </ThemeProvider>);
}

export default HomePage;
