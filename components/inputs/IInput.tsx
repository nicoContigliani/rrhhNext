export interface IInput {
    autoComplete: string;
    autoFocus: boolean;
    color: string;
    defaultValue: any;
    disabled: boolean;
    fullWidth: boolean;
    id: string | number;
    inputComponent: any;
    inputProps: object;
    multiline: boolean;
    label: string;
    rows: string | number;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type:
    'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'

}
