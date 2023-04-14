import React from 'react'
import { useSelector } from 'react-redux'

const BannerComp = () => {
  const { bannerImg } = useSelector(state => state.counter)
  return (
    <>

      <span className="w-96">
        {bannerImg ? (
          <img
            src={bannerImg}
            alt=""
            srcset=""
            className="mt-2 w-96 h-12 object-cover"
          />
        ) : (
          ""
        )}
      </span>
    </>
  )
}

export default BannerComp
