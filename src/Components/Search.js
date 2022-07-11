import React, { useState } from 'react';
import {STOREFRONT_ACCESS_TOKEN, store_name} from './Credentials.js';
// import {Shopify} from '@shopify/shopify-api';

const Search = () => {

  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value)
  };

  const data = {query : `{collection (handle: "${query}") {
    products (first : 1) {
      edges {
        node {
          title
          id
        }
      }
    }
  }
    
  }`}


  const handleSearch = async (e) => {
    e.preventDefault();

    const url = `https://${store_name}.myshopify.com/api/2022-04/graphql.json`

    await fetch(url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
        'Accept': 'application/json'
      },
      // mode: 'no-cors',
      body: JSON.stringify(data)
      
    })
    .then(async (res) => {

      const resj = await res.json();
      console.log(resj);
    }).catch((err) => {
      console.log('ERROR', err);
    })


  }



  return (
    <div>
      <form>
        <input 
        placeholder='Search' 
        value = {query}
        onChange = {handleChange}
        />

        <button onClick={handleSearch}>Search</button>
      </form>
    </div>
  )
}

export default Search