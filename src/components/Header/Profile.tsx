import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Henrique Guimarães</Text>
        <Text color="gray.300" fontSize="small">
          henrique@guimaraessantos.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Henrique Guimarães"
        src="https://github.com/henriqueogs.png"
      />
    </Flex>
  );
}
