import {HStack, VStack, Text, IconButton, } from '@chakra-ui/react';
import React from 'react';

import { FaInstagram,  FaGithub, FaLinkedin} from 'react-icons/fa'; // Import social media icons


const Footer = () => {
  return (
    <VStack p={'4'} shadow={'base'} bgColor={'blackAlpha.900'} spacing={4}>

<HStack spacing={2}>
  <IconButton
    as="a"
    href="https://github.com/your_github_account"
    target="_blank"
    aria-label="GitHub"
    icon={<FaGithub />}
    colorScheme="white"
    fontSize="xl"
    _hover={{
      color: 'grey.400', // Change color on hover
      fontSize: '2xl', // Increase font size on hover
    }}
  />
  <IconButton
    as="a"
    href="https://linkedin.com/in/your_linkedin_profile"
    target="_blank"
    aria-label="LinkedIn"
    icon={<FaLinkedin />}
    colorScheme="white"
    fontSize="xl"
    _hover={{
      color: 'blue.400', // Change color on hover
      fontSize: '2xl', // Increase font size on hover
    }}
  />
  <IconButton
   as="a"
   href="https://instagram.com/your_instagram_account"
   target="_blank"
   aria-label="Instagram"
   icon={<FaInstagram />}
   colorScheme="white"
   fontSize="xl"
   _hover={{
     color: 'red.700', // Change color on hover
     fontSize: '2xl', // Increase font size on hover
   }}
    
  />
</HStack>
      <Text color="white" fontSize="sm">
        © {new Date().getFullYear()} Developed By Jattin Kumar . All rights reserved.
      </Text>
    </VStack>
  );
}

export default Footer;
