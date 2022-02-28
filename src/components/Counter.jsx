import { TagFaces, } from '@material-ui/icons'
import React from 'react'
import '../styles/sass/Counter.scss'
import CountUp from 'react-countup'


const Counter = () => {

  return (
    <div className='count' >
        <div className='content'>
            <div className="boxin">
                <TagFaces style={{color: '#fbf7f7', fontSize: '4rem'}}/>
                <CountUp duration={5} end={227} delay={2}
                onEnd={({pauseResume, reset, start, update}) => start() } className='counter' />
                <div className="text">Working Hours</div>
            </div>

            <div className="boxin">
                <TagFaces style={{color: '#fbf7f7', fontSize: '4rem'}}/>
                <CountUp duration={5} end={230} delay={2}
                onEnd={({pauseResume, reset, start, update}) => start() } className='counter' />
                <div className="text">Projects</div>
            </div>

            <div className="boxin">
                <TagFaces style={{color: '#fbf7f7', fontSize: '4rem'}}/>
                <CountUp duration={5} end={179} delay={2}
                onEnd={({pauseResume, reset, start, update}) => start() } className='counter' />
                <div className="text">Happy Couples</div>
            </div>

            <div className="boxin">
                <TagFaces style={{color: '#fbf7f7', fontSize: '4rem'}}/>
                <CountUp duration={5} end={20} delay={2}
                onEnd={({pauseResume, reset, start, update}) => start() } className='counter' />
                <div className="text">Awards Recieved</div>
            </div>

        </div>
        
    </div>
    
  )
}

export default Counter