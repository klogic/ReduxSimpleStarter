import React, {Component} from 'react'
// {Component} equal => const Component = React.Component

class SearchBar extends Component{
  
  constructor(props){
    super(props)

    this.state = { term: '' }
  }

  render() {
    return (
      <div className="col-sm-8 form-group input-group search-bar">
        <input className="form-control" 
        value = {this.state.term}
        onChange={ event => this.setState({ term: event.target.value }) }
        />
        <span className="input-group-addon"><span className="fas fa-search"/></span>
        

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