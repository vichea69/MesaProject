// eslint-disable-next-line no-unused-vars
import React from 'react';


function Price() {
   
    const plans = [
        {
            name: "Bronze Package",
            price: 12,
            features: [
                "Period : 3 days",
                "Dialy income rate : 5%",
                "Total income rate : 15%",
                "Capital USD: 100 - 2000",
                "Referral bonus : 5%",
                "Withdrawal fee : Free",
        
            ],
        },
        {
            name: "Silver Package",
            price: 35,
            features: [
                "Period : 7 days",
                "Dialy income rate : 12%",
                "Total income rate : 84%",
                "Capital USD: 2000 - 10000",
                "Referral bonus : 5%",
                "Withdrawal fee : Free",
            ],
        },
        {
            name: "Gold Package",
            price: 60,
            features: [
                "Period : 15 days",
                "Dialy income rate : 20%",
                "Total income rate : 300%",
                "Capital USD: 10000 - 50000",
                "Referral bonus : 10%",
                "Withdrawal fee : Free",
            ],
        },
        {
            name: "Diamond Package",
            price: 60,
            features: [
                "Period : 30 days",
                "Dialy income rate : 35%",
                "Total income rate : 1050%",
                "Capital USD: 50000 - 1M",
                "Referral bonus : 20%",
                "Withdrawal fee : Free",
            ],
        },
    ];
    const handleGetStartedClick = () => {
        // Replace "https://t.me/your_telegram_username" with your actual Telegram link
        const telegramLink = "https://t.me/Asha888";
        window.location.href = telegramLink;
    };
    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Pricing for all sizes
                    </h3>
                    <div className='mt-3 max-w-xl'>
                        {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
                        </p> */}
                    </div>
                </div>
                <div
                    className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-4'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx}
                                 className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
                                <div>
                                    <span className='text-indigo-600 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='mt-4 text-gray-800 text-3xl font-semibold'>
                                        ${item.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                    </div>
                                </div>
                                <ul className='py-8 space-y-3'>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-indigo-600'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fill-rule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clip-rule='evenodd'></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="flex-1 flex items-end">
                                    <button
                                        onClick={handleGetStartedClick }
                                        className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Price;