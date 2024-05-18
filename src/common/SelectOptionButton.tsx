import { MouseEvent } from 'react';


const SelectOptionButton = (props: {optionKey: string, value: string}) => {
  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Do something
    console.log("cliked ", props.optionKey, ": ", props.value)
  };

  return <button onClick={handleMouseEvent}>{props.value} </button>;
};

export default SelectOptionButton;