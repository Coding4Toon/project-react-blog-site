import Header from "../components/Header";
import { my_blogs } from "../blogs";
import { useNavigate } from "react-router-dom";

//The function returns JSX. For any functional or class based components, the first character of the name will have to be capitalised. This is for React to determine which components are custom components. In line 9, there is a component called "Header" and you may recognise this as it was the same component you created earlier in src/components/Header.js. The first character of Header is capitalised as well.  

//Next, the BlogsListPage page is to display the blogs we have written in the blogs.js file. The code written in “blogs.js” is a JavaScript Object which is not iterable. We are not able to loop through it to display the blogs we have written. However, we can use a function called Object.keys() to get all the keys that belong to an object and iterate through that. 

const BlogsListPage = () => {
    let navigate = useNavigate()
    return (
        <div>
            <Header />
            <div className="container">
                <div className="inner-container">
                    <h1 className="page-title">My Blogs</h1>
                    <div className="blog-list">

                        {/* Using Object.keys() it will return an array as [“name”,”value”,”colour”] based on JS object */}
                        {/* Using the map() function, we will be able to iterate through the array and display the blog. */}
                        {/* When we want to display a JavaScript variable in React, we can simply place the variable within the “{}” curly brackets as shown in the code sample above.  */}
                        {Object.keys(my_blogs).map((blog, index) => (
                            <div className="blog-preview" key={index} onClick={() => {
                                navigate(`/blog`, { state: { blog_id: blog } })
                            }} >
                                <div className="blog-preview-left">
                                    <h2 className="blog-title">{my_blogs[blog].title}</h2>
                                    <p className="blog-author">{my_blogs[blog].author}</p>
                                </div>
                                <p className="blog-date">{my_blogs[blog].date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogsListPage;