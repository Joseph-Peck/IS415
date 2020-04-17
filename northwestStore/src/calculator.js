import './CSS/todo.css'
import React, { Component } from 'react'
import * as bs from 'react-bootstrap'

class Calculator extends Component {

    constructor(props){
        super(props)
        this.state = {
            showMe: false,
            fiveStarRating: '',
            chainOwned: '',
            numberOfDialysisStations: '',
            offersInCenterHemodialysis: '',
            offersPeritonealDialysis: '',
            offersHomeHemodyalysis: '',
            patientTransfusionCategoryText: '',
            mortalityRate: '',
            percentageOfAdultPatientsWithLongTermCateterInUse: '',
        }
    }
    handleFBChange = event => {
        this.setState({
            fiveStarRating: event.target.value
        })
    }
    handleAchieveChange = event => {
        this.setState({
            chainOwned: event.target.value
        })
    }
    handleGoalChange = event => {
        this.setState({
            numberOfDialysisStations: event.target.value
        })
    }
    handleHeartChange = event => {
        this.setState({
            offersInCenterHemodialysis: event.target.value
        })
    }
    handleIsCharityChange = event => {
        this.setState({
            offersPeritonealDialysis: event.target.value
        })
    }
    handleCharityValidChange = event => {
        this.setState({
            offersHomeHemodyalysis: event.target.value
        })
    }
    handleIsAnonymousChange = event => {
        this.setState({
            patientTransfusionCategoryText: event.target.value
        })
    }
    handleHasBeneficiaryChange = event => {
        this.setState({
            percentageOfAdultPatientsWithLongTermCateterInUse: event.target.value
        })
    }
    handleVisibleInSearchChange = event => {
        this.setState({
            mortalityRate: event.target.value
        })
    }

    handleSubmit = event => {
      this.setState({
      showMe: true
      })
      let req = require("request");
      const uri = "https://cors-anywhere.herokuapp.com/https://ussouthcentral.services.azureml.net/workspaces/57c49b4f4be44691a572d4aa62e7fba4/services/60929b260da84d08b6f41ac720a2d76a/execute?api-version=2.0&details=true";
      const apiKey = "jMgLKnjjHFID4/YfKeqPzd5CP2qR3z2M7GcB9idvyERWXiNWdHmWEIVx97VI/LT2Olv/T1zLEW6Fd76tJVNhNA==";
      let data = {
        "Inputs": {
          "input1": {
            "ColumnNames": [
              "Five Star",
              "Chain Owned",
              "# of Dialysis Stations",
              "Offers in-center hemodialysis",
              "Offers peritoneal dialysis",
              "Offers home hemodialysis training",
              "Patient Transfusion category text",
              "Mortality Rate (Facility)",
              "Percentage of Adult patients with long term catheter in use"
            ],
            "Values": [
              [
                // "3",
                // "1",
                // "1",
                // "0",
                // "1",
                // "0",
                // "As Expected",
                // "5",
                // "10"
                this.state.fiveStarRating,
                this.state.chainOwned,
                this.state.numberOfDialysisStations,
                this.state.offersInCenterHemodialysis,
                this.state.offersPeritonealDialysis,
                this.state.offersHomeHemodyalysis,
                this.state.patientTransfusionCategoryText,
                this.state.mortalityRate,
                this.state.percentageOfAdultPatientsWithLongTermCateterInUse,
              ]
            ]
          }
        },
        "GlobalParameters": {}
      }


      const options = {
          uri: uri,
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + apiKey,
          },
          body: JSON.stringify(data)
      }
      req(options, (err, res, body) => {
          if (!err && res.statusCode == 200) {
              console.log(body);
          } else {
            console.log(body)

            //   console.log("The request failed with status code: " + res.statusCode);
          }
          this.setState({
            response: body
            })
      });
      event.preventDefault()
    }


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <bs.Container fluid>
                    <bs.Row>
                        <bs.Col>
                            <h1 className="mt-3">Prediction Calculator</h1>
                        </bs.Col>
                    </bs.Row>
                    <bs.Row className="my-3 mt-3">
                    <bs.Col md="6">
                            <bs.Card>
                                <bs.Card.Body style={{marginLeft: "7rem"}} >
                                    <label>Rating:</label><br />
                                    <select  value={this.state.fiveStarRating} onChange={this.handleFBChange}>
                                        <option defaultValue>Select --</option>
                                        <option>1 Star</option>
                                        <option>2 Stars</option>
                                        <option>3 Stars</option>
                                        <option>4 Stars</option>
                                        <option>5 Stars</option>
                                    </select><br />
                                    <label>Chain Owned?</label><br /> 
                                    <select value={this.state.chainOwned}onChange={this.handleAchieveChange}>
                                        <option defaultValue>Select --</option>
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select>
                                    <label>Number of Dialysis Stations:</label><br /> <input type="text" placeholder="#" value={this.state.numberOfDialysisStations} onChange={this.handleGoalChange}/><br />
                                    <label>Offers In-Center Hemodialysis?</label><br /> 
                                    <select type="text" placeholder="#" value={this.state.offersInCenterHemodialysis} onChange={this.handleHeartChange}>
                                        <option defaultValue>Select --</option>
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select>
                                    <label>Offers Peritoneal Dialysis?</label><br />
                                    <select  value={this.state.offersPeritonealDialysis} onChange={this.handleIsCharityChange}>
                                        <option defaultValue>Select --</option>
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select><br />
                                    <label>Offers Home Hemodialysis Training?</label><br />
                                    <select  value={this.state.offersHomeHemodyalysis} onChange={this.handleCharityValidChange}>
                                        <option defaultValue>Select --</option>
                                        <option value="1">True</option>
                                        <option value="0">False</option>
                                    </select><br />
                                    <label>Patient Transfusion Category:</label><br />
                                    <input type="text" placeholder="Category Name" value={this.state.patientTransfusionCategoryText} onChange={this.handleIsAnonymousChange} /><br />
                                    <label>Mortality Rate:</label><br />
                                    <input type="text" placeholder="#" value={this.state.mortalityRate} onChange={this.handleVisibleInSearchChange} /><br />
                                    <label>Percentage of Adult Patients with Long-Term Catheter in use:</label><br />
                                    <input type="text" placeholder="%" value={this.state.percentageOfAdultPatientsWithLongTermCateterInUse} onChange={this.handleHasBeneficiaryChange} /><br />
                                    <br /><br />
                                    <input type="submit" value="Submit" style={{marginLeft: "7rem"}} onChange={this.handleSubmit}/>
                                    <br /><br />
                                </bs.Card.Body>
                            </bs.Card>
                        </bs.Col>
                        <bs.Col md="6">
                             {this.state.showMe?
                            <div>
                                {this.state.response}
                                </div>:null
                            }

                        </bs.Col>
                    </bs.Row>
                </bs.Container>
            </form>
        )
    }
    
}
export default Calculator


