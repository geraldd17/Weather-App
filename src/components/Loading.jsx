import React from 'react'

const Loading = () => {


  return (
    <div class="title-container">
    <div class="spinner">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" />
        </svg>
    </div>
    <h1 class="title">loading...</h1>
</div>
  )
}

export default Loading