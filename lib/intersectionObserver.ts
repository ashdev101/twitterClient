import { useState, useEffect, RefObject ,} from "react"

export function useIsVisible(ref: RefObject<HTMLVideoElement>) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        );
        console.log(ref.current)
        observer.observe(ref.current as Element)
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}