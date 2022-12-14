import { useContext, useEffect } from 'react'
import CardPregunta from '../../components/CardPregunta'
import HeadMore from '../../components/headers/HeadMore'
import { AppContext } from '../_app'
import questions from '../../static/data/preg_frecuentes.json'
export default function preguntasFrecuentes () {
  const { setFooterBgColor, setBreadCrumb } = useContext(AppContext)

  useEffect(() => {
    setFooterBgColor('bg-footer-orange')
    setBreadCrumb([{ label: 'Más' }, { label: 'Preguntas frecuentes' }])
    return () => {

    }
  }, [])
  return (
    <>
      <HeadMore title='Preguntas frecuentes' slug='preguntas-frecuentes'/>
      <div className='mx-auto max-w-screen-2xl w-11/12 lg:w-9/12 py-12 space-y-6'>
        {questions.map((item, key) => <CardPregunta key={key} title={item.pregunta} description={item.respuesta} date={item.date} index={key + 1} />)}
      </div>
    </>
  )
}
