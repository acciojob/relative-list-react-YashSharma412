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
        <ol key="relativeList">
            {
                relatives.map((relative, index) => {
                    return <li key={`relativeListItem${index+1}`}>{relative}</li>
                })
            }
        </ol>
    </div>
  )
}

export default Relatives