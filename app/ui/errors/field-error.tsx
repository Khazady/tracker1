import ErrorMessage from './error-message';

type Props = { id: string; errors?: string[] };

export default function FieldError(props: Props) {
  const { id, errors } = props;
  return (
    <div id={id} aria-live="polite" aria-atomic="true">
      {errors &&
        errors.map((error: string) => (
          <ErrorMessage message={error} key={error} />
        ))}
    </div>
  );
}
