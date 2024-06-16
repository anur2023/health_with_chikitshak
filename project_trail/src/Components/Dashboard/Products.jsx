import React from "react";

const Products =()=>{
    return(
        <>
        <div className="md:px-14 py-16 max-w-screen-2xl mx-auto">
         <div className="text-center my-8">
    <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Website Creater </h2>
    <p className="text-neutralGrey" style={{fontSize: "20px"}}>
    The creators of this website, five dedicated Psitians, combined their expertise to craft a platform that embodies their passion, knowledge, and commitment to excellence.
</p>

    <div className="my-12 flex flex-wrap justify-between items-center gap-8">
    <figure>
    <img className="imgSizes" src="/src/LoginAssets/anuruddh.jpg" alt="" />
    <figcaption><a href="https://www.linkedin.com/in/anuruddh-kumar-67843b171/" target="blank"><p>Anuruddh Bajpai </p></a></figcaption>
</figure>
<figure>
    <img className="imgSizes" src="/src/LoginAssets/" alt="" />
    <figcaption><a href="https://www.linkedin.com">Aman Singh </a></figcaption>
</figure>
<figure>
    <img className="imgSizes" src="/src/LoginAssets/" alt="" />
    <figcaption><a href="https://www.linkedin.com">Saksham Saxena</a></figcaption>
</figure>
<figure>
    <img className="imgSizes" src="/src/LoginAssets/" alt="" />
    <figcaption><a href="https://www.linkedin.com">Satashee Sharma</a></figcaption>
</figure>
<figure>
    <img className="imgSizes" src="/src/LoginAssets/" alt="" />
    <figcaption><a href="https://www.linkedin.com">Rohit Gupta</a></figcaption>
</figure>

    </div>
</div>
</div>


        </>
    );
}
export default Products;