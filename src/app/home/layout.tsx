import LeftHandler from '@/components/LeftHandle/LeftHandler'
import RightHandler from '@/components/RightHandler/RightHandler'

type Props = {
    children: React.ReactNode
}

function layout({ children }: Props) {
    return (
        
        <main className=" flex flex-row items-center w-screen h-screen overflow-x-hidden relative">
            <LeftHandler />
            {children}
            <RightHandler />
        </main>
    )
}

export default layout