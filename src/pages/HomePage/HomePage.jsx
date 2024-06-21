import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPostsOrig from "../../components/FeedPosts/FeedPostsOrig";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
	return (
		<Container p={0} maxW="100vw" m={0}>
			<Box
			px={0}
			mx={0}
			height={{base: "90vh", md: "80vh"}}
			width={{base: "100vw", md: "70vw"}}
			
			bottom={{base: "10vh", md: "60px"}}

			// left={{ base: 0, md: "30%" }} 
			// transform={{ base: "none", md: "translateX(-30%)" }} 

			left={{ base: 0, md: "0%" }} 
			transform={{ base: "none", md: "none" }} 
      
		>

			<Flex gap={0} px={0} mx={0}>
				<Box flex={2} py={0} px={0}>
					<FeedPostsOrig />
				</Box>
				<Box px={0} ml={0} flex={3} mr={{base: "none", md: "20"}} display={{ base: "none", lg: "block" }} maxW={{base: "200px", lg: "300px"}}>
					<SuggestedUsers />
				</Box>
			</Flex>
			</Box>
		</Container>
	);
};

export default HomePage;
