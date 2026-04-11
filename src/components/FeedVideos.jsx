import { Box, Stack } from "@mui/material";

import { VideoCard, ChannelCard } from './'



const FeedVideos = ({ feedVideos, direction }) => {

    console.log('feedVideos in feed videos', feedVideos);

    if (!feedVideos?.length) {
        return (
            <div style={{
                minHeight: '90vh', color: '#fff',
                display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px'
            }}>
                Loading...
            </div>
        )
    }

    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap='20px'>
            {feedVideos.map((item, idx) => (
                <Box key={idx}>
                    {
                        item?.id?.videoId &&
                        <VideoCard video={item} />
                    }
                    {
                        // item?.snippet?.channelId &&
                        item?.id?.channelId &&
                        <ChannelCard channelDetail={item} />
                    }
                </Box>
            ))}
        </Stack >
    )
}

export default FeedVideos
