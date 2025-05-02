import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relavance
      </MenuButton>
      <MenuList>
        <MenuItem>Relavance</MenuItem>
        <MenuItem>Relavance 2</MenuItem>
        <MenuItem>Relavance 3</MenuItem>
        <MenuItem>Relavance 4</MenuItem>
        <MenuItem>Relavance 5</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
