import { specificationData, technicalDraw } from './api/data'
import type { NextPage } from 'next'
import MainTemplate from '../components/MainTemplate'
import Product from '../components/Product'

interface HomeProps {
  specifications?: any,
  technical?: any
}

const Home: NextPage<HomeProps> = ({ specifications, technical }) => {
  return (
    <MainTemplate>
      <Product dataTable={specifications} technicalList={technical} />
    </MainTemplate>
  )
}

export const getStaticProps = async () => {

  const technical = technicalDraw;
  const specifications = specificationData;

  return {
    props: {
      specifications,
      technical
    }
  }
}


export default Home
