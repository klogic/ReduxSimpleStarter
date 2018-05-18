import React, {Component} from 'react'
// {Component} equal => const Component = React.Component

class SearchBar extends Component{
  
  constructor(props){
    super(props)

    this.state = { term: '' }
  }

  render() {
    return (
      <div>
        <input 
        value = {this.state.term}
        onChange={ event => this.setState({ term: event.target.value }) }
        />
      </div>
    )
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