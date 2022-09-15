import './styles/main.css';
import logoImg from '../src/assets/logo-nlw.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20 text-zinc-400'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span>   esta aqui
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {[1, 2, 3, 4, 5, 6].map((i) => {
          return (
            <a href="" className='relative rounded-lg overflow-hidden' >
              <img src="/image-1.png" alt="" />
              <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                <strong className='text-large font-bold text-white block'>
                  nome do jogo
                </strong>
                <span className='text-zinc-300 text-sm block '>
                  1 Anuncio
                </span>
              </div>
            </a>
          )
        })}
      </div>

      <div className='mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden '>
        <div className='bg-[#2A2634] py-6 px-8 flex flex-row justify-between items-center'>
          <section>
            <h1 className='text-2xl text-white font-black'>
              Não encontrou seu duo?
            </h1>
            <small className='text-zinc'>
              Publique um anúncio para encontrar novos players!
            </small>
          </section>

          <button className='bg-violet-500 py-3 px-4 rounded h-12 flex items-center gap-3 text-center text-white hover:bg-violet-600'>
            <MagnifyingGlassPlus  size={24} />   Publicar anúncio
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
