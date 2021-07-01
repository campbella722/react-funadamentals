import React from 'react';
import TimerApp from './TimerApp';
import ClockApp from './ClockApp';
import StopWatchApp from './StopWatchApp';

const TimePiecesApp = () => {
    return (
        <div>
            <div>
                <TimerApp />
                <hr />
                <ClockApp />
                <hr />
                <StopWatchApp />
            </div>
        </div>
    )
}

export default TimePiecesApp;