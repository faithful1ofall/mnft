import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { particlesOptions } from '../../helpers/constants';

function HomeBanner() {
    return (
        <section className='hero bg-dark py-5'>
            <Particles options={particlesOptions} />
            <div className='container py-5 z-index-20 position-relative mt-5'>
                <div className='row align-items-center mt-5'>
                    <div className='col-lg-5 '>
                        <h1>Create, sell and collect digital items.</h1>
                        <p className='text-muted'>
                            Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset
                            to be unique and therefore not interchangeable
                        </p>
                        <ul className='list-inline'>
                            <li className='list-inline-item'>
                                <Link className='btn btn-gradient-primary' to='/mint'>
                                    Create NFT
                                </Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link className='btn btn-dark' to='/explore'>
                                    Explore
                                </Link>
                            </li>
                            <li className='list-inline-item'>
                            <a className='btn btn-black' href='https://www.oneswap.net/cet/trade/0xaC72c23cB2c8A25F85989585fED913334bDe1297'>
                            Buy Mini Utopia Token
                             </a>
                                
                                
                                    
                                
                            </li>
                        </ul>
                        
                          
                    </div>

                    <div className='col-lg-6 ms-auto d-none d-lg-block'>
                        <img className='img-fluid mx-auto' src=' images/illu-3.png' alt='..' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;
