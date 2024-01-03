import React, { useEffect, useRef, useState } from "react";
import Loader from "../../components/CalculatorComponents/components/Loader";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Reporter } from "../../models/Reporter";
import { DataTable } from 'primereact/datatable';
import { Login } from "../../api/reporterApi";
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import "../../assets/style/Page6.css";

const Page6: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [reporter, setReporter] = useState<Reporter | null>(null);
  const [error] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const showError = () => {
    toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to fetch data",
        life: 3000
    });
  };

  useEffect(() => {if (error != null) showError();}, [error]);

  const fetchData = async () => {
      try {
        const email = "admin@reporter.com";
        const password = "admin123";
        const reporterData = await Login(email, password); 
        setReporter(new Reporter(reporterData));
      } catch (error: any) {
          showError();
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => { fetchData() }, []);    
  
  return(
    <div >
      {loading ? (
          <Loader />
      ) : (    
          reporter ? (
              <div>
                <h3>Reporter Data</h3>
                <Accordion>
                  <AccordionTab header="User">
                    <DataTable value={reporter.data} className="p-datatable-striped">
                      <Column field="user.id" header="User ID" />
                      <Column field="user.firstName" header="First Name"/>
                      <Column field="user.lastName" header="Last Name"/>
                      <Column field="user.email" header="Email"/>
                      <Column field="user.password" header="Password"/>
                      <Column field="user.createdAt" header="Created At"/>
                      <Column field="user.updatedAt" header="Updated At"/>
                      <Column field="user.passwordResetToken" header="Password Reset Token"/>
                      <Column field="user.passwordResetTokenExpires" header="Password Reset Token Expires"/>
                    </DataTable>
                  </AccordionTab>
                  <AccordionTab header="Tokens">
                    <DataTable value={reporter.data} className="p-datatable-striped">
                      <Column field="JWTToken" header="JWT Token"/>
                      <Column field="JWTRefreshToken" header="JWT Refresh Token"/>
                    </DataTable>
                  </AccordionTab>
                </Accordion>
              </div>
            ) : (
              <div>
                <h3>Reporter Data</h3>
                <Accordion>
                  <AccordionTab header="Data">
                    <p>No data available.</p>
                  </AccordionTab>
                  <AccordionTab header="Tokens">
                    <p>No data available.</p>
                  </AccordionTab>
                </Accordion>
              </div>
              )
        )}
      <Toast ref={toast} />
    </div>
  )
}

export default Page6;