
import { Box } from "@mui/material"
import { MainView, SidebarView } from "./layout"

const App = () => {

  return (
    <Box sx={{ height: '100vh', display: 'flex' }}>
      <Box component="header" sx={{ flex: 2, display: 'flex', padding: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
        <SidebarView />
      </Box>
      <Box component="main" sx={{ flex: 10, overflow: 'auto', padding: 2 }}>
        <MainView />
      </Box>
    </Box>
  )
}

export default App
