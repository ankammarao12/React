import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import IssueTable from "./issuetable";

class Issue extends React.Component {
  state = {
    issue: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:8181/api/getallIssues/call")
      .then((res) => {
        console.log(res);
        this.setState({ issue: res.data });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDelete = (issueId) => {
    //axios.delete("http://localhost:8082/students/" + rollNo);
    axios
      .delete(`http://localhost:8181/api/getallIssues/call/${issueId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const issue = this.state.issue.filter((s) => s.issueId != issueId);
        this.setState({ issue: issue });
        alert(res.data.description + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="w-75 mx-auto">
        <Link to="/issue/add" className="btn btn-info float-end">
          Add
        </Link>
        <IssueTable
          issue={this.state.issue}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Issue;