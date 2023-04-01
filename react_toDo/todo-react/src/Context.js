import React from "react";
import { useState, useEffect } from "react";

export const DataContext = React.createContext([]);

export function DataList(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
}