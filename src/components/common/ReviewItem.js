import React from 'react'

const ReviewItem = ({ review }) => {
  const { first_name, last_name, painGain, simple, changeRequest, nextSteps, image } = review

  const handleThumbImage = (input) => {
    return input ? '/img/thumbsup-blue.png' : '/img/thumbsdown-blue.png'
  }

  return (
    <div className='d-flex review py-4 px-4 mb-4'>

      <div className='reviewer mr-5'>
        <h5 className='font-weigth-bold reviewer-name mb-5'>{`${first_name} ${last_name}`}</h5>
        <div className=' col-2'>
          <div className='pilot-img' style={{backgroundImage: `url(${image})`}}></div>
        </div>
      </div>

      <div className='feedback'>

        <div className='d-flex flex-column'>
          <div  className='d-flex mb-3'>

            <div className='mr-5'>
              <p className='review-content-title'>Pain/Gain</p>
              <img className='thumb' src={handleThumbImage(painGain)} alt='thumb representing feedback for pain/gain' />
            </div>

            <div>
              <p className='review-content-title'>Simple</p>
              <img className='thumb' src={handleThumbImage(simple)} alt='thumb representing feedback for simplicity'/>
            </div>

          </div>

          <div>
            <p className='review-content-title'>Changes Requested</p>
            <p>{changeRequest}</p>
            <p className='review-content-title'>Next Steps</p>
            <p>{nextSteps}</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export { ReviewItem }
