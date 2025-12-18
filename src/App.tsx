import { Box, Button, TextField } from "@mui/material"
import React from "react";

const App = () => {

  const [url, setUrl] = React.useState("");

  const handleSendRequest = () => {
    console.log("Sending request to ", url)
  }

  return (
    <Box sx={{ display: 'flex', gap: 2, width: 400, margin: 'auto', marginTop: 5 }}>
      <TextField
        sx={{ flex: 10 }}
        id="outlined-basic"
        label="URL"
        variant="outlined"
        value={url}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setUrl(event.target.value);
        }} />
      <Button sx={{ flex: 2 }} variant="contained" onClick={handleSendRequest}>SEND</Button>
    </Box>
  )
}

export default App
