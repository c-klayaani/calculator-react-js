import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/style/Page3.css';

interface Country {
isoCode: string;
name: {
  language: string;
  text: string;
}[];
officialLanguages: string[];
}

const Page3: React.FC = () => {
const [loading, setLoading] = useState(true);
const [countries, setCountries] = useState<Country[]>([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://openholidaysapi.org/Countries');
      setCountries(response.data);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);

return (
  <div>
    {loading ? (<h1 className='loading'>Loading...</h1>) : 
    (
      <table>
        <tr>
          <th>ISO Code</th>
          <th>Language</th>
          <th>Country Name</th>
          <th>Official Languages</th>
        </tr>
        {countries.map((country, index) => (
          <React.Fragment key={index}>
            {country.name.map((name, i) => (
              <tr key={`${index}-${i}`}>
                {i === 0 ? <td rowSpan={country.name.length}>{country.isoCode}</td> : null}
                <td>{name.language}</td>
                <td>{name.text}</td>
                {i === 0 ? <td rowSpan={country.name.length}>{country.officialLanguages.join(', ')}</td> : null}
              </tr>
            ))}
          </React.Fragment>
        ))}
      </table>
    )}
  </div>
);
};

export default Page3;
