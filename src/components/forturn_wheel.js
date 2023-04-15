import React, { useState, useEffect, useRef  } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Wheel } from 'react-custom-roulette'

import { GetData } from '../utils/wheel.data';

import wheelContainerImg from '../assets/wheel_container.png';
import wheelAudio from '../assets/wheel_audio.mp3';

export default () => {

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [play_flag, setFlag] = useState(false);
    const [_data, setData] = useState(0);

    const ref = useRef(null);

    const handleSpinClick = () => {
        // Selecting Random value
        // const newPrizeNumber = Math.floor(Math.random() * _data.length)

        // Selecting defined value
        setPrizeNumber(prizeNumber)
        setMustSpin(true)
        setFlag(true)
        // console.log(inputElement.current.props.autoPlay);
        // inputElement.current.props.autoPlay = true;
    }

    const onFlag = () => {
        setMustSpin(false);
        setFlag(false)
    }

    const onChange = (e) => {
        _data.filter((item, index) => {return item.option === e.target.value ? setPrizeNumber(index) : item})
    }
    
    useEffect(() => {
        setData(GetData());
        setPrizeNumber(0);
        play_flag ? ref.current.play() : ref.current.pause()
    }, [play_flag]);

    return (
        <div className='container'>
            <div className='wheel_wrapper'>
                {
                    _data && <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={_data}
                        radiusLineColor={'#945606'}
                        radiusLineWidth="1"
                        outerBorderColor={'transparent'}
                        onStopSpinning={onFlag}
                        />
                    }
                <button className='clickImg' onClick={handleSpinClick}>Spin</button>
                <img src={wheelContainerImg} alt="" className='wheelImg' />
            </div>

            <select onChange={onChange} className='sel_option'>
                <option>100$</option>
                <option>200$</option>
                <option>300$</option>
                <option>400$</option>
                <option>600$</option>
                <option>700$</option>
                <option>800$</option>
                <option>900$</option>
                <option>1000$</option>
                <option>5000$</option>
                <option>10000$</option>
            </select>

            <audio src={wheelAudio} ref={ref} ></audio>
        </div>
    )
}