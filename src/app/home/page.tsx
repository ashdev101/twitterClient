import CurrentFeeds from '@/components/Feeds/CurrentFeeds'
import MakePost from '@/components/MakePosts/MakePost'
import PostCard from '@/components/PostCard/PostCard'
import TopHeader from '@/components/centerTopHeader/TopHeader'



type Props = {}

async function page({ }: Props) {


    return (
        <main id="Feeds" className='w-full max-w-[600px] h-full flex-col items-center justify-center border-l-[1px] border-r-[1px] border-neutral-200 xl:relative '>

            <TopHeader />

            <MakePost />
            <CurrentFeeds
                currentSelection='1'
            />
        </main>
    )
}

export default page