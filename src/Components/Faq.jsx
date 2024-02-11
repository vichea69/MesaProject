// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRef, useState } from "react"

function Faq() {
    const FaqsCard = (props) => {

        const answerElRef = useRef()
        const [state, setState] = useState(false)
        const [answerH, setAnswerH] = useState('0px')
        // eslint-disable-next-line react/prop-types
        const { faqsList, idx } = props

        const handleOpenAnswer = () => {
            const answerElH = answerElRef.current.childNodes[0].offsetHeight
            setState(!state)
            setAnswerH(`${answerElH + 20}px`)
        }

        return (
            <div
                className="space-y-3 mt-5 overflow-hidden border-b"
                key={idx}
                onClick={handleOpenAnswer}
            >
                <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                    {faqsList.q}
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        )
                    }
                </h4>
                <div
                    ref={answerElRef} className="duration-300"
                    style={state ? {height: answerH } : {height: '0px'}}
                >
                    <div>
                        <p className="text-gray-500">
                            {faqsList.a}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    const faqsList = [
        {
            q: "What we provide?",
            a: "Cryptocurrency mining" +
                "\n We are a global leader in mining innovation, and since January 2023, we have been at the center of the mining world for millions of users.\n" +
                "BitForgeMiner created the original algorithm-switching software, and provides solutions for both GPU and ASIC miners, with a focus on ease of use."
        },
        {
            q: "What is EasyMining?",
            a:"EasyMining is the ‘original’ concept of mining. You validate blocks of cryptocurrency transactions with your computing power and get a reward for your ‘work’. But mining has evolved so much that now very large ‘pools’ (groups of computing power) make it much harder for an easy miner to find a block on their own since you are competing against much larger operations, and they split the rewards among all their miners.",
        },
        {
            q: "Why choose easyming?",
            a: "This is exactly what BITFORGEMINER does. We provide the hash power of other miners so that you can use it to try and mine a block yourself, meaning you potentially get the whole block reward and do not have to share it with anyone!\n" +
                "Pool Mining\n" +
                "With pool mining, many miners group (‘pool’) together their hash power to increase the overall hash rate and have a higher chance of finding a block. When a reward is confirmed, the amount is split between all the miners, meaning lower rewards.\n"
        },
        
    ]
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
                 style={{background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)"}}></div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        // eslint-disable-next-line react/jsx-key
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default Faq;