import {useState} from 'react'
import './App.css';
import { Button, FloatingLabel, FormControl} from 'react-bootstrap';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';

function App() {

  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [deviceToken,setdeviceToken] = useState('');
  const [loading,setLoading] = useState(false);

  const handlePushNotfication = async (e) =>{
    e.preventDefault();
    setLoading(true);
    try{
      var data ={
        title: title,
        body:body,
        deviceToken:deviceToken
      };
      const result = await axios.post("http://localhost:8000/api/firebase/send-notification",data)
      console.log(result);
      if(result.status === 200){
          toast.success(
            <div>
              <div>Notification sent successfully!</div>
            </div>,
            {position:'top-right'}
          )
      }else{
        toast.error(
          <div>
            <div>Failed to send Notification!</div>
          </div>,
          {position:'top-right'}
        )
      }
    }catch(error){
      console.log('Error: ',error);
    }finally{ 
      setLoading(false);
    }

  }



  return (
    <>
    <ToastContainer/>
    <div className='container firebase-form p-4'>
      <h1 className='mb-5'>Firebase Push Notification</h1>
      <div className='row'>
        <div className='col-md-6 mb-4'>
          <FloatingLabel
            controlId='floatingInput'
            label='Title'
            className='full-width'
          
          >
            <FormControl
              type='text'
              palaceholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              
            />
          </FloatingLabel>
        </div>
        {/* For body */}
        <div className='col-md-6 mb-4'>
          <FloatingLabel
            controlId='floatingInput'
            label='Body'
            className='full-width'
          
          >
            <FormControl
              type='text'
              palaceholder='Body'
              value={body}
              onChange={(e) => setBody(e.target.value)}
              
            />
          </FloatingLabel>
        </div>

        
        {/* for FCM token */}
        <div className='col-md-6 mb-4'>
          <FloatingLabel
            controlId='floatingInput'
            label='FCM Token'
            className='full-width'
          
          >
            <FormControl
              type='text'
              palaceholder='FCM Token'
              value={deviceToken}
              onChange={(e) => setdeviceToken(e.target.value)}
            />
          </FloatingLabel>
        </div>

        {/* For Submit btn */}

        <div className='col-md-12'>
          <Button variant='primary' size='lg'
            className='full-width'
            onClick={handlePushNotfication}
            disabled={loading}

            >
              {loading ? 'Sending':'Send'}
              
            </Button>

        </div>
        
      </div>

    </div>
    </>
  );
}

export default App;
