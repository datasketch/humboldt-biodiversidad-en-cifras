
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
const HeadHome = ({ title, image, number }) => {
  const textHome = 'Colombia es uno de los pocos países megadiversos del mundo, una de cada diez especies conocidas habita nuestro territorio. \n\n Este sitio es una aproximación al conocimiento de la extensa riqueza biológica del país, ofrece una síntesis de cifras -constantemente actualizada- sobre las especies con al menos una observación publicada a través del <u style={{font}}>Sistema de Información sobre Biodiversidad de Colombia</u>.'

  return (
    <div className='bg-banner-home bg-center bg-cover h-[480px] relative'>
      <div className='max-w-screen-lg bg-black-2 bg-opacity-75 text-white absolute top-1/4 left-[8%] px-6 py-3 w-4/12 flex flex-col justify-center'>
        <div className='flex flex-col'>
          <span className='font-inter font-black text-7xl'>74.903</span>
          <span className='font-inter font-black pb-2'>Especies observadas en Colombia</span>
          <div className='w-1/3 border-t-2 border-dotted border-t-light-peagreen' />
        </div>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} className='space-y-2 font-lato text-sm pt-2 break-words'>
          {textHome}
        </ReactMarkdown>
      </div>
    </div>
  )
}

HeadHome.propTypes = {
  title: PropTypes.string/* .isRequired */,
  image: PropTypes.string/* .isRequired */,
  number: PropTypes.number/* .isRequired */
}

export default HeadHome
