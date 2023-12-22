import ReactPlayer from 'react-player/youtube';

export default function VideoPlayer({ source }) {
    return (
        <ReactPlayer
            url={source}
            controls
            width="100%"
        />
    );
}
