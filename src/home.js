import { useState } from "react";
import Blog from "./Bloglist";



const Home = () => {

    const [blogs, setBlogs] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'mani', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'mario', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'gena', id: 3 }
    ]);

   
  
    return (
      <div className="home">
        
        <Blog blogs={blogs} title="all blogs"/>
        
      </div>
    );
  }
   
  export default Home;