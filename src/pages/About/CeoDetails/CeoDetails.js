import React from 'react';

const CeoDetails = () => {
    return (
        <div className='max-w-[1440px] mx-auto p-5 lg:p-0 mb-[100px]'>
            <h1 className='text-4xl text-[#103178] font-bold mt-20 mb-15'>About Our Company</h1>
            <div className='AboutWraper mb-20'>
            <div className='my-10'>
                <p className='text-[16px] text-[#666666] leading-[30px]'>In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.</p>

            </div>
            <div className="lg:ml-20">
                <h3 className='text-3xl text-[#000000] lg:pr-[800px] mb-10'>Quisque erat urna, congue et libero in eleifend euismod velit.</h3>
                <p className='text-[16px] text-[#666666] leading-[30px] mb-20'>In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec</p>
            </div>
           <div className='relative'>
           <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className='w-full lg:w-[40%]'>
                    <picture>
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/about-people.jpg" className='w-full h-full' alt="" />
                    </picture>
                </div>
                <div className="w-full lg:w-1/2">
                    <p className='text-xm text-[#000000] font-medium mb-10'>Rachel Leonard - Bacola CEO</p>
                    <h3 className='text-3xl text-[#000000] lg:pr-40 mb-10'>Duis convallis luctus pretium. Pellentesque habitant morbi</h3>
                    <p className='text-[16px] text-[#666666] leading-[30px] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                    <p className='text-[16px] text-[#666666] leading-[30px] mb-5'>
                    In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida, dui eget aliquet tempus, turpis orci vehicula ipsum, eget porttitor sapien tortor at neque. Cras id pulvinar lacus, ac volutpat neque. Ut at magna id justo bibendum lobortis. Integer tortor nulla, ultricies et nisi sit amet, interdum dictum felis. In semper laoreet dui vitae pharetra. Etiam sit amet molestie nulla, eu efficitur orci. Praesent rutrum ante justo, eget malesuada ante ornare ac. Ut dignissim blandit urna, eget euismod leo rhoncus nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lobortis libero ante. Nullam in feugiat erat. Aenean sed justo dapibus, sodales nisi ut, fringilla lorem. Vestibulum in orci ac nisl condimentum fermentum at et sem. Curabitur fermentum dolor eu lacus consectetur varius.
                    </p>
                </div>
            </div>
            <div className='absolute lg:-bottom-1 lg:left-20 rounded-lg bg-[#FFF] lg:p-5'>
                <p>In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.</p>
            </div>
           </div>

            </div>
        </div>
    );
};

export default CeoDetails;