import React from 'react';
import "./payment.css";


function Payment() {
    return (
        <div className="payment">
            <div className="payment_logos">
                <img loading="lazy" className="paytm" alt="Paytm" src="https://raw.githubusercontent.com/tejas-muthya37/aigiriLive/gh-pages/static/media/paytm.png"/>
                <img loading="lazy" className="gpay" alt="Google Pay" src="https://raw.githubusercontent.com/tejas-muthya37/aigiriLive/gh-pages/static/media/gpay.png"/>
                <img loading="lazy" className="phonepe" alt="Phone Pe" src="https://raw.githubusercontent.com/tejas-muthya37/aigiriLive/gh-pages/static/media/phonepe.6a5f7e9b.png"/>
                
            </div>
            <div className="payment_instructions">
                <div className="payment_instructions_left">
                <div className="step1">
                    <h1>1</h1>
                    <p>Scan our QR code using any UPI App.<br /><br /> <span className="payment_number">OR</span>  <br /><br /> Enter the number - <span className="payment_number">+91 9980284000<br /></span> on your UPI App.</p>
                </div>
                <div className="step2">
                <h1>2</h1>
                    <p>Click on "Continue" to see your GRAND TOTAL.</p>
                </div>
                <div className="step3">
                <h1>3</h1>
                    <p>Click on "Confirm Order" to place your order.</p>
                </div>
                </div>
                <div className="payment_instructions_right">
                <img loading="lazy" className="qr" alt="+91 9980284000" src="https://raw.githubusercontent.com/tejas-muthya37/aigiriLive/gh-pages/static/media/qr_code.c4260cb3.jpg" />
                </div>
            </div>
            
        </div>
    )
}

export default Payment;
