import React from 'react'
import S1 from '../../assets/teacher.png'
import S2 from '../../assets/academic.png'
import S3 from '../../assets/development.png'

const ServiceComponent = (props) => {

    const { title, description, redirect, url, buttonText, img } = props.data;

    return (
        <>
            <div className='bg-white rounded-xl shadow-xl border-[2px] border-[#D9D9D9] flex flex-col justify-between h-full w-full p-8'>

                <div className='flex flex-col gap-2'>
                    <div className='font-bold'>{title}</div>
                    <p className='text-sm'>{description}</p>
                </div>

                <div className='flex flex-col gap-3 items-center'>

                    <img src={img} alt="" className='w-[50%]' />

                    <button className='py-2 w-full text-center border-[2px] border-[#D9D9D9] rounded-md hover:bg-gradient-to-r from-[#1D4CA1] to-[#00AEEF] hover:border-[#1D4CA1] hover:text-white transition-all duration-300 ease-in-out font-medium'>{buttonText}</button>

                </div>

            </div>
        </>
    )

}

const ServicesSection = () => {

    const data = [
        {
            title: 'Industrial Training& Placement Support',
            description: '"TopStack offers industrial training with cutting-edge tech, equipping you for real-world challenges. Elevate your skills today."',
            redirect: true,
            url: '/',
            buttonText: 'ENROLL NOW',
            img: S1
        },
        {
            title: 'Academic Consultancy',
            description: `"Unlock academic success with TopStack's expert consultancy. Tailored guidance, proven strategies, and brighter educational pathways await."`,
            redirect: true,
            url: '/',
            buttonText: 'LEARN MORE',
            img: S2
        },
        {
            title: 'In-House Software Development',
            description: `"Elevate efficiency and innovation with TopStack's in-house software development. Custom solutions tailored to your business's unique needs."`,
            redirect: false,
            url: '/',
            buttonText: 'CONTACT US',
            img: S3
        },
    ]

    return (

        <>
            <div className='flex flex-col h-screen items-center gap-24 justify-between p-4 sm:p-8 md:p-16 lg:p-24 xl:px-32 service-bg bg-auto bg-no-repeat bg-center'>

                <div className='text-3xl font-bold text-center'>What do we offer</div>

                <div className='grid grid-cols-3 gap-20 h-full'>

                    {
                        data?.map((data, index) => {
                            return (
                                <ServiceComponent key={index} data={data} />
                            )
                        })
                    }

                </div>

            </div>
        </>

    )
}

export default ServicesSection