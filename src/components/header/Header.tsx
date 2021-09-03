import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <Link to='/'>
        <span>HOME</span>
      </Link>
      <Link to='/todo'>
        <span>TODO</span>
      </Link>
      <Link to='/placeholder'>
        <span>PLACEHOLDER</span>
      </Link>
    </>
  )
}
