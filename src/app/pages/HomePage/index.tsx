import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>PJ's Sports Pub</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>PJ's Sports Pub</span>
    </>
  );
}
