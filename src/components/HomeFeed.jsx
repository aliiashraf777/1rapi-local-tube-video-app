import { Box, Stack, Typography } from "@mui/material"
import Sidebar from "./Sidebar"
import FeedVideos from "./FeedVideos"
import { useEffect, useState } from "react"
import { fetchFromAPI } from "../utils/fetchFromAPI"

 
const HomeFeed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [feedVideos, setFeedVideos] = useState([]);

  useEffect(() => {
    const storageKey = `videos_${selectedCategory}`;
    const cachedVideos = localStorage.getItem(storageKey);

    if (cachedVideos) {
      // load from localStorage
      setFeedVideos(JSON.parse(cachedVideos))
    } else {
      // fetch from API
      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => {
          console.log('api response: ', data);
          const items = data?.data?.items || [];

          setFeedVideos(items);
          localStorage.setItem('storageKey', JSON.stringify(items));
        })
        .catch((error) => {
          console.log('api response error: ', error);
        })
    }
  }, [selectedCategory])

  return (
    <Stack sx={{
      flexDirection: { sx: 'column', md: 'row' },
    }}>

      {/* sidebar */}
      <Box sx={{
        color: '#fff',
        height: { sx: 'auto', md: '92vh' },
        // borderRight: '1px solid #3d3d3d',
        borderRight: '1px solid #121212',
        px: { sx: 0, md: 2 },
        overflow: 'hidden',
      }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography className='copyright' variant="body2"
          sx={{
            mt: 1.5,
          }}
        >
          Copyright 2022 - LocalTube
        </Typography>
      </Box>


      {/* home videos feed */}
      <Box
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2,
          padding: '20px',
        }}
      >
        <Typography variant="h5"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          {selectedCategory} <span style={{ color: '#f31503' }}>Videos </span>
        </Typography>

        <FeedVideos feedVideos={feedVideos} />
      </Box>
    </Stack >
  )
}

export default HomeFeed
