import React from "react"
import skills from "../../constants/skills"
import styled from "styled-components"
import styles from "../../css/about.module.css"

const SkillListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`

const SkillListItem = styled.li`
  list-style: none;
  background: var(--primaryColor);
  color: var(--mainWhite);
  padding: 2px;
  text-align: center;
  text-transform: uppercase;
`

const Skills = props => {
  return (
    <>
      <h2 className={styles.titleSkills}>Skills</h2>
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
