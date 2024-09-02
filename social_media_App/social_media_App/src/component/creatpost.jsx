import { useContext, useRef } from "react";
import { contextpostlist } from "../source/post-context.";

const Creatpost = () => {

  const {Add}= useContext(contextpostlist)

  const useridElement = useRef();
  const postitleElement = useRef();
  const textareaElement= useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const addpost=(event)=>{
   event.preventDefault()

   const userid = useridElement.current.value
  const postitle =postitleElement.current.value
  const textarea =textareaElement.current.value
  const reactions = reactionsElement.current.value
  const tags = tagsElement.current.value.split(" ");

  useridElement.current.value=""
  postitleElement.current.value=""
  textareaElement.current.value=""
  reactionsElement.current.value=""
  tagsElement.current.value =""



 Add(userid,postitle,textarea,reactions,tags)


  }


  return (
    <form className="creatpost" onSubmit={addpost}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          enter user id
        </label>
        <input
          ref={useridElement}
          type="text"
          className="form-control"
          id="userid"
          placeholder="your user id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          post title
        </label>
        <input
          ref={postitleElement}
          rows="4"
          type="text"
          className="form-control"
          id="tiltle"
          placeholder="tel us about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          content
        </label>
        <textarea
          ref={textareaElement}
          type="text"
          className="form-control"
          id="content"
          placeholder="how many people react"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          number of reactions
        </label>
        <input
          ref={reactionsElement}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="how many people react"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          enter your tags here
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="plz user space for multiple tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default Creatpost;
