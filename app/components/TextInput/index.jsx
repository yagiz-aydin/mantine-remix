import { useCallback } from "react";
import { TextInput as MTextInput } from "@mantine/core"
import { TextInputContainer } from "./styled";
import debounce from "lodash.debounce";

const TextInput = ({id, placeholder, setter, error}) => {
  const changeHandler = (event) => setter(id, event.target.value)
  
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 0), []);

  return(<TextInputContainer
      radius="xl"
      size="xl"
      as={MTextInput} 
      onChange={debouncedChangeHandler}
      error={error}
      placeholder={placeholder} />)
}

export default TextInput
