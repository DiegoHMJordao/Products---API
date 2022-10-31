import React, { useEffect, useState } from 'react'
import { api } from '../API/API'
import Aviso from '../Aviso/Aviso'

import * as C from './HomeStyle'

const Home = () => {

  const [productsAPI,setProductsAPI] = useState([])
  const [loading,setLoading] = useState(false)
  const [alert,setAlert] = useState(false)
  //useEffect to make ed request as the page is loaded!
  useEffect(() => {
    loadProducts()    
  },[])
  const headerList = [
    "Apple", "Samsung", "Lenovo", "Oppo", "Huawei", "Infinix", "HP"
  ]

  //loadProdutcs function requesting API data
  const loadProducts = async () => {
    try{
      setLoading(true)
      let json = await api()
      setLoading(false)
      setProductsAPI(json.products)
    }catch(err) {    
      console.log(`Mensagem de erro: ${err}`)
  }}  

  return(
    <C.HomeStyle>
      {
        loading && 
        <div>Carregando...</div>
      }      

      <Aviso 
      setAlert={setAlert}
      alert={alert}
      />

      <C.FilterDiv>
        <h3>Smartphones</h3>
        <ul>
          <li>
            <input name='OSName' value='android' id='smartphoneAndroid' type='checkbox'/>
            <label  htmlFor='smartphoneAndroid'>Android</label>
          </li>
          <li>
            <input id='smartphoneIos' name='OSName' value='ios' type='checkbox'/>
            <label   htmlFor='smartphoneIos'>Ios</label>
          </li>
        </ul>
        <h3>Preço</h3>
        <ul>
          <li>
            <input type='radio' id='p5k' name='price' />
            <label htmlFor='p5k'>De R$0 a R$5.000</label>
          </li>
          <li>
            <input type='radio' id='p10k' name='price' />
            <label htmlFor='p10k'>Acima de R$10.000</label>
          </li>
        </ul>
        <h3>Marca</h3>
        <ul>
          {
            headerList.map((item,index) =>
              <>
                <li key={index}>
                  <input type='checkbox' id={item} name='marca' />
                  <label htmlFor={item} >{item}</label>
                </li>
              </>
            )
          }
        </ul>
        <button onClick={() => setAlert(!alert)} >Filtrar</button>
      </C.FilterDiv>
      <ul>
      {
      productsAPI.map((item,index) =>
            <li key={index}>
              <img src={item.thumbnail} alt='product' />
              <div  >
                <h2>{`${item.brand} - ${item.title}`}</h2>
                <h3>€<span>{`${item.price}.99`}</span></h3>
                <p>{`Avaliações:${item.rating}`}</p>
                <button onClick={() => setAlert(!alert)}>Carrinho</button>
              </div>             
            </li>
            )
        }
      </ul>
    </C.HomeStyle>
  )
}

export default Home