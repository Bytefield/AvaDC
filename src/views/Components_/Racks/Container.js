import React, { Component } from 'react';
import { Row } from 'reactstrap';
import axios from 'axios'
import Unit from './Unit'

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      racks: [],
      collapse: true,
      fadeIn: true,
      timeout: 300
    }

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
  }

  componentDidMount() {
    axios.get('https://netboxqa.xcade.net/api/dcim/racks/', {
      headers: {
        'Authorization': 'Token 467c528e78698047e8af1557597712c7e5073ad6'
      }
    })
    .then(response => {
      this.setState({
        racks: response.data.results
      })
      console.log(response.data.results)
    })
    .catch(err => console.log(err))
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          { this.state.racks.map((rack) => <Unit rack={rack} /> ) }
        </Row>
      </div>
    )
  }
}

export default Container;
