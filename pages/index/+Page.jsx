export { Page }

import { Fragment } from 'react'
import { Counter } from './Counter'
import Slider from '../../renderer/components/Slider/Slider'
import FeaturedProducts from '../../renderer/components/FeaturedProducts/FeaturedProducts'
import Categories from '../../renderer/components/Categories/Categories'

function Page() {
  return (
    <Fragment>
      <div>
        <Slider />
        <FeaturedProducts type="featured"/>
        <Categories />
        <FeaturedProducts type="trending"/>
      </div>
    </Fragment>
  )
}
