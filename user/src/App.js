import {useEffect,useState} from 'react';
import './App.css';
import { requestFCMToken, onMessageListner} from './utils/firebaseUtils';
import { toast, ToastContainer } from 'react-toastify';


function App() {

  const [fcmToken,setFcmToken] = useState(null);
  
  useEffect(() =>{
    const fetchFCMToken = async() =>{
      try{
        const token = await requestFCMToken();
        setFcmToken(token);
        console.log(token);
      }catch(err){
        console.error("Error getting FCM token : ",err);
      }
    }
    fetchFCMToken();
  })

  onMessageListner().then(payload => {
    toast(
     
      <div>
        <strong>{payload.notification.title}</strong>
        <div>{payload.notification.body}</div>
      </div>,
      {position:"top-right"}

    )
    console.log('Receieved foreground message',payload);
  }).catch(err => console.error("error: ", err));


  return (
    <>
      <ToastContainer/>
      <div className='container firebase-form p-4'>
        <div className='row'>
          {fcmToken && (
            <div className='col-md-12 mb-4'>
              <div className='alert alert-info'>
                <strong>FCM Token:</strong> {fcmToken}
              </div>
            </div>  
          )}
        </div>

      </div>
    </>
  );
}

export default App;
