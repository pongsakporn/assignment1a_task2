import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light"> Hello world! </h1>
          <p className="lead text-muted">
            Welcom to wep
          </p>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row">
        <Link to="/members/" className="btn btn-primary my-2">
          สมาชิก
        </Link>
        <Link to="/class/" className="btn btn-secondary my-2">
          วิชาเรียน
        </Link>
        <Link to="/about/" className="btn btn-secondary my-2">
          ผู้จัดทำ
        </Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage