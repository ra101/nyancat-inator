import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import '../components/index.css'


const IndexPage = () => (
  <div>
    <Helmet title="NyanCat-Inator" meta={[
      {
        name: 'description',
        content: 'This is a sample website for the Gatsby crash course',
      },
      { name: 'keywords', content: 'gatsby, react, nyancat, nyancatinator, nyancat-inator, inator' },
    ]} />
    <div style={{background: "#121212",color:"white"}}>

      <Header />

      <div style={{padding: "2rem"}}>

      <div>
        <h1>Welcome to my website</h1>
        <p>This is a sample site for the Gatsby crash course</p>
        <h1>lorem12 lorem12lorem12lorem12lorem12lorem12lorem12lorem12
        lorem12 lorem12lorem12lorem12lorem12lorem12lorem12lorem12
      <br /><br /><br /><br /><br /><br />
        lorem12 lorem12lorem12lorem12lorem12lorem12lorem12lorem12
        lorem12 lorem12lorem12lorem12lorem12lorem12lorem12lorem12
        lorem12 lorem12lorem12lorem12lorem12lorem12lorem12lorem12    </h1>

      </div>
      </div>

      <Footer />

    </div>
  </div>
)

export default IndexPage
