import React from 'react';

import styles from './style.scss';

const SubHeader = props => {
  return <div className={styles.subheader}>{props.children}</div>;
};

export default SubHeader;
