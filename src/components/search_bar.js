import React, {Component} from 'react'
// {Component} equal => const Component = React.Component

class SearchBar extends Component{
  render() {
    return <input onChange={ event => console.log(event.target.value) } /> 
  }

  /* 
  from above is es6 arrow, make function shorter.
    (event) => console.log(event.target.value) 
  equal =>
    onInputChange(event) {
      console.log(event.target.value)
    } 
  */
}

export default SearchBar;