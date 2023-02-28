import React from 'react'
require('./style.css')


const Widget = () => {
  return (
    <div className='widget'>
            <h2>Sold</h2>
            <div className="wrapper">
<div className='comment'>
 <p>I know so and so who sells so and so in so and so location Iron and leather work...</p>
<div className='button'>
    <button>N200</button>
    <button className='info'>More info</button> 
</div>
</div>
<div className='comment'>
<p>I know so and so who sells so and so in so and so location Iron and leather work...</p>
<div className='button'>
    <button>N200</button>
    <button className='info'>More info</button> 
</div>
</div>
<div className='comment'>
 <p>I know so and so who sells so and so in so and so location Iron and leather work...</p>
<div className='button'>
    <button>N200</button>
    <button className='info'>More info</button> 
</div>
</div>

</div>
<div className='viewMore'><p>view more</p></div>
    </div>
  )
}

export default Widget