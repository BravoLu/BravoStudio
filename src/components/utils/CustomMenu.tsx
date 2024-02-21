import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface Option {
  desc: string;
  handleClick: () => void;
}

interface Props {
  title: string;
  options: Option[];
}

const CustomMenu = (props: Props) => {
  return (
    <Menu>
      <MenuButton bgColor="white" as={Button} rightIcon={<ChevronDownIcon />}>
        {props.title}
      </MenuButton>

      <MenuList>
        {props.options.map((v, k) => (
          <MenuItem bgColor="white" key={k}>
            <Button bgColor="white" onClick={v.handleClick}>
              {v.desc}
            </Button>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CustomMenu;
