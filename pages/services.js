import Image from 'next/image';
import React from 'react'
import GetInTouch from '../components/AboutUs/GetInTouche';
import PagesHeader from '../components/PagesHeader';
const Services = () => {
    return <>
        <PagesHeader title='Services' />
        <section className='flex flex-col m-16 items-center'>
            <p className='text-lg font-semibold text-PRIMARY_COLOR '>
                The purchasing process goes beyond the buy-sell process with Turkey advisors company, but a lifetime partnership because we start guiding the buyers from scratch and build the knowledge and figures together to make sure that the buyer is reaching the safe port of the next destination. Thereafter you will get what you deserve with our integrated team of Turkey advisors.
            </p>
            <p className='text-lg font-semibold text-PRIMARY_COLOR '>

                - The steps of the purchase operation, with us start from:
            </p>
            <img src="https://turkeyadvisors.com/sites/img/services.png"
                className='w-[80%]'

            />
        </section>
        <section className='flex flax-col flex-wrap m-16 gap-20 '>
            <div className='flex gap-40 flax-wrap items-center'>
                <div className='grow basis-1/3 text-lg'>
                    <h1 className='text-3xl font-bold text-PRIMARY_COLOR'>We reach you, before you reaching Turkey</h1>
                    <p>Our team will contact you by phone or by
                        making a zoom call to give you all the required information and details, about
                        the city you want to buy your next property in, whether for the purpose of
                        housing or investment</p>
                    <p>
                        Hence the real estate consultant will give
                        a full explanation of the city: infrastructure, city services,
                    </p>
                    <p>
                        All purchase offers will be sent with a
                        detailed explanation about the certain project and the selected municipality,
                        uploaded with prices, payment method, and all the information you want to know
                        to move forward to the next step.
                    </p>
                </div>
                <img src='https://turkeyadvisors.com/storage/img/servicesPage/pxFm1PZlkh4UtPlc4neX.jpg'
                    alt='A message from the owners image' className='grow basis-1/3' />

            </div>

            <div className='flex gap-40 flax-wrap items-center'>
                <img src='https://turkeyadvisors.com/storage/img/servicesPage/79b0NN7QgPHca7lObaDZ.jpg'
                    alt='A message from the owners image' className='grow basis-1/3' />

                <div className='grow basis-1/3 text-lg'>
                    <h1 className='text-3xl font-bold text-PRIMARY_COLOR'>We’ll be waiting for you in the airport</h1>
                    <p>

                        If you have not visited Turkey before or have done so, you will need a pick up-drop service from the airport
                        In our company, we offer you this
                        service based on prior coordination with our staff on each of the arrival
                        dates, the landing airport, and the location of your hotel.
                    </p>

                </div>

            </div>
            <div className='flex gap-40 flax-wrap items-center'>

                <div className='grow basis-1/3 text-lg'>
                    <h1 className='text-3xl font-bold text-PRIMARY_COLOR'>Presentation in our office</h1>
                    <p>


                        After you arrive in Turkey, we will schedule a meeting with you at the company's office to renew and refresh all the information you have previously taken from the real estate Advisor. Meanwhile, we will make a presentation with the means of explanation, and then we will work to determine both the buyer's destination, the purpose of the purchase, the purchasing value.
                    </p>

                </div>
                <img src='https://turkeyadvisors.com/storage/img/servicesPage/Qb7rdV7peW4M4Vspnykj.jpg'
                    alt='A message from the owners image' className='grow basis-1/3' />
            </div>
            <div className='flex gap-40 flax-wrap items-center'>
                <img src='https://turkeyadvisors.com/storage/img/servicesPage/NCetnNHV0sdtXpIrxmcu.jpg'
                    alt='A message from the owners image' className='grow basis-1/3' />

                <div className='grow basis-1/3 text-lg'>
                    <h1 className='text-3xl font-bold text-PRIMARY_COLOR'>Projects tour:</h1>
                    <p>After all the details become apparent to
                        the buyer, from the point of purchase and the purpose of the buying, we can
                        start our tour in a particular city. We will visit the sales offices of
                        projects that correspond to the customer's choices and preferences; we will
                        tour the project and take all the essential details and information.</p>
                    <p>
                        In addition to conducting a separate presentation for each project about: The real estate land data, the process of developing the purchasing value per meter in the project area, in addition to the future of the municipality, and the benefits that the buyer will obtain by purchasing with a specific project.

                    </p>
                    <p>
                        The last step will depend on the buyer's acceptance and satisfaction. If his requirements are compatible with a specific project, we will work on concluding an initial deal to take an offer of the purchasing value in the project.
                    </p>
                </div>
            </div>
        </section>
        <GetInTouch />

    </>
}

export default Services;