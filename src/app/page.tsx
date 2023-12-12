'use client'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
// import React, { useEffect, useState } from 'react';

// const ScrollHideShow = () => {
//   const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
//   const [visible, setVisible] = useState(true);
//   console.log(prevScrollPos)
//   console.log(visible)
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;

//       setVisible(prevScrollPos > currentScrollPos);
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [prevScrollPos]);

//   return (
//     <div className=' h-[200vh]'>
//       {visible && (
//         <div>
//           {/* Your content here */}
//           <p>This portion will hide/show based on scroll direction.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ScrollHideShow;

import React, { useEffect, useState } from 'react'
import { getUser } from '../../ReactQueryQueries/getCurrentUser'


type Props = {}

function Page({ }: Props) {
  const router = useRouter()
  const { user } = getUser()
  console.log("rendered")
  if (user?.id) {
    router.push("/home")
  } else {
    router.push("/signin")
  }
}

export default Page