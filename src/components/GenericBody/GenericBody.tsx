import { GenericBodyStyled } from "./styles/Body.styled.ts"
import { HeaderStyled } from "./styles/Header.styled.ts"
import { FooterStyled } from "./styles/Footer.styled.ts"
import { ButtonStyled } from "./styles/ButtonContent.styled.ts"

import logo from '../../assets/logoArnia.png'
import visa from '../../assets/visa.png'
import masterCard from '../../assets/mastercard.png'
import boleto from '../../assets/boleto.png'
import hipercard from '../../assets/hipercard.png'


type GenericBodyProps = {
  children: React.ReactNode;
  positionButton?: 'flex-start' | 'center' | 'flex-end';
  onButtonClick?: () => void;
};


const GenericBody = ( {children, positionButton = 'center', onButtonClick}:GenericBodyProps ) => {
  return (
    <GenericBodyStyled>
        <HeaderStyled>
            <img src={logo} alt="Logo Arnia" />
            <h1>Loja Virtual</h1>
        </HeaderStyled>

        { children }

        <ButtonStyled pos={positionButton}>
          <p>Total: R$20,00</p>
          <button onClick={onButtonClick}>Voltar ao topo</button>
        </ButtonStyled>

        <FooterStyled>
          <div>
            <p>Formas de pagamento</p>
            <img src={visa} alt="Logo Visa" />
          </div>
          <img src={masterCard} alt="Logo Master Card" />
          <img src={boleto} alt="Boleto" />
          <img src={hipercard} alt="Hipercard" />
        </FooterStyled>
    </GenericBodyStyled>
  )
}

export default GenericBody