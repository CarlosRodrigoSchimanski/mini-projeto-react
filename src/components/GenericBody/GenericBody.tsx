import { GenericBodyStyled } from "./styles/Body.styled.ts"
import { HeaderStyled } from "./styles/Header.styled.ts"
import { FooterStyled } from "./styles/Footer.styled.ts"
import { ButtonStyled } from "./styles/ButtonContent.styled.ts"
import { UperCardStyled } from "./styles/UperCard.styled.ts"

import logo from './assets/logoArnia.png'
import visa from './assets/visa.png'
import masterCard from './assets/mastercard.png'
import boleto from './assets/boleto.png'
import hipercard from './assets/hipercard.png'



type GenericBodyProps = {
  pageTitle:string
  showCont: boolean
  couter: number
  children: React.ReactNode
  positionButton?: 'flex-start' | 'center' | 'flex-end'
  onButtonClick?: () => void
  buttonText?: string
  showTotal: boolean
};


const GenericBody = ( {children, pageTitle,couter=0, showCont, positionButton = 'center', onButtonClick, buttonText, showTotal}:GenericBodyProps ) => {
  return (
    <GenericBodyStyled>
        <HeaderStyled>
            <img src={logo} alt="Logo Arnia" />
            <h2>Loja Virtual</h2>
        </HeaderStyled>

        <UperCardStyled>
          <h2>{pageTitle}</h2>
          {showCont && <span>{couter}</span>}
        </UperCardStyled>

        { children }

        <ButtonStyled pos={positionButton}>
          {showTotal && <p>Total: R$20,00</p>}
          <button onClick={onButtonClick}>{buttonText}</button>
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