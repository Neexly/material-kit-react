import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { useRouter } from 'next/router';
import { UserCircle } from 'src/icons/user-circle';
import { DashboardLayout } from '../../components/dashboard-layout';

const User = ({userData}) => {
    const router = useRouter();
    const query = router.query;
  
    const uid = query.id;
    console.log(uid)
  
    return (
  <>
    <Head>
      <title>
        Customer detail {userData}
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ mt: 3 }}>
        </Box>
      </Container>
    </Box>
  </>
);
}

User.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )

 export async function getServerSideProps(context) {
     // fetch des données sur l'user API
     const dataFetched = "coucou"
    return {
      props: {
          userData: dataFetched
      }, // will be passed to the page component as props
    }
}

export default User;
