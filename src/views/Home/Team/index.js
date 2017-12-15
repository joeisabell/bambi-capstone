import React from 'react'
import styled from 'styled-components'

import Profile from './ProfileCard'

import carson from 'assets/carson.jpg'
import kate from 'assets/kate.jpg'
import john from 'assets/john.jpg'
import joe from 'assets/joe.jpg'

export default () =>
  <Members>
    <Profile href={'https://www.linkedin.com/in/carsenbeyer/'}>
      <Profile.Pic src={carson}/>
      <Profile.Name>Carson Beyer</Profile.Name>
    </Profile>
    <Profile href={'https://www.linkedin.com/in/kate-cousineau-465268112/'}>
      <Profile.Pic src={kate}/>
      <Profile.Name>Kate Cousineau</Profile.Name>
    </Profile>
    <Profile href={'https://www.linkedin.com/in/johnhosacklim/'}>
      <Profile.Pic src={john}/>
      <Profile.Name>John Lim</Profile.Name>
    </Profile>
    <Profile href={'https://www.linkedin.com/in/joeisabell/'}>
      <Profile.Pic src={joe}/>
      <Profile.Name>Joe Isabell</Profile.Name>
    </Profile>
  </Members>


const Members = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap:wrap;
  padding: 20px 0;
  width: 100%;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`
