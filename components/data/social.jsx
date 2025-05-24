import Link from 'next/link';
import React from 'react';

const Social = () => {
    return (
        <>
            <ul>
                <li><Link href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></Link></li>
            </ul>            
        </>
    );
};

export default Social;