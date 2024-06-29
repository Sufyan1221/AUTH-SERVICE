export const EmailController =  (req, res) =>{
        const recipientEmail = 'csc21s135@gmail.com';
        const otp = '123456';
        sendEmailOTP(recipientEmail, otp)
        .then(response => console.log(response))
        .catch(error => console.error(error));
    
        res.status(200).json({
            message : "OTP sent successfully"
        })
    }
