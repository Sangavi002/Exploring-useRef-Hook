import { useEffect, useRef } from 'react'

function FocusableInputField() {
    let data = useRef(null)

    useEffect(() => {
        data.current.focus()
    },[])
    
    return(
        <>
            <div>
                <input type="text" ref={data} />
            </div>
        </>
    )
    
}

export default FocusableInputField