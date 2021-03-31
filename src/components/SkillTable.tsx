import React from 'react'
import styled from 'styled-components'
import Skills from '../skills'

const Table = styled.table`
  border-collapse: collapse;
`

const Th = styled.th`
  padding: 0.7rem;
  text-align: left;
  border-top: 2px solid #aaa;
  border-bottom: 2px solid #aaa;
`

const Td = styled.td`
  text-align: left;
  border-top: 2px solid #aaa;
  border-bottom: 2px solid #aaa;
`

const Columns: React.FC = () => {
  return (
    <>{
      Skills.map(skill => 
        <tr>
          <Th>{skill.category}</Th>
          <Td>{skill.skill.join(', ')}</Td>
        </tr>
      )
    }</>
  )
}

const SkillTable: React.FC = () => {
  return (
    <Table>
      <Columns />
    </Table>
  )
}

export default SkillTable