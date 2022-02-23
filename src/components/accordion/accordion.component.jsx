import React from "react"

export const Accordion = ({ items }) => {
  const handleTitleClick = (index) => {
    console.log("clicked", index)
  }

  return (
    <div className="ui styled accordion">
      {items.map((item, index) => (
        <React.Fragment key={item.title}>
          <div className="title active" onClick={() => handleTitleClick(index)}>
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className="content active">
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
