import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import FeedVideos from "./FeedVideos";


const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  // const [channelVideos, setChannelVideos] = useState(null);
  const [feedVideos, setFeedVideos] = useState(null);

  const { id } = useParams();

  console.log(channelDetail, feedVideos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet$id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setFeedVideos(data?.items))
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box
        style={{
          // background: 'linear-gradient(90deg, #121212 0%, #303030 100%, #5c5c5c 100%)'
          background: 'linear-gradient(90deg,rgba(18, 18, 18, 1) 0%, rgba(48, 48, 48, 1) 55%, rgba(18, 18, 18, 1) 100%)'
        }}>
        <ChannelCard
          channelDetail={channelDetail}
          marginTop='-93px'
        />
      </Box>

      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }} />

        <FeedVideos feedVideos={feedVideos} />
      </Box>

    </Box>
  )
}

export default ChannelDetail
