import React from 'react';
import "./signup.css";
import Link from "next/link";

const SignUP = () => {
  return (
    <>
      <div className='side-space'>
           <div className='sign-up'>
                <h3 className='service-Common-heading pb-3 text-start text-white text-decoration-underline'>Sign Up </h3>
                   <div className='signup-info'>
                        <div className='flex-auto mb-2'>
                            {/* <lable className="text-white">Email *</lable> */}
                            <input className='form-control' type="text" placeholder='Email' style={{borderRadius: '50px',border:'3px solid #237da9'}}/>
                        </div>

                        <div className='flex-auto mb-2'>
                            {/* <lable className="text-white"> Name *</lable> */}
                            <input className='form-control' type="text" placeholder='Name' style={{borderRadius: '50px',border:'3px solid #237da9'}}/>
                        </div>

                        <div className='flex-auto mb-2'>
                            {/* <lable className="text-white">Phone *</lable> */}
                            <input className='form-control' type="text" placeholder='Phone' style={{borderRadius: '50px',border:'3px solid #237da9'}}/>
                        </div>

                        <div className="text-center mb-2 pt-2">
                            <button className='btn btn-signup ms-2'>Sign Up</button>
                        </div>

               </div>
                <div className='text-center mt-3'>
                    <p className='mb-0 text-sm text-white'>By submitting this form, you are consenting to receive marketing emails from: Northshore Medical & Aesthetics Center, 7 Northshore Road, 
                         Devonshire, DV 01, BM, <Link href="/namc.bm" className='text-white'> http://www.nmac.bm.</Link><br/> You can revoke your consent to receive emails at 
                         any time by using the SafeUnsubscribe® link, found at the bottom of every email. Emails are serviced by Constant Contact.</p>
                </div>
           </div>


      </div>
    </>
  )
}

export default SignUP

