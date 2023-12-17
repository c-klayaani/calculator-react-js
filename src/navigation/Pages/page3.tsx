import React, { useState, useEffect } from "react";
import "../../assets/style/Page3.css";
import { Country } from "../../models/Country";
import Loader from "../../components/CalculatorComponents/components/Loader";
import { getCountries } from "../../api/countriesApi";

const Page3: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState<Country[]>([]);
  const fetchData = async () => {
    try {
      const countries = await getCountries();
      setCountries(countries);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => { fetchData() }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
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
                  {i === 0 ? (
                    <td rowSpan={country.name.length}>{country.isoCode}</td>
                  ) : null}
                  <td>{name.language}</td>
                  <td>{name.text}</td>
                  {i === 0 ? (
                    <td rowSpan={country.name.length}>
                      {country.officialLanguages.join(", ")}
                    </td>
                  ) : null}
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
