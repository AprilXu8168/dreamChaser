
import React from 'react';

const Footer = () => {
    return (
    <footer bgcolor='light' className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' April Xu '}
        </div>
    </footer>
    );
};
export default Footer;