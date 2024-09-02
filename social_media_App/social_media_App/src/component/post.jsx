import { useContext } from "react";

import { MdOutlineDelete } from "react-icons/md";
import { contextpostlist } from "../source/post-context.";

const Posst = ({ p }) => {
  const {Del} = useContext(contextpostlist);
  return (
    <div className="card postcard" style={{ minwidth: "30 rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {p.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => Del(p.id)}
          >
            <MdOutlineDelete />
          </span>
        </h5>
        <p className="card-text">{p.body}</p>
        {p.tags.map((item) => (
          <span key={item} className="badge text-bg-primary hashtag">
            {item}
          </span>
        ))}
        <div className="alert alert-secondary reaction" role="alert">
          this post reacted by {p.reaction} people
        </div>
      </div>
    </div>
  );
};
export default Posst;
