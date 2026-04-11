import SearchIcon from '@mui/icons-material/Search';
import { Paper, IconButton } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate('/search/${searchTerm');

            setSearchTerm('');
        }
    }

    return (
        <Paper
            component='form'
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                // border: '1px solid #5c5c5c',
                border: '1px solid #303030',
                pl: 2,
                boxShadow: 'none',
                mr: { ms: 5 },
                // backgroundColor: '#303030'
                backgroundColor: '#121212',
                color: '#fff',
            }}
            className='search-bar-wrap'
        >
            <input
                type="text"
                placeholder='Search'
                className='search-bar'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type='submit' sx={{
                p: '10px', color: 'gray',
                backgroundColor: '#121212'
            }}>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar
