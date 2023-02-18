import React from 'react'

const BmiList = ({range}) => {
    console.log(range);
  return (
    <div className="text-center shadow-sm rounded">
        <ul className="list-group">
            <li className="list-group-item">
                <div className="row">
                    <div className="col-4 fw-bold">Type</div>
                    <div className="col-4 fw-bold">BMI</div>
                    <div className="col-4 fw-bold">WEIGHT</div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-4 fw-bold">UnderWeight</div>
                    <div className="col-4 fw-bold">&lt; 18.5</div>
                    <div className="col-4 fw-bold">&lt; {range.underWeight.low}</div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-4 fw-bold">Normal</div>
                    <div className="col-4 fw-bold">18.5-24.9</div>
                    <div className="col-4 fw-bold">{range.normal.low + "kg -" + range.normal.high + "kg"}</div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-4 fw-bold">Over Weight</div>
                    <div className="col-4 fw-bold">25-29.9</div>
                    <div className="col-4 fw-bold">{range.overWeight.low + "kg -" + range.overWeight.high + "kg"}</div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-4 fw-bold">Obesity Class I</div>
                    <div className="col-4 fw-bold">30-34.9</div>
                    <div className="col-4 fw-bold">{range.obesityOne.low + "kg -" + range.obesityOne.high + "kg"}</div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-4 fw-bold">Obesity Class II</div>
                    <div className="col-4 fw-bold">35-39.9</div>
                    <div className="col-4 fw-bold">{range.obesityTwo.low + "kg -" + range.obesityTwo.high + "kg"}</div>
                </div>
            </li>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-4 fw-bold">Obesity Class III</div>
                    <div className="col-4 fw-bold">&gt; 40</div>
                    <div className="col-4 fw-bold">&gt; {range.obesityThree.high + "kg"}</div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default BmiList