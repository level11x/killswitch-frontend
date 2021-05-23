import React, { useEffect, useState } from 'react'

export default function AuctionsRoadMap(props) {

    const [process,setProcess] = useState(20);

    useEffect(()=>{
        let currentDate = new Date().toJSON().slice(0,10);

        if(new Date(currentDate) >= new Date('2021-07-01')){
            return setProcess(100)
        }
        else if(new Date(currentDate) >= new Date('2021-06-01')){
            return setProcess(80)
        }
    },[])

    return (
        <div id="AuctionsRoadMap" className="w-full relative overflow-visible">
            <div className="relative container max-w-screen-xl mx-auto px-6 py-20">
                <h2 className="text-3xl md:text-5xl font-bold text-white text-center">Auctions Roadmap</h2>
                <div className="relative flex flex-col space-y-12 md:space-y-0 md:flex-row justify-center items-center py-14">
                    <div className="z-10 w-full flex flex-row md:items-center md:flex-col space-x-10 md:space-x-0">
                        <div className="flex-shrink-0 w-40 h-40 lg:w-48 lg:h-48 grid place-content-center rounded-full bg-[#3F51B5]" style={{ border: "18px solid #C5CAE9" }}>
                            <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
                                <path fill="white" d="M0.666691 54.0001H32.6667V59.3334H0.666691V54.0001ZM11.9867 19.5201L19.5334 11.9814L57.24 49.6934L49.6987 57.2347L11.9867 19.5201ZM30.8454 0.666748L45.9307 15.7494L38.384 23.2961L23.3067 8.20275L30.8454 0.666748ZM8.20003 23.2934L23.2854 38.3787L15.744 45.9201L0.658691 30.8347L8.20003 23.2934Z" />
                            </svg>
                        </div>
                        <div className="text-white font-black flex flex-col justify-center text-left md:text-center space-y-3 py-6">
                            <span>Start Biddig</span>
                            <span>May 28,2021</span>
                        </div>
                    </div>
                    <div className="z-10 w-full flex flex-row md:items-center md:flex-col space-x-10 md:space-x-0">
                        <div className={`flex-shrink-0 w-40 h-40 lg:w-48 lg:h-48 grid place-content-center rounded-full ${process >= 80 ? 'bg-[#3F51B5]' : 'bg-white'}`} style={{ border: "18px solid #C5CAE9" }}>
                            <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
                                <path fill={process >= 80 ? 'white':'#3F51B5'} d="M25.4002 6.00008L24.3335 0.666748H0.333496V46.0001H5.66683V27.3334H20.6002L21.6668 32.6667H40.3335V6.00008H25.4002Z" />
                            </svg>
                        </div>
                        <div className="text-white font-black flex flex-col justify-center text-left md:text-center space-y-3 py-6">
                            <span>Finishing the auction</span>
                            <span>June 1-3,2021</span>
                        </div>
                    </div>
                    <div className="z-10 w-full flex flex-row md:items-center md:flex-col space-x-10 md:space-x-0">
                        <div className={`flex-shrink-0 w-40 h-40 lg:w-48 lg:h-48 grid place-content-center rounded-full ${process >= 80 ? 'bg-[#3F51B5]' : 'bg-white'}`} style={{ border: "18px solid #C5CAE9" }}>
                            <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill={process >= 80 ? 'white' : '#3F51B5'} d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
                            </svg>
                        </div>
                        <div className="text-white font-black flex flex-col justify-center text-left md:text-center space-y-3 py-6">
                            <span>Production Operation</span>
                            <span>June 1-30, 2021</span>
                        </div>
                    </div>
                    <div className="z-10 w-full flex flex-row md:items-center md:flex-col space-x-10 md:space-x-0">
                        <div className={`flex-shrink-0 w-40 h-40 lg:w-48 lg:h-48 grid place-content-center rounded-full ${process >= 100 ? 'bg-[#3F51B5]' : 'bg-white'}`} style={{ border: "18px solid #C5CAE9" }}>
                            <svg className="w-14 h-14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                <path fill={process >= 100 ? 'white' : '#3F51B5'} d="M3 18h-2c-.552 0-1-.448-1-1v-2h15v-9h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.121-.728 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-6c0 1.656-1.344 3-3 3s-3-1.344-3-3zm3-1.2c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm12 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-4-2.8h-14v-10c0-.552.448-1 1-1h12c.552 0 1 .448 1 1v10zm3-6v3h4.715l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.42z" />
                            </svg>
                        </div>
                        <div className="text-white font-black flex flex-col justify-center text-left md:text-center space-y-3 py-6">
                            <span>Carry out delivery</span>
                            <span>July 1-31, 2021</span>
                        </div>
                    </div>
                    <div className="mmd:hidden absolute h-full w-full flex px-4xl">
                        <div className="h-6 flex-1 bg-white bg-blue mt-32 lg:mt-36 z-0">
                            <div className="bg-[#3F51B5] h-full" style={{width:process+'%'}}></div>
                        </div>
                    </div>
                    <div className="md:hidden absolute top-0 left-0 w-full h-full py-32 pl-16 ml-1">
                        <div className="w-6 h-full bg-white bg-blue md:hidden lg:mt-36 z-0">
                            <div className="bg-[#3F51B5] h-full" style={{height:process+'%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
