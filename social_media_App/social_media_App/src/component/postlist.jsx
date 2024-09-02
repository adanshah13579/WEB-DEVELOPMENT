
import { useContext } from "react";
import Posst from "./post";
import { contextpostlist } from "../source/post-context.";

const Postlist = () => {

 const {posts}= useContext(contextpostlist)
  return (
    <>
     {posts.map((item)=>(<Posst key={item.id} p={item}></Posst>))}
     
    </>
  );
};

export default Postlist;
