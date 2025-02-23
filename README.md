##

- This file is part of the project by AGBOKOUDJO Franck.
-
- (c) AGBOKOUDJO Franck <franckagbokoudjo301@gmail.com>
- Phone: +229 67 25 18 86
- LinkedIn: https://www.linkedin.com/in/internationales-web-services-120520193/
- Company: INTERNATIONALES WEB SERVICES
-[GitHub - Agbokoudjo/sonata_shared](https://github.com/Agbokoudjo/sonata_shared)
- For more information, please feel free to contact the author.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# Usage Guide for DisplayModal and ValidatorErrorField Components

## Introduction
This guide provides instructions on how to use the `DisplayModal` and `ValidatorErrorField` components in your React project. The `DisplayModal` component is used to display modals dynamically, while `ValidatorErrorField` is designed to display validation error messages in form fields using Material-UI.

---

## 1. DisplayModal Component

### Description
The `DisplayModal` component is used to show modal dialogs dynamically. It accepts properties to control its visibility, content, and actions.

### Props
| Prop Name  | Type      | Description |
|------------|----------|-------------|
| `open`     | boolean  | Determines if the modal is displayed. |
| `onClose`  | function | Function to close the modal. |
| `title`    | string   | Title of the modal. |
| `children` | ReactNode | Content of the modal. |
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
### Example Usage
```tsx
import React, { useState } from 'react';
import {displayModal} from './components/Modal';
import { Button } from '@mui/material';

const ExampleModalUsage = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            let message_test=`
       This approach gives the developer maximum flexibility to: Change the background color, position,
 and other properties of the modal via props or CSS classes. Use custom CSS classes in their own 
 files without having to touch the React code. Adjust mobile behavior with media queries to make modal
  responsive. This allows for clean modal management while giving the developer a lot of freedom 
  to customize the interface according to the specific needs of each project. 
  If you have any other questions or if you want to deepen a point, 
  don't hesitate to tell me! If you want the modal to close automatically 
  after a certain delay or based on another event, you can add auto-close logic via props. 
  For example, you can add a setTimeout function to close the modal after a certain amount of time.       


`
      message_test=`<div class="alert alert-success fw-bolder" role="alert">
          count is ${count}

          A simple info alert—check it out!
    </div> ${message_test}`
      displayModal(message_test,1) as void
        </div>
    );
};

export default ExampleModalUsage;
```

---

## 2. ValidatorErrorField Component

### Description
The `ValidatorErrorField` component displays validation error messages in form fields. It supports both single and multiple error messages and is styled with Material-UI.

### Props
| Prop Name     | Type              | Description |
|--------------|------------------|-------------|
| `errordisplay` | boolean          | Controls visibility of the error message. |
| `messageerror` | string / string[] | The error message(s) to display. |
| `classnameerror` | string[] (optional) | Custom CSS classes for styling. |

### Example Usage with Material-UI
```tsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import ValidatorErrorField from './ValidatorErrorField';

const ExampleForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState<string | string[]>('');
    const [showError, setShowError] = useState(false);

    const validateInput = () => {
        if (!inputValue) {
            setError('This field is required');
            setShowError(true);
        } else if (inputValue.length < 5) {
            setError(['Input must be at least 5 characters long']);
            setShowError(true);
        } else {
            setShowError(false);
        }
    };

    return (
        <div>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={validateInput}
            />
            <ValidatorErrorField errordisplay={showError} messageerror={error} />
            <Button variant="contained" onClick={validateInput}>
                Submit
            </Button>
        </div>
    );
};

export default ExampleForm;
```

---

## Conclusion
- Use `DisplayModal` to show modal dialogs dynamically.
- Use `ValidatorErrorField` to display validation errors in form fields with Material-UI.
- These components enhance the user experience by providing structured and interactive UI elements.
  

---

### 📝 **Updated Documentation for `@wlindabla/sonata_shared`**  

```md
# @wlindabla/sonata_shared

A set of shared components for front-end applications based on React and Material-UI.  
This package is designed to be used in multiple front-end libraries and provides reusable components like `MaxWidthDialog`.

## 📌 Repository

This package is published on GitHub under the repository:  
🔗 [GitHub - Agbokoudjo/sonata_shared](https://github.com/Agbokoudjo/sonata_shared)

## 📦 Installation

```sh
yarn add @wlindabla/sonata_shared
# or using npm
npm install @wlindabla/sonata_shared
```

## 🚀 Using `MaxWidthDialog`

`MaxWidthDialog` is a Material-UI-based component that displays a dialog with configurable width and styling options, while using Zustand for state management.

### ✨ Example Integration

```tsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useDialogStore from './store/useDialogStore';
import MaxWidthDialog from '@wlindabla/sonata_shared';

export function MaxWidthDialogApp() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      <Dialog
        fullWidth={useDialogStore((state) => state['exampleId']?.fullWidth)}
        maxWidth={useDialogStore((state) => state['exampleId']?.maxWidth)}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <MaxWidthDialog 
            contextId="exampleId"
            classNameMenuItem={['custom-menu-item']}
            sxMenuItem={{ color: 'primary.main' }}
            classNameSelect={['custom-select']}
            sxSelect={{ bgcolor: 'background.paper' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
```

## 📖 Props

The `MaxWidthDialog` component accepts the following props:

```ts
interface MaxWidthDialogOptions {
  classNameMenuItem?: string[];       // CSS classes for menu items
  sxMenuItem?: SxProps;               // Material-UI sx styling for menu items
  classNameSelect?: string[];         // CSS classes for select elements
  sxSelect?: SxProps;                 // Material-UI sx styling for select elements
  classNameFormControlLabel?: string[]; // CSS classes for form control labels
  sxFormControlLabel?: SxProps;       // Material-UI sx styling for form control labels
  classNameFormControl?: string[];    // CSS classes for form control containers
  sxFormControl?: SxProps;            // Material-UI sx styling for form control containers
  contextId: string;                  // Required context identifier for Zustand state management
  classNameSwitch?: string[];         // CSS classes for switch elements
}
```

| Name                     | Type               | Description                                         | Default Value |
|--------------------------|--------------------|-----------------------------------------------------|--------------|
| `contextId`              | `string`           | Context identifier used for state management.      | **Required** |
| `classNameMenuItem`      | `string[]`         | Additional CSS classes for menu items.             | `[]`         |
| `sxMenuItem`            | `SxProps`          | Custom Material-UI styling for menu items.        | `{}`         |
| `classNameSelect`        | `string[]`         | Additional CSS classes for select elements.        | `[]`         |
| `sxSelect`              | `SxProps`          | Custom Material-UI styling for select elements.   | `{}`         |
| `classNameFormControlLabel` | `string[]`    | CSS classes for form control labels.              | `[]`         |
| `sxFormControlLabel`     | `SxProps`          | Custom Material-UI styling for form control labels. | `{}`         |
| `classNameFormControl`   | `string[]`         | Additional CSS classes for form control containers. | `[]`         |
| `sxFormControl`         | `SxProps`          | Custom Material-UI styling for form control containers. | `{}`         |
| `classNameSwitch`       | `string[]`         | CSS classes for switch elements.                   | `[]`         |

## 🎯 Usage Conditions

- **Required Dependencies**:  
  - React (`^19.0.0`)  
  - Material-UI (`^6.4.5`)  
  - Zustand (`^5.0.3`)  

- **State Management**:  
  - `MaxWidthDialog` uses Zustand via `useDialogStore` to dynamically manage its settings.
  
- **Custom Styling Support**:  
  - The component supports both CSS class names and Material-UI `sx` styling props for flexibility.

- **Designed for Multiple Libraries**:  
  - `@wlindabla/sonata_shared` is intended to be a foundational package for other front-end projects.

## ⚡ Contributing

Contributions are welcome! Feel free to fork the repository, make improvements, and submit a pull request. 🚀  

---

📌 **Does this match what you want?** Let me know if you need further refinements! 😃
