import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import worldGifLoader from './../assets/earth-gif-preloader.gif';

const HomePage = () => {
  const [countriesData, setCountriesData] = useState(null);

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries').then(res => {
      setCountriesData(res.data);
    });
  }, []);
  console.log('countriesData', countriesData);
  return (
    <div className='container' style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>
      {!countriesData && (
        <div className='world-loader'>
          <h3>Loading countries of the world...</h3>
          <img src={worldGifLoader} />
        </div>
      )}
      {countriesData && (
        <div className='list-group'>
          {countriesData.map(country => (
            <Link key={country._id} className='country-item-list list-group-item list-group-item-action' to={`/${country.alpha3Code}`}>
              <img
                className='tiny-flag'
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.official}
              />
              {country.name.common}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
