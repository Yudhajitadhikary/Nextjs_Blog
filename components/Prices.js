class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {

    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">Bitcoin rate for {this.props.bpi[this.state.currency].description} : 
          <span className="badge badge-primary" style={{backgroundColor:'#6E6E6E'}}>{this.props.bpi[this.state.currency].code}</span> 
          <strong>{this.props.bpi[this.state.currency].rate}</strong>
        </li>
        </ul>
        <br/>
        <label for="type">Choose a Currency Type:</label>
        <select  id="type" onChange={e => this.setState({currency: e.target.value})} className="form-control" >
          <option lable ="USD" value="USD">USD</option>
          <option lable="GBP" value="GBP">GBP</option>
          <option label="EUR" value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
