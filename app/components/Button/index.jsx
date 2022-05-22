import { Button as MButton } from '@mantine/core';
import { ButtonContainer } from "./styled";

const Button = ({text, onClick, type, loading, margin}) => {
  
  const schemas = {
        0: { from: 'indigo', to: 'cyan' },
        1: { from: 'teal', to: 'lime', deg: 105 },
        2: { from: 'orange', to: 'red' },
        3: { from: '#ed6ea0', to: '#ec8c69', deg: 35 },
        4: { from: '#ecc58c', to: '#e3972f', deg: 105 }
  }

  return (
    <ButtonContainer $margin={margin}>
        <MButton 
          radius="xl"
          size="xl" variant="gradient" gradient={schemas[type]} onClick={onClick} loading={loading}>
        {text}
      </MButton>
    </ButtonContainer>
  )
}

export default Button;