import styled from "styled-components"
import Layout from "../components/Layout"
import SkillTable from "../components/SkillTable"

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Title = styled.h1`
  font-size: 1.6rem;
`

const Skills = () => (
  <Layout title="Skills | s4kr4.com">
    <Article>
      <Title>Skills</Title>
      <SkillTable />
    </Article>
  </Layout>
)

export default Skills