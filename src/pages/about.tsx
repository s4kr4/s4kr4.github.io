import styled from 'styled-components'
import Layout from '../components/Layout'

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

const AboutString = styled.p`
  max-width: 600px;
  text-align: left;
  line-height: 2rem;
`

const AboutPage: React.FC = () => (
  <Layout title="About | s4kr4.com">
    <Article>
      <Title>About</Title>
      <AboutString>{`滋賀県出身のエンジニアです。
        大学生まではバリバリの文系でしたが、サークル活動としてゲームを制作したことをきっかけにIT業界へ興味を持ち、
        エンジニアとして就職しました。サーバーサイド・フロントエンドを問わず、Webアプリケーション等の制作プロジェクトに従事しています。
      `}</AboutString>
    </Article>
  </Layout>
)

export default AboutPage
