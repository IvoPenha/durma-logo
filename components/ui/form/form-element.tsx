import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '../form';
import { Input } from '../input';
import { Textarea } from '../textarea';
import { Avatar, AvatarFallback, AvatarImage } from '../avatar';

interface BaseFormElementProps {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  className?: string;
  onBlur?: (value: string) => void;
  maxLength?: number;
}

interface InputElementProps extends BaseFormElementProps {
  type: 'input';
  inputType?: string;
  mask?: {
    format: (value: string) => string;
    maxLength?: number;
  };
}

interface TextareaElementProps extends BaseFormElementProps {
  type: 'textarea';
}

interface SelectElementProps extends BaseFormElementProps {
  type: 'select';
  options: { value: string; label: string }[];
}

interface ImageUploadElementProps extends BaseFormElementProps {
  type: 'image';
  accept?: string;
  avatarClassName?: string;
}

type FormElementProps =
  | InputElementProps
  | SelectElementProps
  | TextareaElementProps
  | ImageUploadElementProps;

const FormInput = ({
  placeholder,
  inputType = 'text',
  mask,
  maxLength,
  onBlur,
  field,
}: {
  placeholder?: string;
  inputType?: string;
  mask?: {
    format: (value: string) => string;
    maxLength?: number;
  };
  maxLength?: number;
  onBlur?: (value: string) => void;
  field: any;
}) => (
  <Input
    type={inputType}
    placeholder={placeholder}
    maxLength={mask?.maxLength || maxLength}
    {...field}
    onChange={e => {
      const value = mask ? mask.format(e.target.value) : e.target.value;
      field.onChange(value);
    }}
    onBlur={e => {
      field.onBlur(e);
      if (onBlur) {
        onBlur(e.target.value);
      }
    }}
  />
);

const FormSelect = ({
  placeholder,
  options,
  field,
}: {
  placeholder?: string;
  options: { value: string; label: string }[];
  field: any;
}) => (
  <Select onValueChange={field.onChange} defaultValue={field.value}>
    <SelectTrigger>
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {options.map(option => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

const FormTextarea = ({
  placeholder,
  className,
  field,
}: {
  placeholder?: string;
  className?: string;
  field: any;
}) => <Textarea placeholder={placeholder} className={className} {...field} />;

const FormImageUpload = ({
  placeholder,
  accept = 'image/*',
  avatarClassName = 'w-20 h-20',
  field: { value, onChange, ...field },
}: {
  placeholder?: string;
  accept?: string;
  avatarClassName?: string;
  field: any;
}) => (
  <div className="flex items-center gap-4">
    {value && (
      <Avatar className={avatarClassName}>
        <AvatarImage
          src={
            value instanceof FileList ? URL.createObjectURL(value[0]) : value
          }
          alt={placeholder || 'Uploaded image'}
        />
        <AvatarFallback>
          {value instanceof FileList ? value[0].name.charAt(0) : ''}
        </AvatarFallback>
      </Avatar>
    )}
    <FormControl>
      <Input
        type="file"
        accept={accept}
        onChange={e => onChange(e.target.files)}
        {...field}
      />
    </FormControl>
  </div>
);

const renderFormControl = (props: FormElementProps, field: any) => {
  switch (props.type) {
    case 'input':
      return (
        <FormInput
          placeholder={props.placeholder}
          inputType={props.inputType}
          mask={props.mask}
          maxLength={props.maxLength}
          onBlur={props.onBlur}
          field={field}
        />
      );
    case 'select':
      return (
        <FormSelect
          placeholder={props.placeholder}
          options={props.options}
          field={field}
        />
      );
    case 'textarea':
      return (
        <FormTextarea
          placeholder={props.placeholder}
          className={props.className}
          field={field}
        />
      );
    case 'image':
      return (
        <FormImageUpload
          placeholder={props.placeholder}
          accept={props.accept}
          avatarClassName={props.avatarClassName}
          field={field}
        />
      );
  }
};

export const FormElement = (props: FormElementProps) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          {renderFormControl(
            {
              ...props,
              onBlur: props.type === 'input' ? props.onBlur : undefined,
            },
            field
          )}
          {props.description && (
            <FormDescription>{props.description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
