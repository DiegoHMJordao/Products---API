import React, { useEffect, useState } from 'react'
import { api } from '../API/API'
import * as C from './HomeStyle'

const Home = () => {

  const [productsAPI,setProductsAPI] = useState([])
  const [loading,setLoading] = useState(false)
  //useEffect to make ed request as the page is loaded!
  useEffect(() => {
    loadProducts()    
  },[])

  const headerList = [
    "Apple", "Samsung", "Lenovo", "Oppo", "Huawei", "Infinix", "HP"
  ]

  //loadProdutcs function request API data
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

      <C.FilterDiv>
        <h3>Smartphones</h3>
        <ul>
          <li>
            <input name='OSName' value='android' id='smartphoneAndroid' type='checkbox'/>
            <label  for='smartphoneAndroid'>Android</label>
          </li>
          <li>
            <input id='smartphoneIos' name='OSName' value='ios' type='checkbox'/>
            <label   for='smartphoneIos'>Ios</label>
          </li>
        </ul>
        <h3>Preço</h3>
        <ul>
          <li>
            <input type='radio' id='p5k' name='price' />
            <label for='p5k'>De R$0 a R$5.000</label>
          </li>
          <li>
            <input type='radio' id='p10k' name='price' />
            <label for='p10k'>Acima de R$10.000</label>
          </li>
        </ul>
        <h3>Marca</h3>
        <ul>
          {
            headerList.map((item,index) =>
              <>
                <li key={index}>
                  <input type='checkbox' id={item} name='marca' />
                  <label for={item}>{item}</label>
                </li>
              </>
            )
          }
        </ul>
        <button>Filtrar</button>
      </C.FilterDiv>
      
      <ul>
      {
      productsAPI.map((item,index) =>
            <li key={index}>
              <img src={item.thumbnail} alt='product' />
              <content>
                <h2>{`${item.brand} - ${item.title}`}</h2>
                <h3>€<span>{item.price}</span></h3>
                <p>{`Avaliações: ${item.rating}`}</p>
                <button>Comprar</button>
              </content>             
            </li>
            )
        }
      </ul>
    </C.HomeStyle>
  )
}

export default Home