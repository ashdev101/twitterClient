'use client'
import { useEffect, useState } from 'react'
import PostCard from '../PostCard/PostCard'
import { getAllTweets } from '../../../ReactQueryQueries/Tweets'
import { formatDistance } from 'date-fns'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Features/Store/Store'

type Props = {}

function ForYou({ }: Props) {
    const [currentPage, setCurrentPage] = useState(1)
    // const [take, setTake] = useState(2)
    // const [skip, setSkip] = useState(currentPage * take)
    // const { data, isLoading } = getAllTweets(skip , take)
    const { data } = getAllTweets()
    const [element, setElement] = useState(null)
    const router = useRouter()
    // const lastElementRef = useCallback(node => setElement(node),[])


    const userId = useSelector((state: RootState) => state.CurrentUser.currentUser.id)

    useEffect(() => {
        if (!userId) {
            router.push("/signin")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

    const postList = data?.getAllTweets


    // console.log(postList?.length)

    if (postList?.length === 0) {
        return ("no post to show")
    }
    // console.log(postList)

    // console.log(postList)
    const timesAgo = (timestamp: number) => {

        var formatedTime = new Date(timestamp)
        const CreadtedAgoInHours = formatDistance(formatedTime, new Date())
        // console.log(CreadtedAgoInHours)
        return (CreadtedAgoInHours).toString()

    }





    const videoFormats = [
        'mp4',
        'webm',
        'avi',
        'mov',
        'mkv'
    ];

    const imageFormats = [
        'jpg',
        'jpeg',
        'png',
        'gif',
        'bmp',
        'svg',
        'tiff',
        'webp'
    ];

    const isImage = (url: string | null | undefined) => {
        if (!url) return
        const format = url.split(".").pop()
        if (format && imageFormats.includes(format)) return true

        return false
    }
    // const isNoMoreData = useState(postList?.length === 1)

    // const [isIntersecting, setIntersecting] = useState(false)

    // const intObserver = useRef<IntersectionObserver | null>(null) 

    // const intLastElement = useCallback( (node: HTMLDivElement | null) =>{

    //     if(isLoading )  return 
    //     console.log(intObserver.current)
    //     if(intObserver && intObserver.current) intObserver.current.disconnect()
    //     intObserver.current = new IntersectionObserver(entries=>{
    //         if(entries[0].isIntersecting && !isNoMoreData){
    //             console.log("time to fetch more")
    //         }
    //     })
    //     if(node) intObserver.current.observe(node)
    // },[isLoading , isNoMoreData , currentPage])


    // useEffect(() => {
    //     console.log(ref)
    //     const observer = new IntersectionObserver(([entry]) => {
    //         setIntersecting(entry.isIntersecting);
    //     });

    //     if (ref.current) {
    //         observer.observe(ref.current);
    //     }

    //     return () => {
    //         observer.disconnect();
    //     };
    // }, []); // No dependencies to avoid unnecessary re-runs

    // useEffect(() => {
    //     if (isIntersecting && ref.current) {
    //         //condition to do something
    //     }

    // }, [isIntersecting]);
    return (

        <section >
            {/* id='postFeeds' className=' min-h-max flex flex-col items-center justify-center gap-3 pr-4 sm:pr-0' */}

            {
                postList &&
                postList.map(
                    (item, index) => {

                        //need to do as ts is throwing an error of item being empty 


                        if (item && postList.length === index + 1) {

                            return (
                                <div key={index}
                                // ref={intLastElement}
                                >
                                    <PostCard
                                        key={index}
                                        name={item.author.firstName}
                                        profileImageUrl={item.author.profileImgURL}
                                        content={item.content}
                                        createdAt={timesAgo(Number(item.createdAt))}
                                        image={item.image}
                                        isImage={isImage(item.image)}
                                        tweetId={item.id}

                                    />
                                </div>)
                        } else if (item) {
                            return (<PostCard

                                key={index}
                                name={item.author.firstName}
                                profileImageUrl={item.author.profileImgURL}
                                content={item.content}
                                createdAt={timesAgo(Number(item.createdAt))}
                                image={item.image}
                                isImage={isImage(item.image)}
                                tweetId={item.id}
                            />)
                        }

                    }
                )

            }


        </section>

    )
}

export default ForYou