import React from "react";
import { Link } from "react-router-dom";

class IssueTable extends React.Component {
  render() {
    const { issue, handleDelete } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>IssueId</th>
              <th>Description</th>
              <th>IssueStatus</th>
              <th>IssueType</th>
             
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {issue.map((s) => (
              <tr key={s.issueId}>
                <td>{s.issueId}</td>
                <td>{s.description}</td>
                <td>{s.issueStatus}</td>
                <td>{s.issueType}</td>
                
                <td>
                  <Link
                    to={`/issue/update/${s.issueId}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(s.issueId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default IssueTable;