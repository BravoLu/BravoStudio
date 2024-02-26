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
import useConfig  from "../useConfig";

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
    >
      <Accordion defaultIndex={[0]} allowToggle justifyContent="center">
        {Config.config?.photoCategory.map((category) => (
          <AccordionItem key={category.title}>
            <AccordionButton
              p={4}
              borderRadius="md"
              _hover={{ bg: "gray.100", cursor: "pointer" }}
            >
              <Box flex="1" textAlign="center">
                <Text>{category.title}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <VStack align="start" spacing={2}>
                {category.subcategories.map((subcategory) => (
                  <Button
                    // fontSize={{ base: 8, sm: 8, md: 15, lg: 20 }}
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
