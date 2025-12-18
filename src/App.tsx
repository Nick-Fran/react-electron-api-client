import React from "react";
import { Box, Button, TextField } from "@mui/material"
import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "./hooks/useRequest/httpRequest";
import { MethodSelect } from "./components";
import { HttpMethod } from "./types/http";
import { useRequest } from "./hooks";

const App = () => {
  const [url, setUrl] = React.useState("");
  const [method, setMethod] = React.useState<HttpMethod>('GET');

  const {
    data,
    isLoading,
    isError,
    error,
    execute
  } = useRequest({
    method,
    url
  });

  const handleSendRequest = () => {
    execute();
  }

  React.useEffect(() => {
    console.log("Method changed to:", method);
  }, [method]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 800, margin: 'auto', marginTop: 5 }}>
      <Box sx={{ display: 'flex', gap: 2, flex: 1}}>
        <MethodSelect sx={{flex: 2, maxWidth: 120}} value={method} onChange={setMethod} />
        <TextField
          sx={{ flex: 8 }}
          id="outlined-basic"
          label="URL"
          variant="outlined"
          value={url}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUrl(event.target.value);
          }} />
        <Button sx={{ flex: 2, maxWidth: 120 }} variant="contained" onClick={handleSendRequest}>SEND</Button>
      </Box>
      <Box sx={{ flex: 1, display: 'flex' }}>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error: {(error as Error).message}</div>}
        {data && <TextField
          id="outlined-textarea"
          label="API Response"
          placeholder="API Response"
          multiline
          maxRows={20}
          value={JSON.stringify(data, null, 2)}
          sx={{ flex: 1 }}
        />}
      </Box>
    </Box>
  )
}

export default App
