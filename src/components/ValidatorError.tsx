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

import React from 'react';

interface ValidatorErrorFieldProps {
    errordisplay?: boolean;
    messageerror: string | string[];
    classnameerror?: string[];
}

/**
 * ==========================================
 * English Documentation
 * ==========================================
 * 
 * Component: ValidatorErrorField
 * 
 * This component displays validation error messages for a form field.
 * It accepts an error message as a string or an array of strings.
 * If `errordisplay` is set to `true`, the message(s) will be shown.
 * 
 * @param {boolean} [errordisplay=false] - Determines whether the error message should be displayed.
 * @param {string | string[]} messageerror - The error message(s) to display.
 * @param {string[]} [classnameerror=["fw-bold", "text-danger", "mt-2"]] - Optional CSS classes to style the error message.
 * 
 * @returns {JSX.Element | null} A formatted error message if `errordisplay` is true, otherwise null.
 * 
 * Example usage:
 * ```tsx
 * <ValidatorErrorField errordisplay={true} messageerror="Invalid email address" />
 * <ValidatorErrorField errordisplay={true} messageerror={["Field is required", "Must be at least 6 characters"]} />
 * ```
 * 
 * ==========================================
 * Documentation en Français
 * ==========================================
 * 
 * Composant : ValidatorErrorField
 * 
 * Ce composant affiche des messages d'erreur de validation pour un champ de formulaire.
 * Il accepte un message d'erreur sous forme de chaîne ou de tableau de chaînes.
 * Si `errordisplay` est défini sur `true`, le(s) message(s) seront affichés.
 * 
 * @param {boolean} [errordisplay=false] - Détermine si le message d'erreur doit être affiché.
 * @param {string | string[]} messageerror - Le ou les messages d'erreur à afficher.
 * @param {string[]} [classnameerror=["fw-bold", "text-danger", "mt-2"]] - Classes CSS optionnelles pour le style du message d'erreur.
 * 
 * @returns {JSX.Element | null} Un message d'erreur formaté si `errordisplay` est vrai, sinon null.
 * 
 * Exemple d'utilisation :
 * ```tsx
 * <ValidatorErrorField errordisplay={true} messageerror="Adresse e-mail invalide" />
 * <ValidatorErrorField errordisplay={true} messageerror={["Ce champ est requis", "Doit contenir au moins 6 caractères"]} />
 * ```
 */

export const ValidatorErrorField: React.FC<ValidatorErrorFieldProps> = ({
    errordisplay = false,
    messageerror,
    classnameerror = ["fw-bold", "text-danger", "mt-2"]
}) => {
    if (!errordisplay) return null; // Si errordisplay est false, on n'affiche rien

    const classNames = `error-message ${classnameerror.join(" ")}`;

    return (
        <>
            {Array.isArray(messageerror) ? (
                messageerror.map((messageerroritem, keyitemerror) => (
                    <small key={keyitemerror} className={classNames}>
                        {messageerroritem}
                        <br />
                    </small>
                ))
            ) : (
                <small className={classNames}>{messageerror}</small>
            )}
        </>
    );
};
