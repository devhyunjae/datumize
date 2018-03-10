import React from 'react'
import styled from 'styled-components'

import AssignmentForm from '../components/Assignment/Form'


const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  display: flex;
  font-size: 1.5em;
  color: palevioletred;
  flex: 1;
  margin-top: 40px;
  margin-bottom: 20px;
`

export default () => (
  <Container>
    <Title>Assignment</Title>
    <AssignmentForm />
  </Container>
)
