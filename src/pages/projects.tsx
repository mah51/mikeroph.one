import React from 'react';
import WIP from '../Components/WIP';

function Projects() {
  return <div>Test!</div>;
}

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return { props: {} };
}

export default Projects;
