interface CardFilterProps {
  filterChange: (filter: string) => void
}

function CardFilter({ filterChange }: CardFilterProps) {
  return (
    <div className='filter'>
      <a href='#' className='icon' data-bs-toggle='dropdown'>
        <i className='bi bi-three-dots'></i>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow'>
        <li className='dropdown-header text-start'>
          <h6>Filter</h6>
        </li>

        <li>
          <a className='dropdown-item' onClick={() => filterChange('Today')}>
            Today
          </a>
        </li>

        <li>
          <a
            className='dropdown-item'
            onClick={() => filterChange('This month')}
          >
            This month
          </a>
        </li>

        <li>
          <a
            className='dropdown-item'
            onClick={() => filterChange('This year')}
          >
            This year
          </a>
        </li>
      </ul>
    </div>
  )
}

export default CardFilter
