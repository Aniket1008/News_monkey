import React from 'react'
import loading from './images/src/loading.gif'

const Loader = ()=> {
    return (
      <div className='text-center'>
        <img src={loading}  alt="loading" />
      </div>
    )
}

export default Loader









// import React, { Component } from 'react'
// import loading from './loading.gif'

// export class Loader extends Component {
//   render() {
//     return (
//       <div className='text-center'>
//         <img src={loading}  alt="loading" />
//       </div>
//     )
//   }
// }

// export default Loader