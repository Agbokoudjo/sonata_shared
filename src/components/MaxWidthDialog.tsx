/*
 * This file is part of the project by AGBOKOUDJO Franck.
 *
 * (c) AGBOKOUDJO Franck <franckagbokoudjo301@gmail.com>
 * Phone: +229 67 25 18 86
 * LinkedIn: https://www.linkedin.com/in/internationales-web-services-120520193/
 * Company: INTERNATIONALES WEB SERVICES
 * [GitHub - Agbokoudjo/sonata_shared](https://github.com/Agbokoudjo/sonata_shared)
 * For more information, please feel free to contact the author.
 */

// src/components/MaxWidthDialog.tsx
import React, { memo } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import useDialogStore from '../store/useDialogStore';
import { SxProps } from '@mui/material';

interface MaxWidthDialogOptions{
    classNameMenuItem?:string[];
    sxMenuItem?:SxProps;
    classNameSelect?:string[];
    sxSelect?:SxProps ;
    classNameFormControlLabel?:string[];
    sxFormControlLabel?:SxProps;
    classNameFormControl?:string[];
    sxFormControl?:SxProps;
    contextId:string;
    classNameSwitch?:string[];
}
const MaxWidthDialog: React.FC<MaxWidthDialogOptions> = memo(({ 
    contextId ,
    classNameFormControl,
    sxFormControl,
    classNameFormControlLabel,
    sxFormControlLabel,
    classNameSelect,
    sxSelect,
    classNameMenuItem,
    sxMenuItem,
    classNameSwitch
}) => {
  const fullWidth = useDialogStore((state) => state[contextId]?.fullWidth ?? true);
  const maxWidth = useDialogStore((state) => state[contextId]?.maxWidth ?? 'xl');
  const setFullWidth = useDialogStore((state) => state.setFullWidth);
  const setMaxWidth = useDialogStore((state) => state.setMaxWidth);
  const handleMaxWidthChange = (event:SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(contextId, event.target.value as typeof maxWidth );
  };

  const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullWidth(contextId, event.target.checked);
  };

  return (
    <div>
      <Box
        noValidate
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          m: 'auto',
          width: 'fit-content',
        }}
      >
        <FormControl sx={sxFormControl || { mt: 0, minWidth: 120 }} className={classNameFormControl?.join(' ') || 'form-control-container'}>
          <label htmlFor="max-width" className="text-info fw-bolder">
            maxWidth
          </label>
          <Select
            autoFocus
            value={maxWidth}
            sx={sxSelect || { color: 'yellowgreen', fontWeight: 'bolder', border: '2', borderColor: 'yellow' }}
            onChange={handleMaxWidthChange}
            label="maxWidth"
            inputProps={{
              name: 'max-width',
              id: 'max-width',
            }}
            className={classNameSelect?.join(' ') || 'class-select'}
          >
            <MenuItem value="xs" 
                    sx={sxMenuItem || { color: 'yellowgreen', fontWeight: 'bolder' }} 
                    className={classNameMenuItem?.join(' ') || 'menu-item-class'} >
              xs
            </MenuItem>
            <MenuItem value="sm" 
                    sx={sxMenuItem || { color: 'yellowgreen', fontWeight: 'bolder' }}
                    className={classNameMenuItem?.join(' ') || 'menu-item-class'}
                    >
              sm
            </MenuItem>
            <MenuItem value="md" 
                    sx={sxMenuItem || { color: 'yellowgreen', fontWeight: 'bolder' }}
                    className={classNameMenuItem?.join(' ') || 'menu-item-class'}
                    >
              md
            </MenuItem>
            <MenuItem value="lg" 
                      sx={sxMenuItem || { color: 'yellowgreen', fontWeight: 'bolder' }}
                      className={classNameMenuItem?.join(' ') || 'menu-item-class'}
                      >
              lg
            </MenuItem>
            <MenuItem value="xl" 
                      sx={sxMenuItem || { color: 'yellowgreen', fontWeight: 'bolder' }} 
                      className={classNameMenuItem?.join(' ') || 'menu-item-class'}
                      selected={true}>
              xl
            </MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          sx={sxFormControlLabel || { mt: 1, color: 'white' }}
          control={<Switch checked={fullWidth} onChange={handleFullWidthChange}  className={classNameSwitch?.join(' ') || 'form-check-input'}/>}
          label="Full width"
          className={classNameFormControlLabel?.join(' ') || 'form-check-label form-control-label-full-width'}
        />
      </Box>
    </div>
  );
});

export default MaxWidthDialog;
