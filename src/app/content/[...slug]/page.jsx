import React from 'react'

const TheSlug = ({params}) => {

    const data = [
        {
            header: "About Us",
            slug: "about-us",
            content: "Information about the website, our mission, vision, and values.",
        },
        {
            header: "Gallery",
            slug: "gallery",
            content: "Explore our gallery with images and videos of our work and events.",
        },
        {
            header: "Contact Us",
            slug: "contact-us",
            content: "Reach out to us via email or phone. We'd love to hear from you!",
        },
        {
            header: "Privacy Policy",
            slug: "privacy-policy",
            content: "Learn about how we handle your data and ensure your privacy.",
        },
        {
            header: "Terms and Conditions",
            slug: "terms-conditions",
            content: "Review the terms and conditions of using our website and services.",
        },
    ];

    const {slug} = params 

    let pageData = []
    data.forEach((item) => {
        if(item.slug === slug[0]){
            pageData.push(item)
        }
    })

  return (
    <div>
        {
            pageData.length === 0 ? 'Not Found' : 
            <div>
                {pageData[0].header}
                {pageData[0].content}
            </div>
        }
    </div>
  )
}

export default TheSlug