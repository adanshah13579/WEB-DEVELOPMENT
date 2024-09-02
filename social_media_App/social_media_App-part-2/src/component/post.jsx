import { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { contextpostlist } from "../source/post-context";

const Post = ({ p }) => {
  const { Del } = useContext(contextpostlist);

  return (
    <div className="card postcard" style={{ minWidth: "30rem", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
      <div 
        className="card-body" 
        style={{ 
          background: "linear-gradient(135deg, #e0f7fa, #80deea)", // Blue to white gradient
          borderRadius: "10px", // Rounded corners
          padding: "1.5rem"
        }}
      >
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title" style={{ marginBottom: "1rem" }}>
            {p.title}
          </h5>
          <span
            className="badge rounded-pill bg-danger"
            style={{
              cursor: "pointer",
              fontSize: "1.2rem"
            }}
            onClick={() => Del(p.id)}
          >
            <MdOutlineDelete />
          </span>
        </div>
        <p className="card-text" style={{ marginBottom: "1rem" }}>
          {p.body}
        </p>
        <div className="mb-2">
          {p.tags.map((item) => (
            <span key={item} className="badge text-bg-primary me-2" style={{ fontSize: "0.9rem" }}>
              {item}
            </span>
          ))}
        </div>
        <div className="alert alert-secondary" role="alert" style={{ marginBottom: "0" }}>
          This post is reacted by {p.reaction} people
        </div>
      </div>
    </div>
  );
};

export default Post;
