interface PropsType {
  todo: {
    task: string
  }
}

export const Todo: React.FC<PropsType> = ({ todo }) => {
  return (
    <>
      <div>
        <input type='checkbox'></input>
        {todo.task}
        <button>-</button>
      </div>
    </>
  )
}
