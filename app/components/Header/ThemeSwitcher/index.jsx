import { Switch as MSwitch} from '@mantine/core';

const TheneSwitcher = () =>  {
  const darkEmoji = "ON"
  const lightEmoji = "OFF"
  return <MSwitch onLabel={darkEmoji} offLabel={lightEmoji} />;
}

export default TheneSwitcher