const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');



//FORM GENERATING EMAIL API
exports.form2 = (req, res) => {
    let data = req.body
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'htagir491@gmail.com',
            pass: 'zzcktjhwnwmzrvus'
        }
    });
    const mailOptions = {
        from: `"${req.body.name}" <${req.body.email}>`,
        to: 'htagir491@gmail.com',
        subject: 'Glacierheli.is',
        text: `Name: ${req.body.name}\nContact: ${req.body.contact}\nTour: ${req.body.tours}\nTotal: ${req.body.total}\nDate: ${req.body.date}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            res.send('error');
        }
        else {
            console.log('Email sent')
            res.send('success')
        }
    })


}
