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

// src/store/useDialogStore.ts
import {create} from 'zustand';
import { DialogProps } from '@mui/material/Dialog';
type DialogStoreState= {[key: string]:{fullWidth?: boolean;maxWidth?: DialogProps['maxWidth'];}}
type DialogStoreAction={
    setFullWidth: (contextId: string, fullWidthDialog:boolean) => void;
    setMaxWidth: (contextId: string, maxWidthDialog:DialogProps['maxWidth']) => void;
}
type DialogStore=DialogStoreState & DialogStoreAction
  
const useDialogStore = create<DialogStore>((set) => ({
  // Initial state can be an empty object or pre-defined states for each contextId
  setFullWidth: (contextId:string,fullWidthDialog:boolean) => set((state) => ({
    ...state,
    [contextId]: {
      ...state[contextId], // Conserve l'état précédent du contextId
      fullWidth: fullWidthDialog, // Met à jour la valeur de fullWidth
      maxWidth: state[contextId]?.maxWidth  // Définir maxWidth si non défini
    }
  })),
  
  setMaxWidth: (contextId:string, maxWidthDialog: DialogProps['maxWidth']) => set((state) => ({
    ...state,
    [contextId]: {
      ...state[contextId], // Conserve l'état précédent du contextId
      maxWidth: maxWidthDialog, // Met à jour la valeur de maxWidth
      fullWidth: state[contextId]?.fullWidth // Définir fullWidth si non défini
    }
  }))
}));

export default useDialogStore;
