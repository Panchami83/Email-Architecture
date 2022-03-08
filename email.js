import emailjs from 'emailjs-com';
import React from 'react';

const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_tlce6cg', 'template_smi3sdp', e.target, 'OyPbS9ih7lSPbllpq').then(function (result) {
            console.log(result.text);
        }, function (error) {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <div className="container"
            style={{
                marginTop: "60px",
                width: "60%",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
            <form className="row" style={{ margin: "25px 85px 75px 100px" }} onSubmit={sendEmail}>
                <input type="text" className='form-control' name="name" placeholder='Name' />
                <input type="email" className='form-control' name="email" placeholder='email' />
                <input type="text" className='form-control' name="subject" placeholder='subject' />
                <textarea name='message' cols='30' rows='8' placeholder='Your Message'></textarea>
                <input type='submit' value='Send Meassage' className="btn btn-info" style={{
                    marginTop: "40px", color: 'burlywood', backgroundColor: 'wheat'
                }}></input>
            </form>
        </div>);
};
export default Mailer;