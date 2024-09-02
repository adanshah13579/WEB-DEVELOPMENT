import { createContext, useReducer,useEffect,useState } from "react";

export const contextpostlist = createContext({
  posts: [],
  fettch:false,
  Add: () => {},
  Add_initialpost: () => {},
  Del: () => {},
});

const reducermethod = (c, action) => {
  let v = c;
  if (action.type === "del") {
    v = c.filter((p) => p.id !== action.payload.postdel);
  } else if (action.type === "Add_initial_post") {
    v = action.payload.posts;
  } else if (action.type === "Add") {
    v = [action.payload, ...c];
  }
  return v;
};

const Contextprovider = ({ children }) => {
  const [posts, dispatchposts] = useReducer(reducermethod, []);

  
  const [fettch,setfetch]=useState(false)

 
   

  const Add_initialpost = (posts) => {
    dispatchposts({
      type: "Add_initial_post",

      payload: {
        posts,
      },
    });
  };

  const Add = (post) => {
    dispatchposts({
      type: "Add",

      payload: post,
    });
  };

  const Del = (postdel) => {
    dispatchposts({
      type: "del",
      payload: { postdel },
    });
  };


  useEffect(()=>{
    setfetch(true)
    const controller= new AbortController();
    const signal= controller.signal;
    fetch("https://dummyjson.com/posts",{signal}) 
    .then((res) => res.json())
    .then((data)=>{Add_initialpost(data.posts);
    setfetch(false)
    })
    
    return ()=>{
    controller.abort()
    }
    
    },[])

    
     
  

  return (
    <contextpostlist.Provider value={{ posts, fettch,Add,  Del }}>
      {children}
    </contextpostlist.Provider>
  );
};

export default Contextprovider;
