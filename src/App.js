import React, { Component } from 'react';
import './App.css';


// List of cities that have Chovic meetup
const cities = [
  {
    title: 'Charlottesville',
    host: 'Zona Li',
    numGroup: 1,
    objectID: 0,
  },
  {
    title: 'Washington D.C.',
    host: 'TBD',
    numGroup: 0,
    objectID:1,
  },
];



const areas = [
  {
    color: 'red',
    description: 'relationship',
    objectID: 0,
  },
  {
    color: 'orange',
    description: 'work',
    objectID: 1,
  },
  {
    color: 'yellow',
    description: 'growth',
    objectID: 2,
  },
  {
    color: 'green',
    description: 'contribution',
    objectID: 3,
  },
  {
    color: 'indigo',
    description: 'health',
    objectID: 4,
  },
  {
    color: 'blue',
    description: 'mind',
    objectID: 5,
  },
  {
    color: 'purple',
    description: 'finance',
    objectID: 6,
  },
];

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cities,
      areas,
      searchTerm: '',
    };
    
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  onDismiss(id) {
    const updatedAreas = this.state.areas.filter(area => area.objectID !== id);
    this.setState({areas: updatedAreas});
  }

  render() {
    const {searchTerm, areas, cities} = this.state;
    return (
      <div className="App">
        <Topics
          areas={areas}
          onDismiss={this.onDismiss}
        />

        <h2>Choose a city:</h2>
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        />

        <Table
          cities={cities}
          contentFilter={searchTerm}
        />

      </div>
    );
  }
}

class Topics extends Component {
  render() {
    const {areas, onDismiss} = this.props;
    return (
      <div>
        <h2>Decide the areas you want to focus on:</h2>
        {areas.map(area =>
          <div key={area.objectID}>
            <span>
              <a href=''>{area.color}</a>
            </span>
            &nbsp;
            <span>{area.description}</span>
            <span>
              <button 
                onClick={() => onDismiss(area.objectID)} 
                type="button">
                bubble
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }
}

class Search extends Component {
  render() {
    const {value, onChange} = this.props;
    return (
      <form>
        <input 
          type="text"
          value={value}
          onChange={onChange}
        />
      </form>
    );
  }
}

class Table extends Component {
  render() {
    const {cities, contentFilter} = this.props;
    return (
      <div>
        {cities.filter(isSearched(contentFilter)).map(city =>
          <div key={city.objectID}>
            <span>
              <a href=''>{city.title}</a>
            </span>
            &nbsp;
            <span>{city.host}</span>
          </div>
        )}
      </div>
    );
  }
}


export default App;
























