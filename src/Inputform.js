import React from 'react';
import { FaPlus } from "react-icons/fa";
import {
  FormControl,
  Input, Box
} from '@chakra-ui/react';
import { useNameContext } from './context.js';


const Inputform = () => {

  const { name, setName, nameList, setNameList, setData,color,setColor, setColorList, colorList } = useNameContext();

    // Function to generate a random hex color
    const generateRandomColor = () => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
      setColor(randomColor);
      setColorList([...colorList, color])

    };
  const handleIconClick = () => {
    generateRandomColor();
    if (name.trim() !== '') {
      generateRandomColor();
      setNameList([...nameList, name]);
      setName('');
      setData([...nameList, name]);
    }
  }
console.log(nameList);

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleIconClick();
    }
  };
  return (
    <div>
      <h3 style={{float: 'left'}}>Inputs </h3>&nbsp;<span>[{nameList.length}] </span>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="flex-end"
        p={3}
        bg="#E8E8E8"
        w="100%"
        h="100%"
        borderRadius="5px"
        overflowY="hidden"
      >
        <FormControl position="relative" >
          <Input
          
            placeholder="Enter your text here"
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleEnterKey}
            value={name}
            style={{ width: "100%" }}

          />
          <span
            style={{
              position: "absolute",
              right: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer"
            }}
          >
            <FaPlus onClick={handleIconClick} />
          </span>
        </FormControl>
      </Box>
      <div className='namelists'>
      {nameList.length > 0 ? nameList.map((name,index) => (
        <li key={index}>{name}</li>
      )) : 'No names available'}

</div>
    </div>
  )
}

export default Inputform;
