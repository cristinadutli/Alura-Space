import styled from "styled-components";
import Imagen from "../Galeria/Imagen";
import BotonIcono from "../BotonIcono";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 280px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  height: 660px;
  display: flex;
  justify-content: center;
 
`;
const ModalZoom = ({ foto,alCerrar, alAlternarFavorito }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay />
          <DialogEstilizado open={!!foto} onClose={alCerrar}>
            <Imagen foto={foto} expandida={true}
            alAlternarFavorito={alAlternarFavorito} />
            <form method="dialog">
              <BotonIcono formMethod="dialog">
                <img src="./iconos/cerrar.png" alt="Icono de cerrar"/>

              </BotonIcono>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
