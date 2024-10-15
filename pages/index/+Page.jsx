export { Page }

import { Fragment } from 'react'
import { Counter } from './Counter'
import Slider from '../../renderer/components/Slider/Slider'
import FeaturedProducts from '../../renderer/components/FeaturedProducts/FeaturedProducts'
import Categories from '../../renderer/components/Categories/Categories'

function Page() {
  return (
    <Fragment>
      <div className='relative w-[1440px] h-[4370] bg-[#FFFFFF]'>
        <Slider />
        <FeaturedProducts type="featured"/>
        <Categories />
        <FeaturedProducts type="trending"/>
      </div>
    </Fragment>
  )
}
