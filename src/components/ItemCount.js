import { useState } from "react";

const ItemCount = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount (count - 1)
    };
    const onAdd = () => {
        setCount (count + 1)
    };

    return (
        <>
            <button onClick={handleClick}>-</button>        
            <h4>{count}</h4>
            <button onClick={onAdd}>+</button>
        </>
    )
}

export default ItemCount;