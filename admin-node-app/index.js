import express from 'express'
import cors from 'cors'
import cron from 'node-cron'

const app = express();

const PORT = 8000;

import bodyParser from 'body-parser';
import firebaseRoute from './src/util/routes/FirebaseRoute.js'
import { sendEveryMinuteNotification } from './src/controllers/FirebaseController.js'

app.use(bodyParser.json());
app.use(cors());
app.use('/api/firebase',firebaseRoute);

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })



app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`)
    
    cron.schedule("* * * * *", async () => {
        console.log('Sending every minute')
        await sendEveryMinuteNotification();
    },{
        scheduled:true
    })
})