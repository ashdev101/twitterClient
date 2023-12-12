// 'use client '
// import EmojiPicker from 'emoji-picker-react';

// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../../Features/Store/Store';
// import { CloseEmojiSelector } from '../../../Features/EmojiSlectorSlice';

// type Props = {}

// function EmojiModal({ }: Props) {
//   const dispatch = useDispatch()
//   const isEmojiOpen = useSelector((state: RootState) => state.SelectEmoji.isEmojiOpen)
//   return (
//     <>
//       {/* 
      
//         isEmojiOpen &&
//         <div
//           className="absolute top-0" onClick={() => dispatch(CloseEmojiSelector())} >
//           {/* className={` absolute ${SelectedGif ? "top-[-30rem] left-[-105px]" :"top-[2rem] left-[-150px] sm:top-0 sm:left-auto sm:right-auto" }  ' onClick={ e=>e.stopPropagation()}`}> */}
//           <div
//             onClick={e => e.stopPropagation()}
//           >

//             <EmojiPicker

//               onEmojiClick={(emoji) => SetPosts({ ...post, content: `${post["content"]}${emoji.emoji}` })}
//             />
//           </div>
//         </div>
      
//     */}
//     </>
//   )
// }

// export default EmojiModal
import React from 'react'

type Props = {}

function EmojiModal({}: Props) {
  return (
    <div>EmojiModal</div>
  )
}

export default EmojiModal