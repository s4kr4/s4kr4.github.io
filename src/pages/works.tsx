import styled from "styled-components"
import Layout from "../components/Layout"

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Title = styled.h1`
  font-size: 2rem;
`

const Works = () => (
  <Layout title="Works | s4kr4.com">
    <Article>
      <Title>Works</Title>
    </Article>
  </Layout>
)

export default Works