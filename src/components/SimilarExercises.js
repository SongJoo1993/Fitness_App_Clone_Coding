import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
    return (
    <Box sx={{ mt: {lg: '100px', xs:'50px'}}}>
        {/* Target Part */}
        <Typography variant='h3' mb={5}>
            Exercises that target <b textTransform="capitalize">{targetMuscleExercises[0]?.target}</b>
        </Typography>
        <Stack direction='row' sx={{ p : '2', position: 'relative'}}>
            { targetMuscleExercises.length ? 
            <HorizontalScrollbar data={targetMuscleExercises} /> :
            <Loader />
            }
        </Stack>
        {/* Equipment Part */}
        <Typography variant='h3' mb={5} mt={10}>
            Exercises that use <b>{targetMuscleExercises[0]?.equipment}</b>  
        </Typography>
        <Stack direction='row' sx={{ p : '2', position: 'relative'}}>
            { equipmentExercises.length ? 
            <HorizontalScrollbar data={equipmentExercises} /> :
            <Loader />
            }
        </Stack>
    </Box>
  )
}

export default SimilarExercises