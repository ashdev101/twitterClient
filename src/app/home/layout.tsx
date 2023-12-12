import LeftHandler from '@/components/LeftHandle/LeftHandler'
import MakePost from '@/components/MakePosts/MakePost'
import EmojiModal from '@/components/Modals/EmojiModal'
import Giphy from '@/components/Modals/Giphy'
import PostModal from '@/components/Modals/PostModal'
import PostMake from '@/components/PhoneComponent/PostMake'
import SideMenuBarPhone from '@/components/PhoneComponent/SideMenuBarPhone'
import BottomHandler from '@/components/PhoneComponent/bottomHandler'
import RightHandler from '@/components/RightHandler/RightHandler'


type Props = {
    children: React.ReactNode
}

function layout({ children }: Props) {
    return (
        
        <main className=" flex flex-row items-center w-screen h-screen overflow-x-hidden overflow-y-scroll relative">
            <section id='left-navbar' className=' hidden md:flex lg:w-[310px]  h-full items-center self-start justify-center gap-2 xl:overflow-y-auto sticky top-0 '>
                <LeftHandler />
            </section>

            <section id='bottom-navbar-phones' className=' flex md:hidden  fixed bottom-0 w-full z-[500]'>
                <BottomHandler />
            </section>

            <section id='make-post-phone' className=' fixed bottom-20 right-4 md:hidden z-[500]'>
                <PostMake/>
            </section>
            
            <section className=' fixed top-0 z-[700]'>
            <PostModal/>
            </section>

            <section className=' fixed top-0 z-[700]'>
                <Giphy/>
            </section>
         

            {children}
   
            

            <section className=' hidden lg:block max-w-[350px] w-full h-full  sticky '>
                <RightHandler />
            </section>
        </main>
    )
}

export default layout