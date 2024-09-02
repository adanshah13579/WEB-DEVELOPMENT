import { useContext, } from "react";
import Posst from "./post";
import { contextpostlist } from "../source/post-context";
import Wel from "./welcome";
import Load from "./loader";

const Postlist = () => {
  const { posts, fettch } = useContext(contextpostlist);

  return (
    <>
      {fettch && <Load></Load>}
      {!fettch && posts.length === 0 && <Wel></Wel>}
      {!fettch && posts.map((item) => <Posst key={item.id} p={item}></Posst>)}
    </>
  );
};

export default Postlist;
