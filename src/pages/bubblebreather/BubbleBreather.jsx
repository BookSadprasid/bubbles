import React from 'react';
import { Helmet } from 'react-helmet';

export default function BubbleBreather(){
  return (
    <Helmet>
      <script src="/bubblebreather.js" type="text/javascript" />
    </Helmet>
  );
}