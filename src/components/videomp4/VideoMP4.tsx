import { useEffect, useRef, type FC } from "react";

interface VideoMP4Props {
    id: string;
    mp4: string;
    poster: string;
    rate?: number;
    onPlay?: () => void;
    onPause?: () => void;
    onStop?: () => void;
    onClick?: () => void;
    onToogle?: () => void;
    onEnded?: () => void;
}

const VideoMP4: FC<VideoMP4Props> = ({ id, mp4, poster, rate = 0.5, onPlay, onPause, onStop, onClick, onEnded }) => {
    
    const refVideo = useRef<HTMLVideoElement>(null);
    
    const handleplayVideo = () => {
        if (refVideo.current) {
            refVideo.current.play();
            refVideo.current.playbackRate = rate;
        }
    }
    const handlePauseVideo = () => { 
        if (refVideo.current) {
            refVideo.current.pause();
        }
    }
    const handleStopVideo = () => {
        if (refVideo.current) {
            refVideo.current.pause();
            refVideo.current.currentTime = 0;
        }
    }
    const handleClick = () => {
        if (refVideo.current) {
            refVideo.current.play();
            refVideo.current.playbackRate = rate;
        }
    };

    const handlerToogleVideo = () => {
        if (refVideo.current) {
            if (refVideo.current.paused) {
                refVideo.current.play();
                refVideo.current.playbackRate = rate;
            } else {
                refVideo.current.pause();
            }
        }
    }
    
    useEffect(() => {
        if (refVideo.current) {
            refVideo.current.pause();
            refVideo.current.addEventListener("mouseover", handleplayVideo);
        }
        return () => {
            if (refVideo.current) {
                refVideo.current.removeEventListener("mouseover", handleplayVideo);
            }
        }
    }
    , []);

    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "256px",
            maxHeight: "256px",
        }}>
            
            <video ref={refVideo} id={id} src={mp4} poster={poster} onClick={handlerToogleVideo}
                autoPlay
               
                muted
                playsInline>
                Tu navegador no admite el elemento <code>video</code>.
            </video>
        </section>
    )
}

export default VideoMP4;