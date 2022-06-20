import './App.css'
import ProductCard from './ProductCard'
import disableResolver from './disableResolver'

function App() {

  return (
    <div className="container">
      <p className="container__product-tagline">Ты сегодня покормил кота?</p>
    <ProductCard 
    productType={"с фуа-гра"}
    productTypePortionNumber={"10"}
    productTypeGift={"мышь "}
    productAdditionalInformation={null}
    productWeight={"0,5"}
    productDescription={"Печень утки разварная с артишоками."}
    cardDisabled={disableResolver()} />
    <ProductCard 
    productType={"с рыбой"} 
    productTypePortionNumber={"40"}
    productTypeGift={"2 мыши "}
    productAdditionalInformation={null}
    productWeight={"2"}
    productDescription={"Головы щучьи с чесноком да свежайшая сёмгушка."}
    cardDisabled={disableResolver()} />
    <ProductCard 
    productType={"с курой"} 
    productTypePortionNumber={"100"}
    productTypeGift={"5 мышей "}
    productAdditionalInformation={"заказчик доволен"}
    productTypeDescription={""}
    productWeight={"5"}
    productDescription={"Филе из цыплят с трюфелями в бульоне."}
    cardDisabled={disableResolver()} />
    </div>
  )
}

export default App
