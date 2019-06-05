import React from "react"
import skills from "../../constants/skills"
import styled from "styled-components"

const SkillListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`

const SkillListItem = styled.li`
  list-style: none;
  background: var(--primaryColor);
  color: var(--mainWhite);
  margin: 2rem;
  padding: 2px;
  text-align: center;
`

const Skills = props => {
  return (
    <>
      <h2>Skills</h2>
      <SkillListContainer>
        {Object.values(skills)
          .reduce((accum, skillType) => accum.concat(skillType), [])
          .map(skill => (
            <SkillListItem key={skill}>{skill}</SkillListItem>
          ))}
      </SkillListContainer>
    </>
  )
}

export default Skills
// export default styled(Skills)`
//   color: purple;
// `
