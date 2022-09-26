import React from 'react'
import { HiSearch } from 'react-icons/hi';
import Article from '../components/Home/Article';
import Property from '../components/Home/Property';
import SomeOffers from '../components/Home/SomeOffers';
import PagesHeader from '../components/Commun/PagesHeader';

const Articles = () => {
    const articles = [
        {
            title: "What Do We Know About International Marmara Road",
            summary:
                "Once upon a time, Fikirtepe was a shabby, messy, and disorganized region, but within 18 years became...",
            image:
                "https://www.turkeyadvisors.com/storage/img/posts/6q8swdHMDaIRR6Ge1hXM.jpg",
            date: "13 Jul 2022",
            views: "292",
        },
        {
            title:
                "Straightforward talks: Is Fikirtepe District Suitable for Real Estate Investment:",
            summary:
                "Once upon a time, Fikirtepe was a shabby, messy, and disorganized region, but within 18 years became...",
            image:
                "https://www.turkeyadvisors.com/storage/img/posts/zPz6jZJVHsk1mbuC1Zu8.jpg",
            date: "20 Jul 2022",
            views: "162",
        },
        {
            title:
                "Straightforward talks: Is Fikirtepe District Suitable for Real Estate Investment:",
            summary:
                "Once upon a time, Fikirtepe was a shabby, messy, and disorganized region, but within 18 years became...",
            image:
                "https://www.turkeyadvisors.com/storage/img/posts/zPz6jZJVHsk1mbuC1Zu8.jpg",
            date: "20 Jul 2022",
            views: "162",
        },
        {
            title: "What Do We Know About International Marmara Road",
            summary:
                "Once upon a time, Fikirtepe was a shabby, messy, and disorganized region, but within 18 years became...",
            image:
                "https://www.turkeyadvisors.com/storage/img/posts/6q8swdHMDaIRR6Ge1hXM.jpg",
            date: "13 Jul 2022",
            views: "292",
        },
        {
            title:
                "Straightforward talks: Is Fikirtepe District Suitable for Real Estate Investment:",
            summary:
                "Once upon a time, Fikirtepe was a shabby, messy, and disorganized region, but within 18 years became...",
            image:
                "https://www.turkeyadvisors.com/storage/img/posts/zPz6jZJVHsk1mbuC1Zu8.jpg",
            date: "20 Jul 2022",
            views: "162",
        },
        {
            title: "What Do We Know About International Marmara Road",
            summary:
                "Once upon a time, Fikirtepe was a shabby, messy, and disorganized region, but within 18 years became...",
            image:
                "https://www.turkeyadvisors.com/storage/img/posts/6q8swdHMDaIRR6Ge1hXM.jpg",
            date: "13 Jul 2022",
            views: "292",
        },
        {
            title:
                "Straightforward talks: Is Fikirtepe District Suitable for Real Estate Investment:",
            summary:
                "Once upon a time, Fikirtepe was a shabby, messy, and disorganized region, but within 18 years became...",
            image:
                "https://www.turkeyadvisors.com/storage/img/posts/zPz6jZJVHsk1mbuC1Zu8.jpg",
            date: "20 Jul 2022",
            views: "162",
        },
    ];
    const property = {
        img: "https://www.turkeyadvisors.com/storage/img/projects/HrrN8MnLdd653tRKd1pD.jpeg",
        title:
            "Family Friendly Edgy Architectural Design in the Center of European Istanbul",
        overview:
            "The project has a unique, edgy architectural design, located in Kagithane municipality, which has been remodel...",
        price: "$ 3200,000",
        location: "Istanbul",
        nbrBedrooms: "2",
        nbrBathrooms: "2",
        surface: "83 Sq. m",
    }
    return <>
        <PagesHeader title='Articles' link='articles' />
        <div className='flex flex-col-reverse flex-wrap p-8 md:flex-row'>
            <div className='flex flex-col m-8 basis-2/4 grow '>
                <h1 className='text-3xl font-bold text-PRIMARY_COLOR'>
                    All Articles About Real Estate
                </h1>
                <p className='py-4'>
                    Turkey Advisories articles are genuinely created to grant you the feeling as if you are in Turkey yourself by giving you the full comprehension knowledge about the Life, Economy, Politics, and Traditions of Turkey
                </p>
                <div className='grid grid-cols-2 gap-8'>
                    {articles.map((article, index) => (
                        <Article data={article} key={`article-${index}`} />
                    ))}
                </div>
            </div>
            <div className='flex flex-col my-8 basis-1/4 grow'>
                <h1 className='px-4 text-2xl border-l-2 border-SECONDARY_COLOR'>Search for something</h1>
                <div className='flex items-center py-2 my-2 text-xl border rounded border-PRIMARY_COLOR'>
                    <HiSearch className='mx-4 font-extrabold  text-SECONDARY_COLOR' />
                    <input type='text' placeholder='Search' />
                </div>

                <h1 className='px-4 my-8 text-2xl border-l-2 border-SECONDARY_COLOR'>Special Offers</h1>
                <div className='px-8'>
                <Property data={property}/>
                </div>

                <SomeOffers />

                <h1 className='px-4 my-8 text-2xl border-l-2 border-SECONDARY_COLOR'>Last Articles</h1>
                <div className='flex flex-col gap-8 px-8'>
                    {articles.map((article, index) => (
                        <Article data={article} key={`article-${index}`} />
                    ))}
                </div>


            </div>
        </div>
    </>
}

export default Articles;