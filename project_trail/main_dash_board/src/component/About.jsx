import React from "react";
import aboutImg from "../LoginAssests/about1.jpg";
import memberImg from "../LoginAssests/download.png";
const About=()=>{
    return(
<>
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
            <div className="md:w-11/12 mx-auto flex felx-col md:flex-row justify-between items-center gap-12">
                <div>
                    <img className="aboutimg" src={aboutImg} alt="" />
                </div>
                <div className="md:w-3/5 mx-auto">
                    <h2 className="text-4xl text-neutralDGrey mb-8">The seen of spending time at Chikitshak</h2>
                    <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
                        This is a health caring website that is made up by four psitians. This website is the result of hardwork of these student, they made this website for helping the people. In this website they will do the body checkup through maching learning and if found positive then our machine learning model will give the suggestation about nearby doctor.

                    </p>
                    <button className="btn-primary">Learn More</button>

                </div>
            </div>
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/2">
                    <h2 className="text-4xl text-neutralDGrey mb-4 md:w">Helping the local <br /> <span className="text-brandPrimary">Health related querray</span></h2>
                    <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
                    We are here to listin your health related problem
                    </p>

                    </div>
                    <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <img className="aboutimgs" src={memberImg} alt="" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">000000</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img className="aboutimgs" src={memberImg} alt="" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">000000</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <img className="aboutimgs" src={memberImg} alt="" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">000000</h4>
                                    <p>Event Booking</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img className="aboutimgs" src={memberImg} alt="" />
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">000000</h4>
                                    <p>Payment</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
</>
    );
}
export default About;