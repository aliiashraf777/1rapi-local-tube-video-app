import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
 
const Navbar = () => {
  return (
    <Stack
      direction='row' 
      alignItems='center'
      p={2}
      sx={{
        position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between',
        // borderBottom: '1px solid #303030',
        borderBottom: '1px solid #121212',
        zIndex: '100'
      }}
    >
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
        <Typography variant='h6'
          sx={{ color: '#fff', fontWeight: 'bold', marginLeft: '10px' }}
        >
          Local <span style={{ color: '#f31503' }}>Tube</span>
        </Typography>
      </Link>

      <SearchBar />
    </Stack>
  )
}

export default Navbar
