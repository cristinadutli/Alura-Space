import styled from "styled-components"
import Titulo from "../../Titulo"
import fotos from "./fotos-populares.json"




const ColumnaFotos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
`

const Imagen = styled.img`
    max-width: 212px;
    border-radius: 20px;
`
const Boton = styled.button`
    background-color: transparent;
    color: #FFFFFF;
    border: 2px solid;
    border-color: #C98CF1;
    border-radius: 10px;
    width: 100%;
    padding: 12px 20px;
    font-size: 20px;
    margin-top: 16px;
    cursor: pointer;




   

`

const Populares = () => {
    return (
        <section>
            <Titulo $align='center'>Populares</Titulo>
            <ColumnaFotos>
                {fotos.map(foto => <Imagen key={foto.id} src={foto.path} alt={foto.alt}/>)}
            </ColumnaFotos>
           <Boton>Ver Mas</Boton>
        </section>
    )
}

export default Populares