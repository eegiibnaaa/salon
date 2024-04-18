import React, { createContext, useState } from "react";

const ProviderContext = createContext();

const Provider = (props) => {
  const [cal, setCal] = useState(false);
  const [calval, setCalVal] = useState(null);
  const [tsag, setTsag] = useState("");
  const [product, setProduct] = useState("");

  const clear = () => {
    setCal(false);
    setCalVal(null);
    setTsag("");
    setProduct("");
  };
  return (
    <ProviderContext.Provider
      value={{
        cal,
        setCal,
        tsag,
        setTsag,
        calval,
        setCalVal,
        product,
        setProduct,
        clear,
      }}
    >
      {props.children}
    </ProviderContext.Provider>
  );
};

export { Provider, ProviderContext };
