import { createContext, useReducer } from "react";

export const contextpostlist = createContext({
  posts: [],
  Add: () => {},
  Del: () => {},
});

const reducermethod = (c,action) => {
  let v=c;
  if(action.type==="del"){
   v= c.filter((p)=> p.id!==action.payload.postdel)
  }
  else if(action.type==="Add"){
   
    v=[action.payload,...c]

  }
  return v
};

const Contextprovider = ({ children }) => {
  const [posts, dispatchposts] = useReducer(reducermethod, defaultpostlist);

  const Add = (userid,postitle,textarea,reactions,tags) => {
    dispatchposts({

      type: "Add",

      payload:{
      id: Date.now(),
      title: postitle,
      body: textarea,
      reaction: reactions,
      userid: userid,
      tags: tags,
    },
    })
  }
    
    

  const Del = (postdel) => {
    dispatchposts({
      type: "del",
      payload: { postdel },
    });
  };

  return (
    <contextpostlist.Provider value={{ posts, Add, Del }}>
      {children}
    </contextpostlist.Provider>
  );
};

const defaultpostlist = [
  {
    id: "1",
    title: "adan",
    body: "abcd",
    reaction: 2,
    userid: "user-1",
    tags: ["aaaaaaa", "bbbbbb", "ccccc"],
  },
  {
    id: "2",
    title: "shah",
    body: "abcdnnnn",
    reaction: 7,
    userid: "user-2",
    tags: ["aaaaaaa", "bbbbbb", "ccccc"],
  },
];

export default Contextprovider;
