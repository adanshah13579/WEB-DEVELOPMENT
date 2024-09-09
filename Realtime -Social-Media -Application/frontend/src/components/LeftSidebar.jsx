import { Heart, Home, LogOut, MessageCircle, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "@/redux/authSlice";
import CreatePost from "./CreatePost";
import { setPosts, setSelectedPost } from "@/redux/postSlice";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";


const LeftSidebar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  const { likeNotification } = useSelector(
    (store) => store.realTimeNotification
  );
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/user/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setAuthUser(null));
        dispatch(setSelectedPost(null));
        dispatch(setPosts([]));
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const sidebarHandler = (textType) => {
    if (textType === "Logout") {
      logoutHandler();
    } else if (textType === "Create") {
      setOpen(true);
    } else if (textType === "Profile") {
      navigate(`/profile/${user?._id}`);
    } else if (textType === "Home") {
      navigate("/");
    } else if (textType === "Messages") {
      navigate("/chat");
    }
  };

  const sidebarItems = [
    { icon: <Home />, text: "Home" },
    { icon: <MessageCircle />, text: "Messages" },
    { icon: <Heart />, text: "Notifications" },
    { icon: <PlusSquare />, text: "Create" },
    {
      icon: (
        <Avatar className="w-6 h-6">
          <AvatarImage src={user?.profilePicture} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ),
      text: "Profile",
    },
    { icon: <LogOut />, text: "Logout" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo"></div>
      <div>
        {sidebarItems.map((item, index) => (
          <div
            onClick={() => sidebarHandler(item.text)}
            key={index}
            className="sidebar-item"
          >
            {item.icon}
            <span>{item.text}</span>
            {item.text === "Notifications" && likeNotification.length > 0 && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button size="icon" className="notification-button">
                    {likeNotification.length}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div>
                    {likeNotification.length === 0 ? (
                      <p>No new notifications</p>
                    ) : (
                      likeNotification.map((notification) => (
                        <div
                          key={notification.userId}
                          className="flex items-center gap-2 my-2"
                        >
                          <Avatar>
                            <AvatarImage
                              src={notification.userDetails?.profilePicture}
                            />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <p className="text-sm">
                            <span className="font-bold">
                              {notification.userDetails?.username}
                            </span>
                            {/* Add additional notification details here */}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        ))}
      </div>
      <CreatePost open={open} setOpen={setOpen} />
    </div>
  );
};

export default LeftSidebar;
