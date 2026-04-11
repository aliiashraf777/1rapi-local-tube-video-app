import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
import Box from '@mui/material/Box'

import { Navbar, HomeFeed, VideoDetail, ChannelDetail, SearchFeed } from './components'


const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>

        <Navbar />

        <Routes>
          <Route
            path='/'
            element={<HomeFeed />}
          />
          <Route
            path='/video/:id'
            element={<VideoDetail />}
          />
          <Route
            path='/channel/:id'
            element={<ChannelDetail />}
          />
          <Route
            path='/search/:searchTerm'
            element={<SearchFeed />}
          />
        </Routes>

      </Box>
    </BrowserRouter>
  )
}

export default App
