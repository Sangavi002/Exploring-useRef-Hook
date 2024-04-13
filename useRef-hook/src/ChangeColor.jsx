import { useRef,useState } from "react";

function ChangeColor() {
    let color = useRef(document.body)
    const [isBlack, setIsBlack] = useState(false);

    const handleColor = () => {
        if (isBlack) {
            color.current.style.backgroundColor = 'white';
        } else {
            color.current.style.backgroundColor = 'black';
        }
        setIsBlack(!isBlack);
    };

    return(
        <>
            <button onClick={handleColor}>Change Background Colour</button>
        </>
    );
}

export default ChangeColor