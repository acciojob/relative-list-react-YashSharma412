import React from 'react'

function Relatives() {
    const relatives = [
        "Manju", "Yash", 
        "Raghu", "Rajan",
        "Siddharth", "Rohan"
    ]
  return (
    <div>
        <h1>Relatives List</h1>
        <ol id='relativeList' key="relativeList">
            {
                relatives.map((relative, index) => {
                    return <li id={`relativeListItem${index+1}`} key={`relativeListItem${index+1}`}>{relative}</li>
                })
            }
        </ol>
    </div>
  )
}

export default Relatives