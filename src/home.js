import { useState,useEffect } from "react";
import BlogList from "./Bloglist";



const Home = () => {

    const [blogs, setBlogs] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'mani', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'mario', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'gena', id: 3 }
    ]);

    const handledelete=(id)=>{
      const newBlogs=blogs.filter(blog=>blog.id!==id);
      setBlogs(newBlogs);

    };

    const[name ,setName]=useState('genti');

   useEffect(()=>{
     console.log("use efect ran");
   },[name])
  
    return (
      <div className="home">

        <BlogList blogs={blogs} title="My all blogs" handledelete={handledelete}></BlogList>
        <p>{name}</p>
        <button onClick={()=>{setName("mani")}}> chnage name</button>
     
      </div>
    );
  }
   
  export default Home;