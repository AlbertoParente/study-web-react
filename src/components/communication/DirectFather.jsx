import React from 'react'
import DirectChild from './DirectChild'

export default props => {
    return (
        <div>
            <DirectChild name="Child 1" age={33} adulthood={true} ></DirectChild>
            <DirectChild name="Child 2" age={13} adulthood={false} ></DirectChild>
        </div>
    )
}
