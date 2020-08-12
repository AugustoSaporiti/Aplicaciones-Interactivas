import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import Cuerpo from "./Cuerpo";

function QuienesSomos(props) {
  const { selectQuienesSomos } = props;

  useEffect(() => {
    selectQuienesSomos();
  }, [selectQuienesSomos]);
  return (
    <Fragment>
      <HeadSection />
      <Cuerpo />
    </Fragment>
  );
}

QuienesSomos.propTypes = {
  selectQuienesSomos: PropTypes.func.isRequired
};

export default QuienesSomos;
