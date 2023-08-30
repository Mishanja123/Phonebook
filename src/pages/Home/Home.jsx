import { useAuth } from '../../hooks/';
import { HomeTrue } from 'components/HomeTrue/HomeTrue';

import Container from '@mui/material/Container';
import { HomeFalse } from 'components/HomeFalse/HomeFalse';




export default function Home() {
  const { isLoggedIn } = useAuth();


  return (
    <Container 
      component="main"
      maxWidth="xl"
      sx={{
        padding: 2,
      }}
    >
        {isLoggedIn ?
          <HomeTrue/>
          : 
          <HomeFalse/>
        }
    </Container>   
  );
}
  



