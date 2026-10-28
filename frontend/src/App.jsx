import { Typography, Container, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          TradeWise AI
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Virtual Stock Trading Platform
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Frontend is running successfully. Backend integration coming next.
        </Typography>
      </Box>
    </Container>
  );
}

export default App;