import React, { useEffect, useState } from "react";
import { postReporter } from "../../api/reporterApi";
import { Reporter } from "../../models/Reporter";
import Loader from "../../components/CalculatorComponents/components/Loader";

const Page6: React.FC = () => {
    const [reporter, setReporter] = useState<Reporter>();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
          const reporter = await postReporter();
          setReporter(reporter);
        } catch (error: any) {
          console.error(error);
          setError("Failed to fetch data");
        } finally {
            setLoading(false);
        }
      };
    useEffect(() => { fetchData() }, []);    
    
    return(
        <div>
      {loading ? (
        <Loader />
      ) : (
        <div></div>
      )}
    </div>
    )
}

export default Page6;