import { Autocomplete, TextField } from '@mui/material'
import { ChevronDown, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export interface valueProps {
  value: string
  label: string
}

interface AutocompleteMUIProps {
  size?: string
  label?: string
  error?: string
  value: valueProps[]
}

export function AutocompleteMUI({
  size,
  label,
  value,
  error,
  ...props
}: AutocompleteMUIProps) {
  const [selectedvalue, setSelectedvalue] = useState<string>()

  useEffect(() => {
    if (value !== undefined && !value.some((v) => v.value === selectedvalue)) {
      setSelectedvalue(value.length > 0 ? value[0].value : undefined)
    }
  }, [value, selectedvalue])

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: valueProps | null,
  ) => {
    const newvalue = value?.value || ''
    setSelectedvalue(newvalue)
  }

  return (
    <Autocomplete
      options={value}
      sx={{
        width: { size },
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
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          {...props}
          label={label}
          error={!!error}
          helperText={error}
          InputLabelProps={{
            style: {
              color: '#3d22a1',
              fontWeight: 500,
            },
          }}
          sx={{
            '& .MuiFormHelperText-root': {
              fontWeight: 'bold',
              fontFamily: 'Nunito, sans-serif',
              fontSize: '0.9rem',
              marginLeft: 0,
              color: '#d32f2f',
            },
          }}
        />
      )}
      onChange={(event, value) => handleChange(event, value)}
      clearIcon={<X className="text-primary" size={20} />}
      popupIcon={<ChevronDown className="text-primary" size={25} />}
    />
  )
}
