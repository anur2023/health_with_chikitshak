import React from "react";
const Blogs = ()=>{
    const blogs = [
        {id:1,title: 'Check your health in a click',image:"/src/LoginAssests/about.jpg"},
        {id:2,title: 'Check your health in a click',image:"/src/LoginAssests/about.jpg"},
        {id:3,title: 'Check your health in a click',image:"/src/LoginAssests/about.jpg"},
    ]
    return(
        <>
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 ">
            <div className="text-center md:w-1/2 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">Health is Everythings.</h2>
                    <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto md:w-3/4 text-sm text-neutralGrey mb-8">
                        This is a health caring website that is made up by four psitians. This website is the result of hardwork of these student, they made this website for helping the people. In this website they will do the body checkup through maching learning and if found positive then our machine learning model will give the suggestation about nearby doctor.

                    </p>

            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
                {
                    blogs.map(blog => <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
                        <img className="blogsize hover:scale-95 transition-all duration-300" src={blog.image} alt="" />
                        <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                            <h3 className="mb-3 text-neutralGrey font-semibold">{blog.title}</h3>
                        </div>
                    </div>)
                }
            </div>
        </div>
        </>
    );
}
export default Blogs;