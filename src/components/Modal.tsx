/*
 * This file is part of the project by AGBOKOUDJO Franck.
 *
 * (c) AGBOKOUDJO Franck <franckagbokoudjo301@gmail.com>
 * Phone: +229 0167 25 18 86
 * LinkedIn: https://www.linkedin.com/in/internationales-web-services-120520193/
 * Company: INTERNATIONALES WEB SERVICES
 * [GitHub - Agbokoudjo/sonata_shared](https://github.com/Agbokoudjo/sonata_shared)
 * For more information, please feel free to contact the author.
 */

import React from 'react';
import { createPortal } from 'react-dom';

import {
  createRoot,
  Root,
} from 'react-dom/client';

import {
  Info,
  Warning,
} from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import {
  Box,
  Button,
  Modal,
  Typography,
} from '@mui/material';
export interface  StyleComponent{
    justifyContent:string,
    position?: string,
    zIndex?: number,
    bgcolor?: string,
    borderRadius?:string;
    boxShadow?: number;
    p?: number;
    color?:string;
    alignItems?: string;
    overflowY?: string;
    width?:string;
    height?:string;
    maxHeight?: string;
}
interface ModalProps {
    isOpenModal: boolean;
    handleClose: () => void;
    messageModal: any;
    isSuccess?: boolean;
    isInfo?: boolean;
    isWarning?: boolean;
    isError?: boolean;
    classnameModal?:string[];
}
const ModalMessage:React.FC<ModalProps>=({
 isOpenModal,
  handleClose,
  messageModal,
  isSuccess,
  isError,
  isWarning,
  isInfo,
  classnameModal
})=>{
    return (
    <Modal open={isOpenModal}
           onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={`modal-react ${classnameModal?.join(' ') || 'modal-dialog-centered'}`}  // Classe CSS personnalisée
    >
        <Box sx={{
                justifyContent: "center",
                position:'absolute',
                zIndex: 9999,
                bgcolor: "#283c63",
                borderRadius: "10px",
                boxShadow: 24,
                p: 4,
                color: "#ffff",
                alignItems: "center",
                overflowY: "auto",
                width: "auto",
                height: "auto",
                maxHeight: "95vh",
                top:'50%',
                left:'50%',
                transform:'translate(-50%,-50%)',
                border: `2px solid #283c63`
        }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          {isSuccess && (
            <CheckCircleIcon
              sx={{
                fontSize: 60,
                color: "green",
                borderRadius: "50%",
                border: "3px solid green",
              }}
            />
          )}
          {isError && (
            <ErrorIcon
              sx={{
                fontSize: 60,
                color: "red",
                borderRadius: "50%",
                border: "3px solid red",
              }}
            />
          )}
          {isInfo && (
            <Info
              sx={{
                fontSize: 60,
                color: "rgb(102, 205, 170)",
                borderRadius: "50%",
                border: "3px solid rgb(102, 205, 170)",
              }}
            />
          )}
          {isWarning && (
            <Warning
              sx={{
                fontSize: 60,
                color: "orange",
                borderRadius: "50%",
                border: "3px solid orange",
              }}
            />
          )}
        </Box>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          {isSuccess
            ? "Success"
            : isError
            ? "Error"
            : isInfo
            ? "Info"
            : "Warning"}
        </Typography>
        <Typography
          id="modal-modal-description"
          component="div"
          sx={{ mt: 2, textAlign: "center", overflowY: "auto" }}
        >
          <div dangerouslySetInnerHTML={{ __html: messageModal }}></div>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 2 }}>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </Box>
        </Box>
    </Modal>)
}
type MessageType = 0 | 1 | 2 | 3 | 'success' | 'error' | 'info' | 'warning';
export interface displayModalReturn{
    root: Root;
    id: string;
    closeAuto: boolean;
}
export function handleCloseModal(root:Root,modalContainer:HTMLDivElement|HTMLElement):void  {
                root.unmount();
                if (document.body.contains(modalContainer)) {
                    document.body.removeChild(modalContainer);
                }
};
/**
 * Display a modal with a specific message and options for customization.
 * 
 * @param {any} message - The content of the modal message.
 * @param {0 | 1 | 2 | 3 | 'success' | 'error' | 'info' | 'warning'} typeMessage - 
 *        The type of the message. Accepts:
 *        - 0 or 'error': Error message
 *        - 1 or 'success': Success message
 *        - 2 or 'info': Informational message
 *        - 3 or 'warning': Warning message
 * @param {boolean} [onCloseAuto=false] - Indicates if the modal should automatically close.
 * @returns {void | { root: Root | null, id: string, closeAuto: boolean }} 
 *          If `onCloseAuto` is true, returns an object with:
 *          - `root`: The React root instance for the modal.
 *          - `id`: The unique ID of the modal.
 *          - `closeAuto`: A flag indicating automatic closure.
 * 
 * --- Version française ---
 * 
 * Affiche une fenêtre modale avec un message spécifique et des options de personnalisation.
 * 
 * @param {any} message - Le contenu du message de la modale.
 * @param {0 | 1 | 2 | 3 | 'success' | 'error' | 'info' | 'warning'} typeMessage - 
 *        Le type de message. Accepte :
 *        - 0 ou 'error' : Message d'erreur
 *        - 1 ou 'success' : Message de succès
 *        - 2 ou 'info' : Message informatif
 *        - 3 ou 'warning' : Message d'avertissement
 * @param {boolean} [onCloseAuto=false] - Indique si la modale doit se fermer automatiquement.
 * @returns {void | { root: Root | null, id: string, closeAuto: boolean }} 
 *          Si `onCloseAuto` est vrai, retourne un objet avec :
 *          - `root` : L'instance React root de la modale.
 *          - `id` : L'ID unique de la modale.
 *          - `closeAuto` : Un indicateur de fermeture automatique.
 */
export function displayModal(
    message: any,
    typeMessage: MessageType,
    onCloseAuto: boolean = false,
    customClass: string[]=['modal-custom']
  ): void | displayModalReturn {
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-form-response', 'fade', 'show');
    const uniqueId = `modal-container-${Date.now()}`;
    modalContainer.setAttribute('id', uniqueId);
    document.body.appendChild(modalContainer);
  
    let root: Root | null = createRoot(modalContainer);
    const handleClose = (): void => {
      if (root) {
        root.unmount();
        if (document.body.contains(modalContainer)) {
          document.body.removeChild(modalContainer);
        }
      }
      root = null;
    };
  
    const isSuccess = typeMessage === 1 || typeMessage === 'success';
    const isError = typeMessage === 0 || typeMessage === 'error';
    const isInfo = typeMessage === 2 || typeMessage === 'info';
    const isWarning = typeMessage === 3 || typeMessage === 'warning';
  
    root.render(
      <React.StrictMode>
        {createPortal(
          <ModalMessage
            isOpenModal={true}
            handleClose={handleClose}
            messageModal={message}
            isSuccess={isSuccess}
            isError={isError}
            isInfo={isInfo}
            isWarning={isWarning}
            classnameModal={customClass}  // Passer la classe personnalisée
          />,
          modalContainer,
          uniqueId
        )}
      </React.StrictMode>
    );
    if (onCloseAuto === true) {
      return { root: root, id: uniqueId, closeAuto: true };
    }
  }
  