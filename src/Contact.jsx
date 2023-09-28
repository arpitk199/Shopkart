import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="row mt-2 pt-2">
                    <div className="col-md-6 bg-dark p-5">
                        {/* <img src="/images/pic1.jpg" height="500px" width="100%" alt="" /> */}
                        <h5 className='text-light'>Contact us</h5>
                        <p className='text-light'>Get news about articles and updates in your inbox</p>

                        <h1 className='text-light pt-5'>GET</h1>
                        <h1 className='text-light'>IN TOUCH</h1>
                    </div>

                    <div className="col-md-6 bg-dark">
                        <form>
                            <div className="mb-3 mt-5">
                                <input type="text" name='name' placeholder='NAME' className='form-control' />
                            </div>
                            <div className="mb-3 ">
                                <input type="email" name='email' placeholder='EMAIL' className='form-control' />
                            </div>
                            <div className="mb-3 ">
                                <input type="phone" name='phone' placeholder='PHONE' className='form-control' />
                            </div>
                            <div className="mb-3 ">
                                <textarea name="message" rows="4" placeholder='MESSAGE' className='form-control'></textarea>
                            </div>
                            <div className="mb-3 ">
                                <button type='send' className='btn btn-danger btn-sm w-100 text-right'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
            </div >
    </>
  )
}
