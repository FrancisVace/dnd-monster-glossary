import * as us from 'underscore.string';

export {}

declare global {
    interface String {
        /**
         * Capitalizes the first letter of a string.
         */
        capitalize(): string;
    }
}

String.prototype.capitalize = function (): string {
    return us.capitalize(this)
};