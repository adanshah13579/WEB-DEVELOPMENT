import { useContext, useRef } from "react";
import { contextpostlist } from "../source/post-context";
import { useNavigate } from "react-router-dom";

const Creatpost = () => {
  const { Add } = useContext(contextpostlist);
  const nav = useNavigate();

  const useridElement = useRef();
  const postitleElement = useRef();
  const textareaElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const addpost = (event) => {
    event.preventDefault();

    const userid = useridElement.current.value;
    const postitle = postitleElement.current.value;
    const textarea = textareaElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    // Basic form validation
    if (!userid || !postitle || !textarea || !reactions || !tags.length) {
      alert("Please fill in all fields.");
      return;
    }

    // Clear form fields
    useridElement.current.value = "";
    postitleElement.current.value = "";
    textareaElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    // Post data to API
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postitle,
        body: textarea,
        reactions: reactions,
        userId: userid,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        Add(post);
        nav("/");
      });
  };

  return (
    <form className="creatpost" onSubmit={addpost} style={styles.formContainer}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label" style={styles.label}>
          Enter User ID
        </label>
        <input
          ref={useridElement}
          type="text"
          className="form-control"
          id="userid"
          placeholder="Your User ID"
          style={styles.input}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label" style={styles.label}>
          Post Title
        </label>
        <input
          ref={postitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="Tell us about it"
          style={styles.input}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label" style={styles.label}>
          Content
        </label>
        <textarea
          ref={textareaElement}
          className="form-control"
          id="content"
          placeholder="Describe your post"
          style={styles.textarea}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label" style={styles.label}>
          Number of Reactions
        </label>
        <input
          ref={reactionsElement}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted?"
          style={styles.input}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label" style={styles.label}>
          Enter Your Tags Here
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please use space for multiple tags"
          style={styles.input}
        />
      </div>

      <button type="submit" className="btn btn-primary" style={styles.button}>
        Post
      </button>
    </form>
  );
};

const styles = {
  formContainer: {
    background: "linear-gradient(to bottom right, #007bff, #ffffff)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  label: {
    fontWeight: "bold",
    color: "#004085",
  },
  input: {
    borderRadius: "5px",
    borderColor: "#007bff",
    padding: "10px",
  },
  textarea: {
    borderRadius: "5px",
    borderColor: "#007bff",
    padding: "10px",
    height: "100px",
  },
  button: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    padding: "10px 20px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
};

export default Creatpost;
