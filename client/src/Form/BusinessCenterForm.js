import React, { Component } from 'react';

class BusinessCenterForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : null,
            area : null,
            range : null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event, field) {
        this.setState({ [field] : event.target.value});
    }


    handleSubmit(event){
        event.preventDefault();

        var queryString = Object.keys(this.state).map(key => key + '=' + this.state[key]).join('&');

        fetch('http://declic.local/businessCenter.php',{
            method : "post",
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            //headers: {'Content-Type': 'application/json'},
            //body : JSON.stringify(this.state)
            body: queryString
        }).then((response) => response.json())
            .then(function(json){
               console.log(json);
                //console.log(json.data.area);
               // console.log(json.data.range);
            })


    }

  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                  <div className="col-md-12">
                  <h1>Gestion des centres d'affaires</h1>
                  </div>
              </div>
              <div className="form-group">
                  <div className="col-md-12">
                      <label>Nom :</label>
                      <input onChange={(e) => this.handleChange(e,'name') }  value={this.state.name} className="form-control" type="text" />

                  </div>

              </div>
              <div className="form-group">
                  <div className="col-md-12">
                      <label>Superficie :</label>
                      <input onChange={(e) => this.handleChange(e,'area') } value={this.state.area} className="form-control" type="text" />
                  </div>
              </div>
              <div className="form-group">
                  <div className="col-md-12">
                      <label>Gamme :</label>
                      <select onChange={(e) => this.handleChange(e,'range') } value={this.state.range} className="form-control">
                          <option>Normal</option>
                          <option>Prestige</option>
                      </select>
                  </div>
              </div>
              <div className="form-group">
                  <div className="col-md-12">
                      <button className="btn btn-primary">Enregistrer</button>
                  </div>
              </div>

          </form>
        </div>
    );
  }
}

export default BusinessCenterForm;
