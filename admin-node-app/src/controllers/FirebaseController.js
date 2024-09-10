import NotificationService from '../util/service/NotificationService.js';

export const sendFirebaseNotification = async (req,res) =>{
    try {
        const {title,body,deviceToken} = req.body;
        await NotificationService.sendNotification(deviceToken,title,body)
        res.status(200).json({message:"Notification Sent Successfully", success:true});
    } catch (error) {
        res.status(500).json({message:"Error sending notification", success:false});

    }
}

export async function sendEveryMinuteNotification() {
    
    // try {
    //     console.log('Starting to send notification');
        
    //     const title = 'Every Minute Notification';
    //     const body = 'Hello from body'
    //     const deviceToken ="cW9LgJ1GIlQP-5Y4ALPEVR:APA91bFGQLnhZ0qMXIAfRzcOt6kMFgRajCzrndQlvg_JgJs3SwXHxkDcVefuuEe0WCDHu0kd_yO3JlvojFKDjzJYYm6YnQm_lEmaHfaKvz7XHdHIFSkBbQFM6koHakLzXI2gCm4V3ni2"
    //     await NotificationService.sendNotification(title,body,deviceToken)


    //     console.log('Notification sent successfully');
    // } catch (error) {
    //     console.error('Failed to send notification:', error);
    // }
    
        const title = 'Every Minute Notification';
        const body = 'Hello from body'
        const deviceToken ="cW9LgJ1GIlQP-5Y4ALPEVR:APA91bFGQLnhZ0qMXIAfRzcOt6kMFgRajCzrndQlvg_JgJs3SwXHxkDcVefuuEe0WCDHu0kd_yO3JlvojFKDjzJYYm6YnQm_lEmaHfaKvz7XHdHIFSkBbQFM6koHakLzXI2gCm4V3ni2"
        await NotificationService.sendNotification(title,body,deviceToken)


        console.log('Notification sent successfully');
    
    
    
    
    
}

// export default sendFirebaseNotification;
// export default sendEveryMinuteNotification;