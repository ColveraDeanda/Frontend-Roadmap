import { useEffect } from "react"


const Message = () => {

    useEffect(() => {

        const onMouseMove = ({x, y}) => {
            console.log(x, y);
        }

        window.addEventListener('mouseover', onMouseMove)

        return () => { //* El return se ejecutara cuando el componente se desmonta.
            //* Con esto se evitan leaks memory o fugas en memoria.
            window.removeEventListener('mouseover', onMouseMove);
        };
    }, []);

  return (
    <>
        <h3>Usuario ya existe</h3>
    </>
  )
}

export default Message