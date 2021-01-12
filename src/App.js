import logo from './logo.svg';
import './App.css';
import { findAllByDisplayValue } from '@testing-library/react';
import { Component } from 'react';
import ContentCard from "./ContentCard.jsx"
function App(){
    return(
      <table>
      <ContentCard name="Sami Elsaeyed" number="123456789" email="dontemailme@bye.com"/>
      <ContentCard name="Bob Builder" number="24681012" email="yeswecan@cement.com"/>
      <ContentCard name="Bertram Gilfoyle" number="135791113" email="artlesscommerce@no.com"/>
      </table>
      );
  }

export default App;
