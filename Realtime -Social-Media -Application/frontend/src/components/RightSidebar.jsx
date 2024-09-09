import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SuggestedUsers from './SuggestedUsers';

const RightSidebar = () => {
  const { user } = useSelector(store => store.auth);
  
  return (
    <div className='right-sidebar'>
      <div className='user-profile'>
        <Link to={`/profile/${user?._id}`}>
          <Avatar className='avatar'>
            <AvatarImage src={user?.profilePicture} alt="profile_image" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <div>
          <h1 className='font-semibold text-base'>
            <Link to={`/profile/${user?._id}`}>{user?.username}</Link>
          </h1>
          <span className='text-gray-600 text-sm'>
            {user?.bio || 'Bio here...'}
          </span>
        </div>
      </div>
      <div className='suggested-users'>
        <SuggestedUsers />
      </div>
    </div>
  );
};

export default RightSidebar;
