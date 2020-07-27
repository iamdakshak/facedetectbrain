import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = (onInputChange) => {
  return(
    <div>
      <p className='f3 center'> I'm gonna detect faces in your picture. Give it a try! </p>
      <div className='center'>
        <div className='form center  pa2 br3 shadow-5'>
          <input className='f3 br3 pa2 w-70 ' type='text' onChange={onInputChange}/>
          <button className='dib br3 grow link w-30 f4 white ph3 pv2 bg-light-purple'>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
