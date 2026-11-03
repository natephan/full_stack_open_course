const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
      {props.part_num} {props.num_exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part_num={props.parts[0]} num_exercises={props.exercises[0]}/>
      <Part part_num={props.parts[1]} num_exercises={props.exercises[1]}/>
      <Part part_num={props.parts[2]} num_exercises={props.exercises[2]}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  const parts_list = [part1, part2, part3]
  const exercises_list = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts_list} exercises={exercises_list} />
      <Total exercises={exercises_list} />
    </div>
  )
}

export default App