import React from 'react'

const Loading = () => {


  return (
  <div className="wrap-cloud">
 
			<div className="wrap-sun">
				<div className="loader-sun">
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<span className="line"></span>
					<div className="circle"></div>	
				</div>
			</div>
			<div className="cloud">
				<div className="cld-circle"></div>
				<div className="cld-circle-small-1"></div>
				<div className="cld-circle-small-2"></div>
				<div className="cld-main"></div>	
			</div>
			<div className="cloud_2">
				<div className="cld-circle"></div>
				<div className="cld-circle-small-1"></div>
				<div className="cld-circle-small-2"></div>
				<div className="cld-main"></div>	
			</div>
		</div>
  )
}

export default Loading