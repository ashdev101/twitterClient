import CurrentFeeds from '@/components/Feeds/CurrentFeeds'
import MakePost from '@/components/MakePosts/MakePost'
import TopHeaderPhone from '@/components/PhoneComponent/TopHeader'
import TopHeader from '@/components/centerTopHeader/TopHeader'


type Props = {}

async function page({ }: Props) {

    //it was not easy but doing overflow scroll to that which was getting restricted because of h-screen did the job
    
    return (
        <main id="Feeds" className='w-full lg:max-w-[600px] h-full flex-col items-center justify-center  xl:relative  '>

            <section id="topSectionFeeds" className=" hidden w-full md:flex flex-row items-center justify-around sticky top-0 bg-white " >
                <TopHeader />
            </section>

            <section id='header-for-phone' className=' fixed top-0 w-full max-h-max z-[500] md:hidden'>
                <TopHeaderPhone />
            </section>

            <section className=' hidden md:block w-full '>

                <MakePost />

            </section>

            <section className=' overflow-y-scroll mt-[125px] pb-[100px] md:mt-0 md:mb-0 '>
                <CurrentFeeds
                    currentSelection='1'
                />
            </section>

        </main>
    )
}

export default page