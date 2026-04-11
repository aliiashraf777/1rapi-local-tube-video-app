import { Link } from "react-router-dom";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";

import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from "../utils/constants";



const VideoCard = ({
    video: { id: { videoId }, snippet }
}) => {

    // console.log('video card props', videoId, snippet);

    return (
        <Card className='video-card' sx={{
            width: { xs: '100%', md: '355px' },
            overflow: 'hidden',
            borderRadius: '5px',
            border: '1px solid #303030',
        }}>
            <Link
                to={videoId ? `/video/${videoId}` : demoVideoUrl}
            >
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: { xs: '100%', md: '355px' }, height: 180, overflow: 'hidden' }}
                />
            </Link>

            <CardContent sx={{
                backgroundColor: '#121212',
                height: 'fit-content',
                padding: '10px',
                textWrap: 'wrap',
            }}>
                <Link
                    to={videoId ? `/video/${videoId}` : demoVideoUrl}
                >
                    <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                        {snippet?.title.slice(0, 40) + '...' || demoVideoTitle.slice(0, 40)}
                    </Typography>
                </Link>

                <Link
                    to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
                >
                    <Typography variant='subtitle2' fontWeight='bold' color='#303030'>
                        {snippet?.channelTitle || demoChannelTitle}

                        <CheckCircle sx={{ fontSize: 12, color: '#303030', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card >
    )
}

export default VideoCard
