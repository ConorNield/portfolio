
import React from 'react'
import { MdVisibility } from 'react-icons/md';


const blogConfig = [
    {
        id: "blog-3",
        title: "Batting Order Optimization in Baseball",
        color: "mintcream",
        links: [
            {
                name: "read more",
                url: "/blogs/batting-order-optimization",
                icon: <MdVisibility/>
            }
        ],
        image: "https://fivethirtyeight.com/wp-content/uploads/2014/04/79485557.jpg?w=575",  
        description: "An analysis of how batting order influences the number of runs scored in R",
        target: "_self",
    },

    {
        id: "blog-2",
        title: "Predicting Soybean Prices uses a GARCH Process",
        color: "mintcream",
        links: [
            {
                name: "read more",
                url: "/blogs/soybean-garch",
                icon: <MdVisibility/>
            }
        ],
        image: "https://www.aces.edu/wp-content/uploads/2022/05/Figure-illustrative.jpg", 
        description: "A time series analysis on soybean prices",
        target: "_self"
    },

    {
        id: "blog-1",
        title: "Predicting Corn Yields in Illinois from Weather Variables",
        color: "mintcream",
        links: [
            {
                name: "read more",
                url: "/blogs/corn-yield",
                icon: <MdVisibility/>
            }
        ],
        image: "https://inhabitat.com/wp-content/blogs.dir/1/files/2015/04/corn-field-889x591.jpg", 
        description: "A time series analysis of Illinois corn yields based off of weather conditions",
        target: "_self"
    },


    {
        id: "blog-0",
        title: "Quantifying Luck in the NBA Draft Lottery",
        color: "mintcream",
        links: [
            {
                name: "read more",
                url: "/blogs/NBA",
                icon: <MdVisibility/>
            }
        ],
        image: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg/f_auto/primary/fgbulqf2hxe1sxnsasns", 
        description: "Mapping out every NBA draft lottery result and associated luck in Python",
        target: "_self"
    },
]

export default blogConfig