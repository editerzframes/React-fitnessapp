import { useState, useEffect } from "react";
import axios from "axios";
import endpoints from "../../../apiConfig";
import useToken from "../../../components/useToken";
import FullPageLoader from "../../../components/FullPageLoader";
import TrainerView from "./components/TrainerView";
import Container from "react-bootstrap/Container";
import BannerView from "./components/BannerView";
import Header from "./components/Header";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token, userData } = useToken();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoints.homeData, {
          headers: {
            Authorization: `Bearer ${token}`,
            code: endpoints.clientCode,
          },
        });
        console.log(response.data);
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <FullPageLoader />;
  }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <Container fluid className="p-0">
      <BannerView banners={data.banner} />
      <Header userName={userData?.user?.name} />
      <TrainerView trainers={data.assigned_trainers} />
      
    </Container>
  );
}
