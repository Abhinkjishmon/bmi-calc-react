import React from 'react'

const BmiScore = ({bmiNo,bmiName}) => {
  return (
    <div>
        Bmi Score: {bmiNo}
        <br />
        Bmi Type : {bmiName}
    </div>
  )
}

export default BmiScore