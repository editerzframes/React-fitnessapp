import { useState, useEffect } from "react";
import axios from "axios";
import endpoints from "../../../apiConfig";
import useToken from "../../../components/useToken";
import FullPageLoader from "../../../components/FullPageLoader";
import TrainerView from "./components/TrainerView";
import Container from "react-bootstrap/Container";
import BannerView from "./components/BannerView";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";

export default function Dashboard({ DrawerHeader }) {
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
    // <div>
      // {/* <Typography paragraph>
      //   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      //   tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
      //   non enim praesent elementum facilisis leo vel. Risus at ultrices mi
      //   tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
      //   tellus. Convallis convallis tellus id interdum velit laoreet id donec
      //   ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
      //   suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
      //   quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
      //   proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
      //   tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
      //   varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
      //   Lorem donec massa sapien faucibus et molestie ac.
      // </Typography>
      // <Typography paragraph>
      //   Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
      //   ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
      //   integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
      //   lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
      //   Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
      //   vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
      //   accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
      //   Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
      //   senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
      //   Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
      //   maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
      //   aliquam ultrices sagittis orci a.
      // </Typography> */}
    // {/* </div> */}

    <Container fluid className="p-0">
      <BannerView banners={data.banner} />
      <Header userName={userData?.user?.name} />
      <TrainerView trainers={data.assigned_trainers} />

    </Container>
  );
}
