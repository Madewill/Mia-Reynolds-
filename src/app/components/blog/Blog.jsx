import SectionHeader from "../events/SectionHeader";
import PostList from "./PostList";

import data from "../data/data";

// const getPosts = async () => {
//     const res = await fetch('http://localhost:4000/posts');
//     return res.json();
// };

// const Blog = async () => {
//     const posts = await getPosts();
//     console.log(posts);
//     return (
//         <section className='section' id='blog'>
//             <div className="container mx-auto">
//                 <SectionHeader pretitle='Our Blog' title='Latest News' />
//                 {/* post  list */}
//                 <PostList posts={posts} />
//             </div>
//         </section>
//     )
// }

const Blog = () => {
    const posts = data.posts;

    return (
        <section className='section' id='blog'>
            <div className="container mx-auto">
                <SectionHeader pretitle='Our Blog' title='Latest News' />
                {/* post  list */}
                <PostList posts={posts} />
            </div>
        </section>
    );
}


export default Blog;