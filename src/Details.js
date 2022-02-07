import { useNavigate, useParams } from "react-router-dom";
import Heading from "./Heading";
import useFetch from "./useFetch";

const Details = () => {
  let { id } = useParams();
  const history = useNavigate();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          {/* <h2>{blog.title}</h2> */}
          <Heading text={blog.title}/>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default Details;
