import type { Pages } from '../../types/pages';
import GenericBody from '../GenericBody/GenericBody'
import { products } from '../../db/db';
import { CardHome } from './styles/CardHome';
import { ContainerCard } from './styles/ContainerCard';
import { MarkButton } from './styles/MarkButton';
import { useState } from 'react';

type HomeProps = {
  onNavigate: (newPage:Pages) => void;
}

const Home = ({onNavigate}:HomeProps) => {
  const [productList, setProductList] = useState(products.map(product => ({...product, marked: false})))

  const toggleSelect = (id: number) => {
    setProductList(marked =>
      marked.map(product => (product.id === id ? { ...product, marked: !product.marked } : product
    )))}
  
  const selectedCount = productList.filter(product => product.marked).length;



  return (
    <GenericBody
    pageTitle="Produtos"
    showCont={true}
    couter={selectedCount}
    positionButton='flex-end'
    onButtonClick={() => onNavigate("carrinho")}
    buttonText="Ir para Carrinho"
    showTotal = {false}>

      <ContainerCard>
        
        {productList.map((product) => (
            <CardHome key={product.id} >

                <img src={product.image} alt={product.name} width={200} />

                <MarkButton>
                  <button className={product.marked ? "active" : ""} onClick={() => toggleSelect(product.id)}/>
                  <span>Valor: R$ {product.price.toFixed(2)}</span>
                </MarkButton>

            </CardHome>
        ))}

      </ContainerCard>

    </GenericBody>
    
  )
}

export default Home