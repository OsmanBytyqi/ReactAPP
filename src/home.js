import { useEffect, useState } from "react";
import BlogList from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isloading,setiloading]=useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setiloading(false);
      })
  }, [])

  return (
    <div className="home">
      {isloading && <div>is loading ...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;