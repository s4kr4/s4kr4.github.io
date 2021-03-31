import styled from "styled-components"

const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  margin: 10px;
  width: 40%;
  max-width: 500px;
  min-width: 350px;
  background-color: #ddd;
`

const Title = styled.h2`
  font-size: 1.5rem;
`

const Image = styled.img`
  width: 95%;
  max-height: 260px;
`

const Description = styled.div`
  padding-top: 10px;
  width: 95%;
  text-align: left;
`

const Link = styled.a`
  text-decoration: underline;
`

const Work: React.FC<IWork> = ({ title, imageSrc, description, source }) => {
  return (
    <WorkWrapper>
      <Link href={source} target="_blank">
        <Title>{title}</Title>
      </Link>
      <Image src={imageSrc} />
      <Description>{description}</Description>
    </WorkWrapper>
  )
}

export default Work