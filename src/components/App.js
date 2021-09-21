import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

// import SiteFooter from './../containers/Footer';

const App = () => (
  <>
    <Container maxWidth="md" style={{ marginTop: '20px', minHeight: '60vh' }}>
      <Box
        boxShadow={1}
        style={{ textAlign: 'center', padding: '10px', color: '#555' }}
      >
        <Typography variant="h4" gutterBottom fontWeight="fontWeightBold">
          <b>Add TODO</b>
          <Box p={1} />
        </Typography>
        <AddTodo />
        <Box p={1} />
        <VisibleTodoList />
        <Footer />
      </Box>
    </Container>
  </>
)

export default App
