import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { CheckCircle } from '@mui/icons-material';
import FeedVideos from './FeedVideos';

const VideoDetail = () => {

  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState('')
  const [relatedVideos, setRelatedVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos/part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.item[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setRelatedVideos(data.items))
  }, [id]);

  if (!videoDetail?.snippet) {
    return (
      <div style={{ minHeight: '90vh', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px' }}>
        Loading...
      </div>
    )
  }

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount, } } = videoDetail;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky' }} >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className='react-player'
            />

            <Typography variant='h5' color='#fff' fontWeight='bold' padding={2}>
              {/* {videoDetail?.snippet?.title || 'Title'} */}
              {title || 'Title'}
            </Typography>

            <Stack direction='row' justifyContent='space-between' sx={{
              color: '#fff', paddingX: '5px', paddingY: '3px'
            }}>

              {/* channelj title */}
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{
                  sm: 'subtitle1', md: 'h6'
                }}>
                  {channelTitle}

                  <CheckCircle sx={{
                    fontSize: '12px', jcolor: 'gray',
                    ml: '5px'
                  }} />
                </Typography>
              </Link>

              {/* views */}
              <Stack direction='row' alignItems='center' gap='20px'>
                <Typography variant='body1' sx={{
                  opacity: 0.7
                }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>

                <Typography variant='body1' sx={{
                  opacity: 0.7
                }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>

      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent='center'
        alignItems='center'
      >
        <FeedVideos
          relatedVideos={relatedVideos}
          direction='column'
        />
      </Box>
    </Box>
  )
}

export default VideoDetail
