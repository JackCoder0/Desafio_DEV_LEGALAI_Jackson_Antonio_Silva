import TextField from '@mui/material/TextField'
import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
}

export function Input({ label, error, ...props }: InputProps) {
  return (
    <>
      <TextField
        id="outlined-basic"
        label={label}
        error={!!error}
        helperText={error}
        variant="outlined"
        {...props}
        size={props.size as 'small' | 'medium' | undefined}
        color={undefined}
        InputLabelProps={{
          style: {
            color: '#3d22a1',
            fontWeight: 500,
          },
        }}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #3d22a1 !important',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #3d22a1 !important',
          },
          '&.Mui-focused': {
            boxShadow: 'none',
          },
          '& .MuiInputBase-input': {
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 700,
            color: '#000 !important',
          },
          '& .MuiFormHelperText-root': {
            fontWeight: 'bold',
            fontFamily: 'Nunito, sans-serif',
            fontSize: '0.9rem',
            marginLeft: 0,
            color: '#d32f2f',
          },
        }}
      />
    </>
  )
}
