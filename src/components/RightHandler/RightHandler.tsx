import FollowOption from '@/components/FollowOption/FollowOption'
import WhatsHappeningOption from '@/components/WhatsHappeningOptions/WhatsHappeningOption'
import Image from 'next/image'
import { BsSearch } from 'react-icons/bs'
import { RxCrossCircled } from 'react-icons/rx'

type Props = {}

function RightHandler({ }: Props) {
    return (
        <section className=' hidden lg:block max-w-[350px] w-full h-full lg:border-[1px] border-blue-300 relative'>
            <div
                // className='w-full h-full absolute top-0 left-4'
                className='w-full h-full  '
                >


                <main className=' hidden lg:flex flex-col items-start justify-center gap-3 mr-4 relative z-auto'>
                    <div id='searchBar' className=' bg-white sticky z-500 top-0 mt-2 w-full max-h-max flex flex-row items-center justify-center gap-2 rounded-full border-[1px] border-blue-200 '>
                        <div className=' ml-3 mr-2 '>
                            <BsSearch size={20} />
                        </div>
                        <input type="text" className=' outline-none px-3 py-2' />
                        <div className='ml-2 mr-3 '>
                            <RxCrossCircled className='' />
                        </div>
                    </div>

                    <div id='subscribe'>
                        <button className=' px-3 py-2 bg-black font-bold text-white rounded-full '>
                            Subscribe
                        </button>
                    </div>

                    <section id=' whatsHappening' className=' -z-10 mt-3 flex flex-col items-center justify-center gap-3 w-full'>
                        <div id='whatsHappening hEADING' className='  text-lg xl:text-xl font-bold text-black self-start'>Whats Happening</div>
                        <WhatsHappeningOption
                            title='Treding'
                            MainHeading='this is it'
                        />
                        <WhatsHappeningOption
                            title='Treding'
                            MainHeading='this is it'
                        />
                        <WhatsHappeningOption
                            title='Treding'
                            MainHeading='this is it'
                        />
                        <WhatsHappeningOption
                            title='Treding'
                            MainHeading='this is it'
                        />

                        <span className=' text-md text-blue-400 self-start' >Show More</span>
                    </section>

                    <section id='follow ' className=' flex flex-col items-center justify-center gap-2 w-full min-h-max'>
                        <div className=' text-md font-bold self-start'> Who To Follow</div>

                        <FollowOption
                            avatar='A'
                            name='Ashish'
                            twitterHandler='@Ashish'

                        />
                        <FollowOption
                            avatar='A'
                            name='Ashish'
                            twitterHandler='@Ashish'

                        />
                        <FollowOption
                            avatar='A'
                            name='Ashish'
                            twitterHandler='@Ashish'

                        />
                        <FollowOption
                            avatar='A'
                            name='Ashish'
                            twitterHandler='@Ashish'

                        />
                        <FollowOption
                            avatar='A'
                            name='Ashish'
                            twitterHandler='@Ashish'

                        />
                        <FollowOption
                            avatar='A'
                            name='Ashish'
                            twitterHandler='@Ashish'

                        />
                        <FollowOption
                            avatar='A'
                            name='Ashish'
                            twitterHandler='@Ashish'

                        />
                        <FollowOption
                            avatar='A'
                            name='Ashish'
                            twitterHandler='@Ashish'

                        />
                        <FollowOption
                            avatar='A'
                            name='Ashish'
                            twitterHandler='@Ashish'

                        />
                        <FollowOption
                            avatar='A'
                            name='Ashish'
                            twitterHandler='@Ashish'

                        />
                        <FollowOption
                            avatar='A'
                            name='Ashish'
                            twitterHandler='@Ashish'

                        />
                        <FollowOption
                            avatar='A'
                            name='Ashish'
                            twitterHandler='@Ashish'

                        />

                    </section>





                </main >
            </div>
        </section >
    )
}

export default RightHandler