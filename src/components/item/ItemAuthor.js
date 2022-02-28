import React from 'react';
import { Jazzicon } from '@ukstv/jazzicon-react';
import { truncate, configEtherScanUrl } from '../../helpers/utils';


function ItemAuthor({ creator, owner }) {
    console.log(creator, owner);
    console.log(typeof creator, typeof owner);
    return (
        <div className='row'>
            
            <div className='col-xl-8'>
                <ul className='list-inline d-flex align-items-center'>
                    <li className='list-inline-item flex-shrink-0 me-4'>
                        <h6 className='mb-3'>Creator</h6>
                        <div className='d-flex align-items-center p-3 bg-dark bd-3 border-gray-gray-darker rounded-sm'>
                        
                            {creator === '0xdF600a1C4D7031097BAd422a04408b63b06dA1B4'|| creator === '0x791A282C56bA5Ae4C746B5422399ca6c783BB901'  ? (
                          <div className='ms-3 rounded-circle bd-3 border-dark bg-white' style={{ width: '45px', height: '45px' }}> 
                            
                            </div>
                         ) : <div className='ms-3 rounded-circle bd-3 border-dark' style={{ width: '45px', height: '45px' }}> 
                         {creator !== undefined && <Jazzicon address={creator} />}
                         </div>}
                         {creator === '0xdF600a1C4D7031097BAd422a04408b63b06dA1B4'|| creator === '0x791A282C56bA5Ae4C746B5422399ca6c783BB901'  ? (
                           <p className='ms-2 mb-0 text-gray-400'>
                           <a
                            href={configEtherScanUrl('52', creator)}
                            className='text-reset'
                            target='_blank'
                           rel='noopener noreferrer'
                           >
                           Mini Utopia
                             </a>
                           </p> ): <p className='ms-2 mb-0 text-gray-400'>
                                    <a
                                 href={configEtherScanUrl('52', creator)}
                                 className='text-reset'
                                 target='_blank'
                                rel='noopener noreferrer'
                                        >
                                            {creator !== undefined && truncate(creator, 10)}
                                        </a>
                                    </p>}
                                   
                                    {creator === '0xdF600a1C4D7031097BAd422a04408b63b06dA1B4' || creator === '0x791A282C56bA5Ae4C746B5422399ca6c783BB901'  ? (
                                    <span className='icon bg-primary text-white me-1'  >
                                     <i className='las la-check-double' ></i>
                                    </span>
                                    ) : null}
                            
                        </div>
                    </li>
                    <li className='list-inline-item flex-shrink-0'>
                        <h6 className='mb-3'>Owner</h6>
                        <div className='d-flex align-items-center p-3 bg-dark bd-3 border-gray-gray-darker rounded-sm'>
                           
                            {owner === '0xdF600a1C4D7031097BAd422a04408b63b06dA1B4' || creator === '0x791A282C56bA5Ae4C746B5422399ca6c783BB901' ? (
                          <div className='ms-3 rounded-circle bd-3 border-dark bg-white' style={{ width: '35px', height: '35px' }}>
                            
                            </div>
                         ) : <div className='ms-3 rounded-circle bd-3 border-dark bg-white' style={{ width: '45px', height: '45px' }}> 
                         <Jazzicon address={owner} />
                         </div>}
                         {owner === '0xdF600a1C4D7031097BAd422a04408b63b06dA1B4' || creator === '0x791A282C56bA5Ae4C746B5422399ca6c783BB901' ? (
                           <p className='ms-2 mb-0 text-gray-400'>
                           <a
                            href={configEtherScanUrl('52', owner)}
                            className='text-reset'
                            target='_blank'
                           rel='noopener noreferrer'
                           >
                           Mini Utopia
                             </a>
                           </p> ): <p className='ms-2 mb-0 text-gray-400'>
                                    <a
                                 href={configEtherScanUrl('52', owner)}
                                 className='text-reset'
                                 target='_blank'
                                rel='noopener noreferrer'
                                        >
                                            {owner !== undefined && truncate(owner, 10)}
                                        </a>
                                    </p>}

                                    {owner === '0xdF600a1C4D7031097BAd422a04408b63b06dA1B4' || creator === '0x791A282C56bA5Ae4C746B5422399ca6c783BB901'  ? (
                                    <span className='icon bg-primary text-white me-1'  >
                                     <i className='las la-check-double' ></i>
                                    </span>
                                    ) : null}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ItemAuthor;
