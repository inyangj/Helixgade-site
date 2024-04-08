import React from 'react'
import Nav from '../components/sections/Nav'
import Footer from '../components/sections/Footer';

const HelixgadeLayout = ({children}) => {
  return (
    <section className=" font-sans">
      <nav>
        <Nav />
      </nav>
      <main className='mt-[100px] '>{children}</main>
      <Footer />
    </section>
  );
}

export default HelixgadeLayout