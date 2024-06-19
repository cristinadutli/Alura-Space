import styled from "styled-components"



const PieEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #04244F;
    padding: 22px;
    width: 100%;
    height: 72px;
    margin-top: 100px;
    box-sizing: border-box;
   

`
const IconoContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li{
        display: inline-block;
        margin-right: 32px;
    }
`
const PieTexto = styled.p`
    font-size: 16px;
    color: white;
    font-weight: 500;
    margin: 0;
`




const Pie = () =>{
    return(
        
        <PieEstilizado>
            <IconoContainer>
                <li>
                    <a href="https://www.facebook.com/ana.dutli/">
                        <img src="/img/redes/facebook.svg" alt="redes-facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/anadutli/">
                        <img src="/img/redes/instagram.svg" alt="redes-instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/img/redes/twitter.svg" alt="redes-twitter" />
                    </a>
                </li>


            </IconoContainer>
            <PieTexto>Desarrollado por Alura</PieTexto>


        </PieEstilizado>
       
    )
}
export default Pie