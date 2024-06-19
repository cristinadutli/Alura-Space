import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tag from "./Tags";
import Imagen from "./Imagen";


const GaleriaConteiner = styled.div`
  display: flex;
 gap: 24px;
`;
const SeccionFluida = styled.section`
  flex-grow: 1;
`;

const ImagenesConteiner = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({ fotos = [], setTag , alSeleccionarFoto, alAlternarFavorito}) => {
  return (
    <>
       <Tag setTag={setTag} />
      <GaleriaConteiner>
        <SeccionFluida>
          <Titulo>Navegue por la galeria</Titulo>
          <ImagenesConteiner>
            {fotos.map(foto => <Imagen
            alAlternarFavorito={alAlternarFavorito}
                alSolicitarZoom={alSeleccionarFoto}
                key={foto.id}
                foto={foto} />)
           }
          </ImagenesConteiner>
        </SeccionFluida>
        <Populares />
      </GaleriaConteiner>
    </>
  );
};

export default Galeria;
