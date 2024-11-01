import React from 'react'
import CreatePost from './CreatePost.jsx'
import Tweet from './Tweet.jsx'
import {useSelector} from "react-redux";

const Queries = () => {
  const {tweets} = useSelector(store=>store.tweet);
  return (
    <div className='w-[50%] border border-gray-200'>
      <div>
        <CreatePost/>
        {
          tweets?.map((tweet)=> <Tweet key={tweet?._id} tweet={tweet}/>)
        }
         
      </div>
    </div>
  )
}

export default Queries
