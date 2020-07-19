import React from 'react'

export default function ProgressBar(props) {
  return (
    <div className="progress mb-1" style={{height: '5px'}}>
      <div className="progress-bar bg-secondary" role="progressbar" style={{width: props.percent}}></div>
    </div>
  )
}
