import React from 'react';
import { Button } from '@chakra-ui/button';

export default function Btn({
  title, onClick, type = "action"
}) {
  return (
    <Button bg='#cadbee' color='white' className={(type)} onClick={onClick}>
      { title }
    </Button>
  )
}
