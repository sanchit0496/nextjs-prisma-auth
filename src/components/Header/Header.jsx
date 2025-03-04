import Link from 'next/link';
import React from 'react'

const Header = () => {

    const data = [
        { name: "About Us", slug: "about-us" },
        { name: "Gallery", slug: "gallery" },
        { name: "Contact Us", slug: "contact-us" },
        { name: "Privacy Policy", slug: "privacy-policy" },
        { name: "Terms and Conditions", slug: "terms-conditions" },
    ];

    // Use map() to render the data
    const UIRender = () => {
        return data.map((item, index) => (
            <div key={index}>
                <Link href={`/content/${item.slug}`}>
                    <span>{item.name}</span>
                </Link>
            </div>
        ));
    };

    
  return (
    <>
    {UIRender()}
    </>
  )
}

export default Header