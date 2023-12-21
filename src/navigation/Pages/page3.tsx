import React, { useState, useEffect } from "react";
import "../../assets/style/Page3.css";
import { Country } from "../../models/Country";
import Loader from "../../components/CalculatorComponents/components/Loader";
import { getCountries } from "../../api/countriesApi";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from 'primereact/api';

const Page3: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState<Country[]>([]);
  const [filters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    isoCode: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'name.language': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'name.text': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    officialLanguage: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
  });

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
        <DataTable value={countries} removableSort paginator rows={5} filters={filters} filterDisplay="row" stripedRows tableStyle={{ minWidth: '50rem' }}>
          <Column field="isoCode" header="ISO Code" filter filterPlaceholder="Search" style={{ minWidth: '12rem', width: '25%' }} sortable />
          <Column header="Language" filter filterPlaceholder="Search" style={{ minWidth: '12rem', width: '25%' }} sortable 
            body={(rowData: Country) => (
              <>
                {rowData.name.map((name, index) => (
                  <div key={index}>{name.language}</div>
                ))}
              </>
            )}
          />
          <Column header="Country Name" filter filterPlaceholder="Search" style={{ minWidth: '12rem', width: '25%' }} sortable 
            body={(rowData: Country) => (
              <>
                {rowData.name.map((name, index) => (
                  <div key={index}>{name.text}</div>
                ))}
              </>
            )}
          />
          <Column header="Official Languages" filter filterPlaceholder="Search" style={{ minWidth: '12rem', width: '25%' }} sortable 
            body={(rowData: Country) => rowData.officialLanguages.join(', ')}
          />
        </DataTable>
      )}
    </div>
  );
};

export default Page3;
