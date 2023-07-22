import { Box, Text } from "@chakra-ui/react";
import ProductList from "../Components/ProductList";
import Navbar from "../Components/Navbar";

export default function ProductPage() {
  return (
   <div>
    <div>
      <Navbar/>
    </div>
    <div>
    <Box>
      <Text
        fontSize={{ base: "10px", md: "20px", lg: "30px" }}
        fontWeight={"600"}
        fontStyle={"revert-layer"}
        color={"RGBA(0, 0, 0, 0.64)"}
        margin={"auto"}
      >
      </Text>
      <br />
      <ProductList />
    </Box>
    </div>
   </div>
  );
}
