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
        onChange={ event => this.changeSearch(event.target.value) }
        />
        <span className="input-group-addon"><span className="fas fa-search"/></span>

      </div>
    )
  }

  changeSearch(term){
    this.setState({ term });
    this.props.onSearchVideoChange(term);
  }

}

export default SearchBar;