import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'

const Selectable = ({ data, optionSelected, placeHolder, titles }) => {
  const [open, setOpen] = useState(false)
  const refSelectable = useRef(null)
  const searchTitle = (el, search) => {
    const title = search?.filter(value => value.siglas === el)[0]
    return title?.nombre
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [refSelectable])

  const handleClickOutside = ({ target }) => {
    if (refSelectable.current && !refSelectable.current.contains(target)) {
      setOpen(false)
    }
  }

  return (
    <div className='relative' ref={refSelectable}>
      <button type='button' onClick={() => setOpen(prevState => !prevState)} className='border border-black flex items-center justify-between px-4 py-2 h-full w-full'>
        <span>{placeHolder}</span>
        <img className={classNames(open ? '-rotate-90' : 'rotate-90', ' w-6 h-3')} src='/images/arrow-black.svg' />
      </button>
      <form onChange={optionSelected} className={classNames('flex flex-col max-h-48 w-full overflow-y-scroll top-full py-2 px-2 bg-white-smoke', open ? 'absolute ' : 'hidden')} >
        {data?.sort().map(el => {
          if (el === undefined) { return null }
          return (<label title={searchTitle(el, titles)} key={el} htmlFor={el} className='flex  justify-between cursor-pointer'>
            <span>{el}</span>
            <input
              type="radio"
              name="country"
              className="accent-flame cursor-pointer"
              id={el}
              value={el}
            />
          </label>)
        }
        )}
      </form>
    </div>
  )
}

export default Selectable
