import React from 'react'

const Skills = ({obj}) => {
  return (
    <div>
      This is the {obj.name} fron deeply nested skills
      <h3>{obj.age}</h3>
      <h3>{obj.details.city}</h3>
    </div>
  )
}

export default Skills;