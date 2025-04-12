import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8 p-4'>
                    <a href='' style={{textDecoration: "none"}}>
                    <h3 className='fs-5'>Brokerage calculator</h3>
                    </a>
                    <ul
                    style={{textAlign: "left", lineHeight: "2.5", fontSize: "12px"}}
                    className='text-muted'
                    >
                        <li>
                            Call & Trade and RMS auto-squareoff:Additional charges of Rs.50 + GST per order.
                        </li>
                        <li>Digital contrast notes will be sent via e-mail.</li>
                        <li>
                            Physical copies of contrast notes, if required, shall be charged Rs.20 per contract note. Courier charges apply.
                        </li>
                        <li>
                            For NRI account is in debit balance, any order placed will be charged Rs.40 per executed order instead of Rs.20 per executed order.
                        </li>
                    </ul>

                </div>
                <div className='col-4 p-4'>
                    <a href='' style={{textDecoration: "none"}}>
                        <h3 className='fs-5'>List of charges</h3>
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;