import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import worldGifLoader from './../assets/earth-gif-preloader.gif';

const CountryDetailsPage = () => {
  const [countryData, setCountryData] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`).then(res => setCountryData(res.data));
  }, [countryId]);

  console.log('countryData', countryData);
  return (
    <div className='container'>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>
      {!countryData && (
        <div className='world-loader'>
          <h3>Loading info about... {countryId}!</h3>
          <img src={worldGifLoader} />
        </div>
      )}

      {countryData && (
        <>
          <h1>{countryData.name.common}</h1>
          <img
            className='tiny-flag'
            src={`https://flagpedia.net/data/flags/icon/72x54/${countryData.alpha2Code.toLowerCase()}.png`}
            alt={countryData.name.common}
          />
          <table className='table'>
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{countryData.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {countryData.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {countryData?.borders.length > 0 ? (
                      countryData?.borders.map(border => {
                        return (
                          <li key={border}>
                            <Link to={`/${border}`}>{border}</Link>
                          </li>
                        );
                      })
                    ) : (
                      <li>N/A</li>
                    )}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default CountryDetailsPage;
