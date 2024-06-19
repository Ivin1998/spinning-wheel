import React, { createContext, useContext, useState } from 'react';

export const Namecontext = createContext();

const Context = ({children}) => {
    const [name, setName] = useState('');
    const [nameList, setNameList] = useState([]);
    const [data, setData] = useState([]);
    const [color, setColor] = useState('');
    const [colorList,setColorList] = useState([]);

  return (
    <Namecontext.Provider value={{name,setName,nameList,setNameList,data,setData,color,setColor, colorList, setColorList}}>
        {children}
    </Namecontext.Provider>
  )
}

export function useNameContext() {
    return useContext(Namecontext);
  }

export default Context;
