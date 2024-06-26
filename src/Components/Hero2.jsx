// eslint-disable-next-line no-unused-vars
import React from 'react';
import {TextGenerateEffect} from "./ui/text-generate-effect.tsx";

function Hero2() {
    const words = " Simply purchase a package on our mining marketplace, sit back, and wait for the mining round to finish. If you’re lucky, you will mine a reward of up to 6.25 Bitcoins!"

    return (
        <section className="py-28">
            <div
                className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                    <h1 className="font-sans text-4xl text-fuchsia-900 font-extrabold md:text-5xl">
                        How is it work
                    </h1>
                    <h2 className=" text-lg">
                        We help startups to grow and make money
                    </h2>
                    <p className='text-black'>
                        <TextGenerateEffect words={words}/>
                    </p>
                    <p className='text-black'>
                        Buy an EasyMining Package
                        How to give it a try? Simply purchase a package from your EasyMining Package(Contact BITFORGEMINER Support), sit back, and wait for the mining round to finish.

                    </p>
                </div>
                <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                    <img
                        src="Images/data.svg"
                        className=" md:rounded-tl-[108px]"
                        alt="test"
                    />
                </div>
            </div>

        </section>
    );
}

export default Hero2;