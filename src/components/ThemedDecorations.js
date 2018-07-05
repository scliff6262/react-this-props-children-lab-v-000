import React from 'react'

class ThemedDecorations extends React.Component {
  render(){
    function assignedTheme(props){
      let newElements = []
      React.Children.forEach(props.children, function(child){
        const newProps = Object.assign({}, child.props)
        newProps["className"] = props.theme
        newElements.push(React.cloneElement(child, newProps))
    })
    return newElements
  }
    return(
      <div className={this.props.theme}>
        {assignedTheme(this.props)}
      </div>
    )
  }
}

export default ThemedDecorations
