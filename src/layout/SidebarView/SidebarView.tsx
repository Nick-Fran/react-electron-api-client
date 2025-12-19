import { useEffect, useState } from "react";
import { useIsElectron } from "../../hooks";
import { SavedRequest } from "../../models/SavedRequest";
import { Box, Typography } from "@mui/material";

export const SidebarView = () => {

  const [requests, setRequests] = useState<SavedRequest[]>([]);

  const isElectron = useIsElectron();

  useEffect(() => {
    if (isElectron) {
      window.electron.loadRequests().then((res) => {
        setRequests(res);
      }).catch((err) => {
        console.error('Failed to load requests from Electron:', err);
      });
    }
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      SidebarView
      {requests.map((req) => (
        <Typography key={req.id}
        sx={{
          cursor: 'pointer',
          fontWeight: 500,
          "&:hover": { backgroundColor: "action.hover" },
          px: 0.5,
        }}
        >
          {req.name}
        </Typography>
      ))}
      </Box>
  )
}