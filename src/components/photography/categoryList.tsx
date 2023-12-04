import {
  Box,
  VStack,
  Text,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useConfig } from "../configContext";

const CategoryList = ({
  selectedCategory,
  onSelect,
}: {
  selectedCategory: string;
  onSelect: (c: React.SetStateAction<string>) => void;
}) => {
  const Config = useConfig();

  return (
    <VStack
      spacing={4}
      width="10%"
      mt="7%"
      position="fixed"
      top="0"
      left="0"
      zIndex="999"
      bgColor="white"
    >
      <Accordion defaultIndex={[0]} allowToggle>
        {Config.config?.photoCategory.map((category) => (
          <AccordionItem key={category.title} >
            <AccordionButton
              p={4}
              borderRadius="md"
              _hover={{ bg: "gray.100", cursor: "pointer" }}
            >
              <Box flex="1" textAlign="left">
                <Text>{category.title}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <VStack align="start" spacing={2}>
                {category.subcategories.map((subcategory) => (
                  <Button
                    key={subcategory}
                    variant="ghost"
                    size="sm"
                    onClick={() => onSelect(subcategory)}
                    bgColor={
                      selectedCategory === subcategory ? "gray.100" : "white"
                    }
                  >
                    {subcategory}
                  </Button>
                ))}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </VStack>
  );
};

export default CategoryList;
