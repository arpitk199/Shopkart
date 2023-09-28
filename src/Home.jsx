import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    var data = [
        { id: 1, name: "FLORIDA JACKET", Originalprice: 1000, finalprice: 500, pic: "pic1.jpg" },
        { id: 2, name: "FLORIDA JACKET", Originalprice: 1000, finalprice: 500, pic: "pic2.jpg" },
        { id: 3, name: "FLORIDA JACKET", Originalprice: 1000, finalprice: 500, pic: "pic3.jpg" },
        { id: 4, name: "FLORIDA JACKET", Originalprice: 1000, finalprice: 500, pic: "pic4.jpg" },
        { id: 5, name: "FLORIDA JACKET", Originalprice: 1000, finalprice: 500, pic: "pic5.jpg" },
    ]
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/banner 1.jpg" height="600px" className="d-block w-100" alt="..." />
                        <div class="top-left">Fresh</div>
                        <div class="centered">2022</div>
                        <div class="bottom-left">Look</div>
                    </div>
                    <div className="carousel-item active">
                        <img src="/images/banner 2.jpg " height="600px" className="d-block w-100" alt="..." />
                        <div class="top-left">Fresh</div>
                        <div class="centered">2022</div>
                        <div class="bottom-left">Look</div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/banner 3.jpg " height="600px" className="d-block w-100" alt="..." />
                        <div class="top-left">Fresh</div>
                        <div class="centered">2022</div>
                        <div class="bottom-left">Look</div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className="">
                <h2 className='m-5 text-decoration-underline'>New Products</h2>

                <div className="row">
                    <div className='col-md-2'>
                        <h6 className='text-dark  mx-4 p-2'>Apparel</h6>
                        <h3 className='text-dark mx-4 p-2'>Accessories</h3>
                        <h5 className='text-dark mx-4 p-2'>Best Seller</h5>
                        <h6 className='text-dark mx-4 p-2'>50% off</h6>
                    </div>
                    {
                        data.map((item, index) => {
                            return <div key={index} className="col-md-2">
                                <div className="card" width="100%">
                                    <img src={`/images/${item.pic}`} height="200px" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className='card-text'>Sufferd alteration in some form, by suffalteration in some forme</p>
                                        <p className="card-text"><del className='text-danger'>&#8377;{item.Originalprice}</del> <span className='text-success'>&#8377;{item.finalprice}</span></p>
                                        <Link to="/" className="btn btn-dark w-100 btn-sm">Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>


                <div className="row mt-2 pt-2">
                    <div className="col-md-6 bg-dark p-5">
                        {/* <img src="/images/pic1.jpg" height="500px" width="100%" alt="" /> */}
                        <h5 className='text-light'>Contact us</h5>
                        <p className='text-light'>Get news about articles and updates in your inbox</p>

                        <h1 className='text-light pt-5'>GET</h1>
                        <h1 className='text-light'>IN TOUCH</h1>
                    </div>

                    <div className="col-md-6 bg-dark">
                        <form className='p-5'>
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

            </div >

            <section className='bg-dark p-5'>
                <h5 className='text-light p-2'>Newslleter Subscription</h5>
                <form>
                    <div className='w-100 btn-group'>
                        <input type="email" name='email' className='form-control' placeholder='Enter Email Address to Subscribe Newslleter Service' />
                        <button className='btn btn-danger'>Subscribe</button>
                    </div>
                </form>
            </section>
        </>
    )
}

