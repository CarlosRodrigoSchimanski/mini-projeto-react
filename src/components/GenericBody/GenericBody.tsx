import { GenericBodyStyled } from "./body.styled.ts"
import { HeaderStyled } from "./header.styled"
import { FooterStyled } from "./Footer.styled.ts"
import logo from '../../assets/logoArnia.png'
import visa from '../../assets/visa.png'
import masterCard from '../../assets/mastercard.png'
import boleto from '../../assets/boleto.png'
import hipercard from '../../assets/hipercard.png'
import { ButtonStyled } from "./ButtonContent.styled.ts"

type GenericBodyProps = {
  children: React.ReactNode
}

const GenericBody = ( {children}:GenericBodyProps ) => {
  return (
    <GenericBodyStyled>
        <HeaderStyled>
            <img src={logo} alt="Logo Arnia" />
            <h1>Loja Virtual</h1>
        </HeaderStyled>

        { children }

        <ButtonStyled>
          <p>Total: R$20,00</p>
          <button>Voltar ao topo</button>
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