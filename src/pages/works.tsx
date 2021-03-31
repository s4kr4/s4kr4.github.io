import styled from "styled-components"
import Layout from "../components/Layout"
import Work from "../components/Work"
import WorkList from "../works"

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const WorkListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 80%;
`

const Title = styled.h1`
  font-size: 2rem;
`

const Works = () => (
  <Layout title="Works | s4kr4.com">
    <Article>
      <Title>Works</Title>
      <WorkListWrapper>
        {WorkList.map(
          work => (
            <Work
              title={work.title}
              imageSrc={work.imageSrc}
              description={work.description}
              source={work.source}
              key={work.title}
            />
          )
        )}
      </WorkListWrapper>
    </Article>
  </Layout>
)

export default Works