
import React,{useState} from 'react'

const HomeScreen = ({search,openvoicesearch}) => {
    const [input, setinput] = useState("")

    const handlesubmit=(e)=>{
      e.preventDefault()
      if(/^[a-zA-z0-9].*/.test(input) || /^[a-zA-z0-9]+" ".*/.test(input)){
        search(input)
      }
    }

    const handlebutton=()=>{
      if(/^[a-zA-z0-9].*/.test(input) || /^[a-zA-z0-9]+" ".*/.test(input)){
        search(input)
      }
    }

    const clearinput=()=>{
      setinput("")
    }

  return (
    <div className='container'>
       <div className='row'>
            <div className='col-md-12 d-flex flex-column align-items-center justify-content-center  mt-1'>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Icon" className='mx-auto my-3 mw-10 col-md-3'/>
                <div className='formDiv col-md-6 mx-auto border my-3 d-flex align-items-center justify-content-between py-1 px-2 rounded-pill'>
                    <i className='fa fa-search mx-1'></i>
                    <form style={{width:"100%"}} className="ms-2" onSubmit={handlesubmit}>
                        
                            <input type="text" className='form-control border-0' value={input} onChange={(e)=>setinput(e.target.value)} style={{boxShadow:"none", outline:"none"}} />
                        
                    </form>
                {input ? <i className='fa fa-times mx-1' style={{cursor:"pointer"}} onClick={clearinput}></i> : null}
                <button type='button' onClick={()=>openvoicesearch()} className='btn mx-1'><i className='fa fa-microphone'></i></button>
                </div>
                <div className='btns mx-auto text-center'>
                    <button type='button' className='btn btn-default mx-1' onClick={handlebutton}>Google Search</button>
                    <button type='button' className='btn btn-default mx-1'>Feeling Lucky</button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default HomeScreen