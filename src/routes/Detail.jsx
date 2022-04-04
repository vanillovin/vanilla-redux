import React from "react";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';

function Detail({ toDos }) {
  const { id } = useParams();
  const toDo = toDos.find(toDo => toDo.id === +id);
  const date = new Date(toDo?.id);
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {`
        ${date.toISOString().split('T')[0]
        } ${date.toISOString().split('T')[1].substring(0, 5)}
      `}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);