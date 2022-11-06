import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {
  return (
    <Box sx={{padding:2}} flex={4}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

    </Box>
  )
}

export default Feed