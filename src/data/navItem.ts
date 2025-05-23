const navList = [
  {
    _id: 1,
    name: 'Profile',
    icon: 'bi bi-person'
  },
  {
    _id: 2,
    name: 'Contact',
    icon: 'bi bi-envelope'
  },
  {
    _id: 3,
    name: 'Register',
    icon: 'bi bi-card-list'
  },
  {
    _id: 4,
    name: 'Login',
    icon: 'bi bi-box-arrow-in-right'
  },
  {
    _id: 5,
    name: 'Setting',
    icon: 'bi bi-gear'
  },
  {
    _id: 6,
    name: 'F.A.Q',
    icon: 'bi bi-question-circle'
  },
  {
    _id: 7,
    name: 'Blank',
    icon: 'bi bi-file-earmark'
  }
]

export interface INavItem {
  _id: number
  name: string
  icon: string
}

export default navList
