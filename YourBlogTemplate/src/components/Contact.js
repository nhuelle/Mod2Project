import React from 'react'
import Rainbow from '../hoc/Rainbow'

const Contact = (props) => {
  return (
    <div>
      <div className="container">
        <h4 className="center">Contact</h4>
        <p>This is your contact page. You can put any contact information for yourself and/or your business that you would like viewers to have here! As you can tell, you can also change font color and attributes for this as well as any other pages. Currently this template is using the Rainbow component, which causes the text to change color each time the page reloads. Try it!</p>
      </div>
    </div>
  )
}

export default Rainbow(Contact)