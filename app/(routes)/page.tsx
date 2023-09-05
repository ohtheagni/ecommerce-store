import React from 'react'


import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/ui/billboard';
import Container from '@/components/ui/container'
import ProductList from '@/components/product-list';


export const revalidate = 0;

const HomePage = async () => {

  const products = await getProducts({ isFeatured: true });
  // data taken from copying billboard id
  const billboard = await getBillboard('77cfce9c-0d9c-4657-82e4-d432200e87b3');



  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard}/>
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title="Featured Products" items={products}/>
        </div>
      </div>
    </Container>
  )
}

export default HomePage
