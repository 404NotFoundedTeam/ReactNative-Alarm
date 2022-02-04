import { useState, useEffect } from "react";
import Sound from 'react-native-sound';

const PlayAudio = () => {
	const audio = new Sound(('./budiln1kq.mp3'), (error, sound) => {
        if(error)return ;
        audio.play((ref) => {
            console.log("end" + ref)
        })
    });
	const toggle = (isPlay) => {
		if(!playing){
			setPlaying(isPlay)
		}
		if(playing && !isPlay){
			setPlaying(false)
		}
	};

	useEffect(() => {
			if(playing){
				audio.play();
			}
			else {
				audio.pause();
				audio.currentTime = 0;
			}
		},
		[playing]
	)
	audio.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);

	return toggle;
};
const PlayVibrate = () => {
	const [vibration] = useState(new Sound('./vibration'));
	const [playingV, setPlayingV] = useState(false);

	const toggle = (isPlay) => {
		if(!playingV){
			setPlayingV(isPlay)
		}
		if(playingV && !isPlay){
			setPlayingV(false)
		}
	};

	useEffect(() => {
			if(playingV){
				vibration.play();
			}
			else {
				vibration.pause();
				vibration.currentTime = 0;
			}
		},
		[playingV]
	)
	vibration.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);

	return toggle;
};

export {PlayAudio, PlayVibrate}