import Head from 'next/head'
import EspeciesCard from '../components/EspeciesCard'
// import especiesData from '../data/especies.json'
import PublishersCard from '../components/PublishersCard'
import publishersData from '../data/publishers.json'
import MenuExplorer from '../components/MenuExplorer'

import { SimpleSlider } from '../lib/Slider'
import { formatNumbers } from '../lib/formatNumbers'
import Slides from '../components/Slides'
import narino from '../static/data/narino.json'
import tematica from '../static/data/nav_tematica.json'
import gruposBiologicos from '../static/data/nav_grupo_biologico.json'
import territorios from '../static/data/nav_territorio.json'
import gruposInteres from '../static/data/nav_grupo_interes_conservacion.json'
import ReactMarkdown from 'react-markdown'

export default function Home () {
  const slides = narino.slides
  const gruposBiologicosNarino = narino.grupos_biologicos
  const tematicaNarino = narino.tematica
  const gruposInteresNarino = narino.grupos_interes
  const generalInfo = narino.general_info
  const territoriosNarino = narino.territorio

  return (
    <>
      <Head>
        <title>SiB Colombia | Biodiversidad en cifras - Nariño</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-banner-home bg-cover bg-center pt-44 pb-10'>
        <div className='mx-auto max-w-[950px]'>
          <div className='flex flex-col items-center justify-center lg:flex-row lg:justify-between text-white gap-y-8'>
            <div className='text-center lg:text-left'>
              <p className='font-barlow-condensed text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-[120px] font-semibold -ml-2'>
                {formatNumbers(generalInfo.registros_region_total)}
              </p>
              <p className='-mt-2'>
                Especies registradas
              </p>
              <h1 className='text-4xl 3xl:text-[52px] mt-5'>
                Nariño
              </h1>
            </div>
            <div className='w-full max-w-[283px]'>
              <img src="/images/home-map.png" alt="home map" />
            </div>
          </div>
        </div>
      </div>

      <div className='py-20 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <div className='flex flex-col items-center gap-y-8 lg:flex-row lg:justify-between lg:gap-x-12'>
            <div className='lg:w-6/12'>
              <div className='flex flex-col gap-y-20 lg:flex-row lg:justify-between lg:gap-x-12'>
                <EspeciesCard imagePath="/images/continental-especies-icon.svg" especiesQuantity={formatNumbers(generalInfo.especies_continentales)} observationsQuantity={formatNumbers(generalInfo.registros_continentales)} typeName='continentales' />
                <EspeciesCard imagePath="/images/marine-especies-icon.svg" especiesQuantity={formatNumbers(generalInfo.especies_marinas)} observationsQuantity={formatNumbers(generalInfo.registros_marinos)} typeName='marinas' />
              </div>
            </div>
            <div className='lg:w-6/12 max-w-[483px]'>
              <ReactMarkdown className='text-lg lg:text-xl'>
                {generalInfo.main_text}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white-3 pb-20'>
        <div className='mx-auto w-10/12 max-w-screen-xl relative'>
          <SimpleSlider dots>
            {slides.map((element, key) =>
              <Slides key={key} data={element} />
            )}
          </SimpleSlider>
        </div>
      </div>

      {/* Arboles de navegación Grupos Biologicos  */}
      <div className='py-12 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <MenuExplorer tree={gruposBiologicos} search={gruposBiologicosNarino}>
            <MenuExplorer.Title>
              <p className='3xl:text-lg'>
                Conoce las cifras por
              </p>
              <h2 className='font-black text-3xl 3xl:text-4xl'>
                Grupos Biológicos
              </h2>
            </MenuExplorer.Title>
            <MenuExplorer.Tree className='relative mt-[45.52px]' />
            <MenuExplorer.Breadcrumb className=" flex items-center gap-x-2 mt-[30.8px] ml-5" />
            <MenuExplorer.Body className="-mt-10">
              {(selected, info, cites, nacional, global) => (
                <div className='bg-white py-12 lg:py-16 xl:py-20'>
                  <div className='w-10/12 mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                      <div className='shadow-md p-4 grid place-items-center'>
                        <div className='space-y-2'>
                          <div className='text-center font-bold text-[26px]'>
                            <div className='text-7xl font-bold text-center'>{formatNumbers(info?.especies_region_total)}</div>
                            <p>Especies de {selected.toLowerCase()}</p>
                          </div>
                          <div className='text-center text-base space-x-2'>
                            <p className='inline-block'><b>{formatNumbers(info?.registros_region_total)}</b></p>
                            <p className='inline-block'>Observaciones en Nariño</p>
                          </div>
                          {info?.riqueza && (<div>
                            <div className='flex justify-between text-sm'>
                              <p>Riqueza actual</p>
                              <p>Riqueza estimada</p>
                            </div>
                            <div className='w-full py-4'>
                              grafica ?
                            </div>
                          </div>)}
                        </div>
                      </div>
                      <div className='shadow-md p-4'>
                        <div className='space-y-2'>
                          <h2 className='text-lg border-b border-b-[#333333] text-center py-2'>No. de observaciones de especies amenazadas</h2>
                          <div className='text-center'>
                            <p className='text-6xl'><b>{formatNumbers(info?.especies_exoticas)}</b></p>
                            <p>Registros</p>
                          </div>
                          <div className='flex flex-col justify-center items-center text-center xl:flex-row gap-y-1 gap-x-3'>
                            <div className='w-1/3 text-base'><p>Amenazada nacional</p></div>
                            <div className='w-full grid grid-cols-3'>
                              {nacional?.map((item, i) => <div key={i} className='text-center uppercase'><p>{item[0].replace('registros_amenazadas_nacional_', '')}</p></div>)}
                              {nacional?.map((item, i) => <div key={i} className='text-center'><p>{formatNumbers(item[1])}</p></div>)}
                            </div>
                          </div>
                          <div className='flex flex-col justify-center items-center text-center xl:flex-row gap-y-1 gap-x-3'>
                            <div className='w-1/3 text-base'><p>Amenazada global</p></div>
                            <div className='w-full grid grid-cols-3'>
                              {global?.map((item, i) => <div key={i} className='text-center uppercase flex flex-col gap-x-1'>
                                <p>{item[0].replace('registros_amenazadas_global_', '')}</p>
                                <p>
                                  {formatNumbers(item[1])}
                                </p>
                              </div>)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='shadow-md p-4'>
                        <div className='space-y-2'>
                          <h2 className='text-lg border-b border-b-[#333333] text-center py-2'>No. de observaciones de especies en apéndices CITES</h2>
                          <div className='text-center'>
                            <p className='text-6xl'><b>{formatNumbers(info?.registros_cites_total)}</b></p>
                            <p>Registros</p>
                          </div>
                          <div >
                            <div className='grid grid-cols-3 gap-y-2'>
                              {cites?.map((item, i) => <div key={i} className='text-center uppercase'><p>{item[0].replace('registros_cites_', '')}</p></div>)}
                              {cites?.map((item, i) => <div key={i} className='text-center'><p>{formatNumbers(item[1])}</p></div>)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='space-y-2 my-4 shadow-md p-6'>
                        <h2 className='text-lg border-b border-b-[#333333] text-center py-2'>No. de observaciones de especies migratorias</h2>
                        <div className='text-center'>
                          <p className='text-center text-6xl'><b>{formatNumbers(info?.registros_migratorias)}</b></p>
                          <p className='text-center'>Registros</p>
                        </div>
                      </div>
                      <div className='space-y-2 my-4 shadow-md p-6'>
                        <h2 className='text-lg border-b border-b-[#333333] text-center py-2'>No. de observaciones de especies endémicas</h2>
                        <div className='text-center'>
                          <p className='text-center text-6xl'><b>{formatNumbers(info?.registros_endemicas)}</b></p>
                          <p className='text-center'>Registros</p>
                        </div>
                      </div>
                      <div className='space-y-2 my-4 shadow-md p-6'>
                        <h2 className='text-lg border-b border-b-[#333333] text-center py-2'>No. de observaciones de especies exóticas</h2>
                        <div className='text-center'>
                          <p className='text-center text-6xl'><b>{formatNumbers(info?.registros_exoticas)}</b></p>
                          <p className='text-center'>Registros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>

      {/* Arboles de navegacion Grupos de interes */}
      <div className='py-12 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <MenuExplorer tree={gruposInteres} search={gruposInteresNarino}>
            <MenuExplorer.Title>
              <p className='3xl:text-lg'>
                Conoce las cifras por
              </p>
              <h2 className='font-black text-3xl 3xl:text-4xl'>
                Grupos de interés
              </h2>
            </MenuExplorer.Title>
            <MenuExplorer.Tree className='relative mt-[45.52px]' />
            <MenuExplorer.Breadcrumb className=" flex items-center gap-x-2 mt-[30.8px] ml-5" />
            <MenuExplorer.Body className="-mt-10">
              {(selected, info, cites, nacional, global) => (
                <div className='bg-white py-12 lg:py-16 xl:py-20'>
                  <div className='w-10/12 mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                      <div className='shadow-md p-4 grid place-items-center'>
                        <div className='space-y-2'>
                          <div className='text-center font-bold text-[26px]'>
                            <div className='text-7xl font-bold text-center'>{formatNumbers(info?.especies_region_total)}</div>
                            <p>Especies de {selected.toLowerCase()}</p>
                          </div>
                          <div className='text-center text-base space-x-2'>
                            <p className='inline-block'><b>{formatNumbers(info?.registros_region_total)}</b></p>
                            <p className='inline-block'>Observaciones en Nariño</p>
                          </div>
                          {info?.riqueza && (<div>
                            <div className='flex justify-between text-sm'>
                              <p>Riqueza actual</p>
                              <p>Riqueza estimada</p>
                            </div>
                            <div className='w-full py-4'>
                              grafica ?
                            </div>
                          </div>)}
                        </div>
                      </div>
                      <div className='shadow-md p-4'>
                        <div className='space-y-2'>
                          <h2 className='text-lg border-b border-b-[#333333] text-center py-2'>No. de observaciones de especies amenazadas</h2>
                          <div className='text-center'>
                            <p className='text-6xl'><b>{formatNumbers(info?.especies_exoticas)}</b></p>
                            <p>Registros</p>
                          </div>
                          <div className='flex flex-col justify-center items-center text-center xl:flex-row gap-y-1 gap-x-3'>
                            <div className='w-1/3 text-base'><p>Amenazada nacional</p></div>
                            <div className='w-full grid grid-cols-3'>
                              {nacional?.map((item, i) => <div key={i} className='text-center uppercase'><p>{item[0].replace('registros_amenazadas_nacional_', '')}</p></div>)}
                              {nacional?.map((item, i) => <div key={i} className='text-center'><p>{formatNumbers(item[1])}</p></div>)}
                            </div>
                          </div>
                          <div className='flex flex-col justify-center items-center text-center xl:flex-row gap-y-1 gap-x-3'>
                            <div className='w-1/3 text-base'><p>Amenazada global</p></div>
                            <div className='w-full grid grid-cols-3'>
                              {global?.map((item, i) => <div key={i} className='text-center uppercase flex flex-col gap-x-1'>
                                <p>{item[0].replace('registros_amenazadas_global_', '')}</p>
                                <p>
                                  {formatNumbers(item[1])}
                                </p>
                              </div>)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='shadow-md p-4'>
                        <div className='space-y-2'>
                          <h2 className='text-lg border-b border-b-[#333333] text-center py-2'>No. de observaciones de especies en apéndices CITES</h2>
                          <div className='text-center'>
                            <p className='text-6xl'><b>{formatNumbers(info?.registros_cites_total)}</b></p>
                            <p>Registros</p>
                          </div>
                          <div >
                            <div className='grid grid-cols-3 gap-y-2'>
                              {cites?.map((item, i) => <div key={i} className='text-center uppercase'><p>{item[0].replace('registros_cites_', '')}</p></div>)}
                              {cites?.map((item, i) => <div key={i} className='text-center'><p>{formatNumbers(item[1])}</p></div>)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='space-y-2 my-4 shadow-md p-6'>
                        <h2 className='text-lg border-b border-b-[#333333] text-center py-2'>No. de observaciones de especies migratorias</h2>
                        <div className='text-center'>
                          <p className='text-center text-6xl'><b>{formatNumbers(info?.registros_migratorias)}</b></p>
                          <p className='text-center'>Registros</p>
                        </div>
                      </div>
                      <div className='space-y-2 my-4 shadow-md p-6'>
                        <h2 className='text-lg border-b border-b-[#333333] text-center py-2'>No. de observaciones de especies endémicas</h2>
                        <div className='text-center'>
                          <p className='text-center text-6xl'><b>{formatNumbers(info?.registros_endemicas)}</b></p>
                          <p className='text-center'>Registros</p>
                        </div>
                      </div>
                      <div className='space-y-2 my-4 shadow-md p-6'>
                        <h2 className='text-lg border-b border-b-[#333333] text-center py-2'>No. de observaciones de especies exóticas</h2>
                        <div className='text-center'>
                          <p className='text-center text-6xl'><b>{formatNumbers(info?.registros_exoticas)}</b></p>
                          <p className='text-center'>Registros</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </MenuExplorer.Body>

          </MenuExplorer>
        </div>
      </div>

      {/* Arboles de navegacion Tematica  */}
      <div className='py-12 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <MenuExplorer tree={tematica} search={tematicaNarino}>
            <MenuExplorer.Title>
              <p className='3xl:text-lg'>
                Conoce las cifras por
              </p>
              <h2 className='font-black text-3xl 3xl:text-4xl'>
                Temáticas
              </h2>
            </MenuExplorer.Title>
            <MenuExplorer.Tree className='relative mt-[45.52px]' />
            <MenuExplorer.Breadcrumb className=" flex items-center gap-x-2 mt-[30.8px] ml-5" />
            <MenuExplorer.Body className="-mt-10">
              {(selected, info, cites, nacional, global, infoTematica) => (
                <div className='bg-white py-12 lg:py-16 xl:py-20'>
                  <div className='flex flex-col md:flex-row lg:justify-between w-10/12 mx-auto gap-10'>
                    <div className='text-center flex flex-col justify-center items-center gap-2'>
                      <span className='text-7xl font-semibold '>
                        {formatNumbers(infoTematica?.count)}
                      </span>
                      <div className='font-bold text-2xl w-4/5 mx-auto'>
                        <span>{infoTematica?.label}</span>
                      </div>

                    </div>

                    <div className='w-full'>
                      <iframe src={infoTematica?.chart} className='w-full h-[300px]'></iframe>
                    </div>
                  </div>
                </div>
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>

      {/* Arboles de navegacion Regiones */}
      <div className='py-12 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <MenuExplorer tree={territorios} search={territoriosNarino}>
            <MenuExplorer.Title>
              <p className='3xl:text-lg'>
                Conoce las cifras por
              </p>
              <h2 className='font-black text-3xl 3xl:text-4xl'>
                Regiones
              </h2>
            </MenuExplorer.Title>
            <MenuExplorer.Tree className='relative mt-[45.52px]' />
            <MenuExplorer.Breadcrumb className=" flex items-center gap-x-2 mt-[30.8px] ml-5" />
            <MenuExplorer.Body className="-mt-10">
              {(selected, info) => (
                <div className='bg-white py-12 lg:py-16 xl:py-20'>
                  {info?.charts.length === 0
                    ? <div className='text-center text-4xl py-20 w-4/5 mx-auto'>{info.title}...</div>
                    : (<SimpleSlider dots>
                      {info?.charts.map((element, key) =>
                        <Slides key={key} data={element} />
                      )}
                    </SimpleSlider>)
                  }
                </div>
              )}
            </MenuExplorer.Body>
          </MenuExplorer>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 bg-blue-green'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <h2 className='text-white font-black text-3xl 3xl:text-4xl'>
            Publicadores
          </h2>
          <div className='mt-[50px] relative'>
            <SimpleSlider buttonColor='light' slidesToScroll={4} slidesToShow={4} responsive>
              {
                publishersData.map((item, index) => {
                  return (
                    <div className='px-5' key={index}>
                      <PublishersCard {...item} />
                    </div>
                  )
                })
              }
            </SimpleSlider>
          </div>
          <div className='mt-10 text-center'>
            <a className='inline-block text-white border border-white rounded-[26px] py-3 px-[30px]' href="#">
              Conocer más
            </a>
          </div>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 bg-white-2'>
        <div className='mx-auto w-10/12 max-w-screen-xl'>
          <div className='mx-auto max-w-[507px] text-center'>
            <div className='space-y-6'>
              <h2 className='font-black text-3xl 3xl:text-4xl'>
                Explora Nariño
              </h2>
              <p className='3xl:text-lg'>
                Utiliza nuestro explorador para visualizar las tablas completas de información y explorar con múltiples cruces y gráficos la información disponible para esta región.
              </p>
              <details>
                <summary className='inline-flex items-center gap-x-2 border border-black rounded-[26px] py-[14px] px-[51px] cursor-pointer'>
                  <p>
                    Cómo funciona esta herramienta
                  </p>
                  <img src="/images/arrow-app.svg" alt="arrow app" />
                </summary>
                <div className='mt-4'>
                  <p>
                    En la barra de la izquierda puedes seleccionar diferentes valores para los datos, si los quieres ver por registros o especies o filtrarlos para cada una de las temáticas de especies amenazadas, objeto de comercio, etc. En el panel de la derecha puedes ver los resultados como tablas o gráficos dependiendo de las opciones que selecciones.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div className='mt-[55.13px]'>
          <iframe className='h-screen w-full' src="https://datasketch.shinyapps.io/sib-data-app/?region=narino"></iframe>
        </div>
      </div>

      <div className='py-12 lg:py-16 xl:py-20 bg-white'>
        <div className='mx-auto w-10/12 lg:w-9/12 max-w-screen-xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8'>
            <p className='font-bold text-lg 3xl:text-xl'>
              Con el apoyo de
            </p>
            <img className='h-[100px] mx-auto' src="/images/resguardo-integrado-logo.png" alt="resguardo integrado" />
            <img className='h-[100px] mx-auto' src="/images/reserva-natural-logo.png" alt="reserva natural" />
            <img className='h-[100px] mx-auto' src="/images/gobernacion-de-narino-logo.png" alt="gobernacion de narino" />
            <img className='h-[100px] mx-auto' src="/images/universidad-de-narino-logo.png" alt="universidad de narino" />
            <img className='h-[100px] mx-auto' src="/images/humboldt-logo.png" alt="humboldt" />
          </div>
        </div>
      </div>
    </>
  )
}
