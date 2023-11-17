import React from 'react'

const Ball = () => {
  
  function hideShow(e){
    e.target.nextSibling.style.display = "block";//accessing ball
    e.target.remove();
    console.log(e.target.nextSibling);
  }
  
  const moveBallLeft = (e) => {
      const ball = document.getElementById('ball');
        // console.log("key pressed");
        if (e.keyCode === 39) {
          const currentLeft = parseInt(ball.style.left,10);//problem Nan
          // console.log(ball.style.left)
          // console.log(typeof currentLeft+"-----" + currentLeft)
          ball.style.left = `${currentLeft + 5}px`;
        }
       };
       document.addEventListener('keydown', moveBallLeft);

  return (
    <div>
      <button onClick={hideShow} className='start'>Start</button>
      <div id='ball' className='ball' style={{left:"0px"}} ></div>
    </div>
  )


}

export default Ball

