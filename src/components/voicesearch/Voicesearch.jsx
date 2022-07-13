import React from 'react'
import "./voicesearch.css"

const Voicesearch = ({closevoicesearch}) => {
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center voiceModal'>
        <div className='col-md-4 bg-light voice-search'>
            <div className='border-bottom w-100 d-flex align-items-center justify-content-between py-2 px-3'>
                <h3>Voice Search</h3>
                <i className='fa fa-times btn btn-sm' onClick={()=>closevoicesearch()}></i>
            </div>
            <div className='w-100 h-50 d-flex align-items-center justify-content-center py-2'>
                <div className='col-md-2 micIcon d-flex align-items-center justify-content-center bg-danger text-white'>
                    <i className=' fa fa-microphone'></i>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Voicesearch