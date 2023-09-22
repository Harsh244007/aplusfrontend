import React from 'react';
import { createPortal } from 'react-dom';
import { Box, Image, CloseButton } from '@chakra-ui/react';

const ImageModal = ({ isOpen, imageUrl, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      cursor={"pointer"}
      height="100%"
      backgroundColor="rgba(0, 0, 0, 0.8)"
      display="flex"
      backdropFilter="blur(10px)"
      justifyContent="center"
      alignItems="center"
      onClick={()=>onClose()}
      zIndex="10040"
    >
      <CloseButton
        position="absolute"
        top="10px"
        width={"50px"}
        border={"1px solid brown"}
        borderRadius={"50%"}
        height={"50px"}
        right="10px"
        className='ModalCloseButton'
        color={"white"}
        onClick={onClose}
      />
      <Box position="relative" width="80%" maxWidth="800px" 
      zIndex="10" onClick={()=>{}}>
        <Image src={imageUrl} alt="Product" className='modalImage' />
      </Box>
      <style>
      {`.ModalCloseButton svg{
        width:25px;
        height:25px
      }
      .modalImage{
        
      }
      `}
      </style>
    </Box>,
    document.getElementById('modal-root') // Create a div with the id 'modal-root' in your index.html file
  );
};

export default ImageModal;
