import './App.css'
import DoctorsTable from './components/pages/DoctorsTable'
import NursesTable from './components/pages/NursesTable'
import Button from './components/UI/Button/Button'
import { useState } from 'react'



function App() {

  const [currentPage, setCurrentPage] = useState('doctors')  

  const renderPage = () => {
    switch (currentPage) {
      case 'doctors':
        return <DoctorsTable />;
      case 'nurses':
        return <NursesTable />;
      default:
        return <DoctorsTable />;
    }
  }


  return (
    <>
      <div className='max-w-[750px] mx-auto mt-20 bg-blue-200 shadow-xl p-2 rounded-md'>
        <section className='flex justify-around w-full mb-2'>
          <Button onClick={() => setCurrentPage('doctors')}>
            Врачи
          </Button>
          <Button onClick={() => setCurrentPage('nurses')}>
            Медсестры
          </Button>
        </section>
        {renderPage()}
      </div>
    </>
  )
}

export default App
