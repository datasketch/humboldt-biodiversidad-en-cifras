import { calculateWidth, formatNumbers } from '../lib/functions'
import CustomTooltip from './CustomTooltip'
import Table from './Table'

const CardContentTem = ({ selected, region, dataTable, especies, parentEspecies, registros }) => {
  return (
    <div key={selected} className='flex flex-col justify-between h-full min-h-[300px] max-h-[430px] '>
      <div>
        <div className='text-6xl font-black font-inter'>
          {formatNumbers(especies)}
          <div className='border-t border-t-dartmouth-green w-1/2' />
        </div>
        <div className='font-black font-inter text-lg'>Especies {selected} observadas
          {dataTable?.length !== 0 && <CustomTooltip placement='left' title={<Table tableData={dataTable} />}>
            <img className='inline-block ' src='/images/icons/icon-table.svg' />
          </CustomTooltip>}

        </div>
        <div className='flex text-sm gap-x-2 text-blue-green'>
          <p className='inline-block font-inter'><b>{formatNumbers(registros)}</b></p>
          <p className='inline-block font-lato '>Observaciones</p>
        </div>
      </div>
      <div className=''>
        <span className='font-bold text-sm'>Especies {region} / Especies Colombia</span>
        <div className='flex'>
          <div className='bg-sandstorm  h-4 flex justify-end items-center  text-sm' style={{ width: calculateWidth(+especies, +especies + +parentEspecies) }}>{especies}</div>
          <div className='bg-orange-500 h-4 flex justify-end items-center  text-sm' style={{ width: calculateWidth(+parentEspecies, +especies + +parentEspecies) }}>{parentEspecies}</div>
        </div>
      </div>
    </div>

  )
}

export default CardContentTem
