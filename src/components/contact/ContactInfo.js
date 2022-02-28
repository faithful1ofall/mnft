import React from 'react';

function ContactInfo(props) {
    return (
        <div className={props.gridWidth}>
            <div className='card'>
                <div className='card-body p-4 p-lg-5'>
                    <h5 className='mb-4'>We are here for help you!</h5>
                    <ul className='list-unstyled mb-4'>
                        <li className='d-flex mb-4'>   
                            
                        </li>
                        <li className='d-flex mb-3'>
                            <div className='contact-icon bd-3 border-primary text-primary flex-shrink-0'>
                                <i className='las la-envelope'></i>
                            </div>
                            <div className='ms-3'>
                                <h6>Email address</h6>
                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a
                                            className='text-decoration-none text-sm text-muted mb-1'
                                            rel='noreferrer'
                                            href='mailto:support@miniutopia.co'
                                        >
                                            support@miniutopia.co
                                        </a>
                                    </li>
                                  
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <h2 className='h5 mb-1'>We are social</h2>
                    <p className='small text-muted mb-3'>
                        
                    </p>
                    <ul className='list-inline mb-0'>
                      
                        <li className='list-inline-item'>
                            <a className='social-link bg-hover-primary' rel='noreferrer' href='https://t.me/miniutopiatoken'>
                                <i className='lab la-telegram'></i>
                            </a>
                        </li>
                        <li className='list-inline-item'>
                            <a className='social-link bg-hover-primary' rel='noreferrer' href='https://twitter.com/miniutopiatoken'>
                                <i className='lab la-twitter'></i>
                            </a>
                        </li>
            
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
