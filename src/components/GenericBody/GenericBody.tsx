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
import { MainContent } from "./styles/MainContent.styled.ts"

type GenericBodyProps = {
  pageTitle: string       // Título da página, exibido no UperCard
  showCont: boolean       // Controla se o contador de itens aparece
  couter?: number          // Quantidade de itens (ex: produtos selecionados ou no carrinho)
  children: React.ReactNode  // Conteúdo principal da página (cards, listas, etc)
  positionButton?: 'flex-start' | 'center' | 'flex-end' // Posição do botão
  onButtonClick?: () => void   // Função executada ao clicar no botão
  buttonText?: string          // Texto do botão
  showTotal: boolean           // Indica se o total deve ser exibido
  totalValue?: number          // Valor total (opcional, default 0)
}


const GenericBody = ({
  children,
  pageTitle,
  couter = 0,
  showCont,
  positionButton = 'center',
  onButtonClick,
  buttonText,
  showTotal,
  totalValue = 0, // <- valor padrão
}: GenericBodyProps) => {
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

      <MainContent>{children}</MainContent>

      <ButtonStyled pos={positionButton}>
        {showTotal && <p>Total: R$ {totalValue.toFixed(2)}</p>}
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
