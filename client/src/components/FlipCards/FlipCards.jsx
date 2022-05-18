
import React from 'react'
import './flipcards.css'
import DOG1 from '../../Images/puppy-run.jpg'
import DOG2 from '../../Images/puppy-sad.jpg'
import DOG3 from '../../Images/puppy-white.jpg'

// import { HiChevronDoubleRight } from 'react-icons/hi'

// const Dogs = [
//     {
//         image: DOG1,
//         name: 'Delilah',
//         sex: 'Female',
//         breed: 'Golden Retriever'
//     },
//     {
//         image: DOG2,
//         name: 'Delilah',
//         sex: 'Female',
//         breed: 'Golden Retriever'
//     },
// ]

const FlipCards = () => {
    return (
        <section id='flipcards' className='container'>
            <div className='flipcard__container'>
                <div className="flipcard">
                    <div className="flipcard__inner">
                        <article className='flipcard__front'>                           
                                <img className='flipcard__img img-fluid' src={DOG1} alt="puppy"></img>                           
                            <p>Delilah, Female</p>
                            <p>Golden Retriever</p>        
                        </article>
                        <div className="flipcard__back">
                            <p className="flipcard__info">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A doloremque harum nostrum explicabo
                                reprehenderit incidunt similique qui, maiores ratione corrupti
                                sequi beatae dignissimos laboriosam dolore. Explicabo deleniti voluptatibus quo veritatis?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flipcard">
                    <div className="flipcard__inner">
                        <article className='flipcard__front'>                           
                                <img className='flipcard__img img-fluid' src={DOG2} alt="puppy"></img>                           
                            <p>Delilah, Female</p>
                            <p>Golden Retriever</p>        
                        </article>
                        <div className="flipcard__back">
                            <p className="flipcard__info">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A doloremque harum nostrum explicabo
                                reprehenderit incidunt similique qui, maiores ratione corrupti
                                sequi beatae dignissimos laboriosam dolore. Explicabo deleniti voluptatibus quo veritatis?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flipcard">
                    <div className="flipcard__inner">
                        <article className='flipcard__front'>                           
                                <img className='flipcard__img img-fluid' src={DOG3} alt="puppy"></img>                           
                            <p>Delilah, Female</p>
                            <p>Golden Retriever</p>        
                        </article>
                        <div className="flipcard__back">
                            <p className="flipcard__info">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A doloremque harum nostrum explicabo
                                reprehenderit incidunt similique qui, maiores ratione corrupti
                                sequi beatae dignissimos laboriosam dolore. Explicabo deleniti voluptatibus quo veritatis?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flipcard">
                    <div className="flipcard__inner">
                        <article className='flipcard__front'>                           
                                <img className='flipcard__img img-fluid' src={DOG1} alt="puppy"></img>                           
                            <p>Delilah, Female</p>
                            <p>Golden Retriever</p>        
                        </article>
                        <div className="flipcard__back">
                            <p className="flipcard__info">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A doloremque harum nostrum explicabo
                                reprehenderit incidunt similique qui, maiores ratione corrupti
                                sequi beatae dignissimos laboriosam dolore. Explicabo deleniti voluptatibus quo veritatis?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flipcard">
                    <div className="flipcard__inner">
                        <article className='flipcard__front'>                           
                                <img className='flipcard__img img-fluid' src={DOG2} alt="puppy"></img>                           
                            <p>Delilah, Female</p>
                            <p>Golden Retriever</p>        
                        </article>
                        <div className="flipcard__back">
                            <p className="flipcard__info">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A doloremque harum nostrum explicabo
                                reprehenderit incidunt similique qui, maiores ratione corrupti
                                sequi beatae dignissimos laboriosam dolore. Explicabo deleniti voluptatibus quo veritatis?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flipcard">
                    <div className="flipcard__inner">
                        <article className='flipcard__front'>                           
                                <img className='flipcard__img img-fluid' src={DOG3} alt="puppy"></img>                           
                            <p>Delilah, Female</p>
                            <p>Golden Retriever</p>        
                        </article>
                        <div className="flipcard__back">
                            <p className="flipcard__info">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A doloremque harum nostrum explicabo
                                reprehenderit incidunt similique qui, maiores ratione corrupti
                                sequi beatae dignissimos laboriosam dolore. Explicabo deleniti voluptatibus quo veritatis?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flipcard">
                    <div className="flipcard__inner">
                        <article className='flipcard__front'>                           
                                <img className='flipcard__img img-fluid' src={DOG2} alt="puppy"></img>                           
                            <p>Delilah, Female</p>
                            <p>Golden Retriever</p>        
                        </article>
                        <div className="flipcard__back">
                            <p className="flipcard__info">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A doloremque harum nostrum explicabo
                                reprehenderit incidunt similique qui, maiores ratione corrupti
                                sequi beatae dignissimos laboriosam dolore. Explicabo deleniti voluptatibus quo veritatis?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flipcard">
                    <div className="flipcard__inner">
                        <article className='flipcard__front'>                           
                                <img className='flipcard__img img-fluid' src={DOG3} alt="puppy"></img>                           
                            <p>Delilah, Female</p>
                            <p>Golden Retriever</p>        
                        </article>
                        <div className="flipcard__back">
                            <p className="flipcard__info">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A doloremque harum nostrum explicabo
                                reprehenderit incidunt similique qui, maiores ratione corrupti
                                sequi beatae dignissimos laboriosam dolore. Explicabo deleniti voluptatibus quo veritatis?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flipcard">
                    <div className="flipcard__inner">
                        <article className='flipcard__front'>                           
                                <img className='flipcard__img img-fluid' src={DOG1} alt="puppy"></img>                           
                            <p>Delilah, Female</p>
                            <p>Golden Retriever</p>        
                        </article>
                        <div className="flipcard__back">
                            <p className="flipcard__info">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A doloremque harum nostrum explicabo
                                reprehenderit incidunt similique qui, maiores ratione corrupti
                                sequi beatae dignissimos laboriosam dolore. Explicabo deleniti voluptatibus quo veritatis?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flipcard">
                    <div className="flipcard__inner">
                        <article className='flipcard__front'>                           
                                <img className='flipcard__img img-fluid' src={DOG2} alt="puppy"></img>                           
                            <p>Delilah, Female</p>
                            <p>Golden Retriever</p>        
                        </article>
                        <div className="flipcard__back">
                            <p className="flipcard__info">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A doloremque harum nostrum explicabo
                                reprehenderit incidunt similique qui, maiores ratione corrupti
                                sequi beatae dignissimos laboriosam dolore. Explicabo deleniti voluptatibus quo veritatis?
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default FlipCards