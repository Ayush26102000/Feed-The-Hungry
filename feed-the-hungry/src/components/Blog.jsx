import React from 'react';
import './Blog.css';
import Background from '../media/blog.jpg';
import Blog1 from '../media/b2.jpg';
import Blog2 from '../media/b1.jpg';
import { MdOutlineFastfood } from 'react-icons/md';

const Blog = () => {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', height: '400vh', backgroundSize: 'cover', }}>
            <div className='Home'>
                <div className='Navbar'>
                    <div className='logo'><MdOutlineFastfood /> <span> Feed the Hungry</span></div>
                    <div className='navbar-contents'>
                        <ul>
                            <li>Home</li>
                            <li>Blog</li>
                            <li>Plan Event?</li>
                            <li>Have a Problem?</li>
                            <li>About us</li>
                        </ul>
                    </div>
                </div>
                <div className='blog'>
                    <div className='blog-left'>
                        <h1>Introduction</h1>
                        <p>This chapter explores the sources of food waste and the extent to which the environment,
                            global economy and society are bearing the burden of food wasted and lost.
                            The lifecycle of the food we eat begins in the farms where it is grown and harvested or the
                            sea, rivers and lakes it is fished from. It continues through handling and storage stages and,
                            often, processing prior to distribution and consumption. Throughout the food cycle, losses
                            and wastage occurs, at farms, processing plants, distribution centres, storage houses,
                            supermarkets, restaurants and households.Avoiding food waste along its lifecycle is
                            therefore imperative for all those managing
                            food production, distribution and sales.
                            However, as set out below, a significant
                            fraction of food waste, especially at the
                            household stage, still occurs.</p>
                    </div>
                    <div className='blog-right'>
                        <img src={Blog1} alt="" srcset="" />
                    </div>
                </div>
                
                <div className='blog'>
                    <div className='blog-left'>
                        <img src={Blog2} alt="" srcset="" />
                    </div>
                    <div className='blog-right'>

                        <h1>Impacts of food waste</h1>
                        <p>In addition to the squandering of resources including
                            energy, carbon, water and nutrients needed to produce
                            food that is not consumed, poorly managed food waste
                            adversely affects our climate due to the GHGs that
                            are emitted upon its decomposition, contaminates
                            watercourses from nutrient and leachate runoff and can
                            be a vector for diseases and a health hazard.

                            This section gives an overview of the breadth and scale
                            of the impacts that food waste inflicts upon society and
                            the environment and how its collection and recycling
                            can mitigate some of these. It describes the impacts,
                            identifies the relevant international commitments in place
                            to address these impacts, and explains some of the
                            potential mitigation measures needed to achieve this,
                            with particular regards to:
                        </p>
                        
                    </div>
                </div>
                
                <div className='blog-treatment'>
                    <h2>FOOD WASTE TREATMENT TECHNOLOGIES</h2>
                    <p className='t-p'> FOOD WASTE TREATMENT TECHNOLOGIES  presents an overview of the
                        technologies available for the treatment of
                        collected food waste.
                        The first part of the chapter gives an overview
                        of the technologies available. Section 1.1
                        outlines the technologies, in alphabetical
                        order, that treat source-separated food waste.
                        Section 1.2 outlines the technologies that
                        treat food waste mixed with other wastes as
                        part of residual waste collections. For each
                        technology the following aspects are briefly
                        outlined: the wastes that are treated, the
                        process, the output products, the appropriate
                        scale for the technology, and the advantages
                        and disadvantages. Policy-makers need
                        to understand the various treatment
                        technologies in order to make informed
                        choices.
                        It will be clear that those technologies
                        treating separated food waste provide a
                        number of benefits that those treating mixed
                        wastes cannot, including maximising energy
                        recovery, fertiliser production and improved
                        soil health, resulting in economic and
                        environmental benefits.
                        Section 1.3 provides a summary table
                        which shows how the food waste treatment
                        technologies compare to one another with
                        respect to several parameters.</p>
                    <h2>1.1 Technologies that treat separately-collected food waste</h2>
                    <p className='t-p'>This section sets out a range of technologies that can treat separate food waste. It describes
                        the source of wastes used, the process and the products. <br />
                        <h3>A. Anaerobic Digestion</h3>
                        Anaerobic digestion (AD) will be discussed in detail in Chapters 5 and 6. As those chapters
                        will describe, AD provides a number of benefits over many other treatment technologies <br />
                        <h3>B. Composting </h3>
                        Composting is an aerobic process that decomposes organic material into a nutrient-rich soil conditioner. Types of
                        composting include backyard or onsite composting, vermicomposting, aerated windrow composting, aerated static
                        pile composting and in-vessel composting (IVC). Both IVC and windrow composting are described in this section
                        as appropriate methods for treating urban food waste, which will often include animal by-products requiring high
                        temperature treatment. IVC is practised throughout Europe whilst we find windrow composting widely implemented in
                        the USA and developing countries.</p>
                    <h2>1.2  Technologies that treat non-separated food waste (i.e. organic
                        waste mixed in with inorganic waste)</h2>
                    <p className='t-p'> <h3>A. Gasification</h3>
                        Gasification is a process that converts organic materials (e.g. biomass, food wastes) or
                        combinations of organics and inorganics into a combustible gas called syngas, by reacting
                        the material at high temperatures (700°C) with a controlled amount of oxygen and/or steam.
                        It is therefore a technology that involves thermochemical conversion, like incineration or
                        pyrolysis. The syngas is usually comprised of carbon monoxide (CO), hydrogen (H2
                        ) and CO2
                        .
                        Gasification as a technology has been slow to develop, with few waste gasifiers operating
                        globally, especially at the scales required to deal with MSW.
                        <h3>B. Incineration</h3>
                        Incineration is the controlled combustion at
                        extremely high temperatures of mixed solid waste
                        to reduce the volume of the waste. The process
                        is highly exothermic (it releases heat) and the
                        objective is the safe disposal of the waste.
                        Source of waste
                        Mixed solid waste, including food waste, from
                        municipal, commercial and industrial sources,
                        ideally non-recyclable.
                        <h3>C. Landfills</h3>
                        A sanitary landfill is a site for the disposal of solid waste materials. Sanitary landfills are designed
                        to protect the environment from contaminants, which may be present in the waste stream32.
                        Historically, waste material has been thrown into pits and left in piles in landfill sites, but more
                        recent practice dictates the waste is buried. Over the course of history, landfills have been the most
                        common method of organised waste disposal and remain so in many places around the world.
                    </p>
                    

                </div>
            </div>
        </div>
    )
}

export default Blog