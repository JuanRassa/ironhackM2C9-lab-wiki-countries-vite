import { useState, useEffect } from 'react';
import axios from 'axios';
import worldGifLoader from './../assets/earth-gif-preloader.gif';

const HomePage = () => {
  const [countriesData, setCountriesData] = useState(null);

  useEffect(() => {
    axios.get(' https://ih-countries-api.herokuapp.com/countries').then(res => {
      setCountriesData(res.data);
      console.log('data', res.data);
    });
  }, []);
  console.log('countriesData', countriesData);
  return (
    <div className='container' style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>
      {!countriesData && <img src={worldGifLoader} />}
      {countriesData && (
        <div className='list-group'>
          {countriesData.map(country => (
            <a key={country._id} className='list-group-item list-group-item-action' href={country.alpha3Code}>
              {country.name.official}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
