import { Box, Typography } from "@mui/material"
import FeedVideos from "./FeedVideos"
import { useEffect, useState } from "react"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { useParams } from "react-router-dom"

 
const HomeFeed = () => {

  const [feedVideos, setFeedVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        const items = data?.data?.items || [];
        setFeedVideos(items);
      })
      .catch((error) => {
        console.log('api response error: ', error);
      })
  }, [])

  return (

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
        Search Results For:
        <span style={{ color: '#f31503' }}>
          {searchTerm}
        </span>
        Videos
      </Typography>

      <FeedVideos feedVideos={feedVideos} />
    </Box>

  )
}

export default HomeFeed
