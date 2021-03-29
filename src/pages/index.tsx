import { faGithub, faQuora, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { library } from '@fortawesome/fontawesome-svg-core'

import Layout from '../components/Layout'
import Profile from '../components/Profile'

library.add(faGithub, faQuora, faTwitter, faEdit)

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Profile />
  </Layout>
)

export default IndexPage
