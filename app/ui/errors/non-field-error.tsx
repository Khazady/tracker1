import ErrorMessage from '@/app/ui/errors/error-message';

export default function NonFieldError(props: {
  message: string | null | undefined;
}) {
  const { message } = props;
  return (
    <div aria-live="polite" aria-atomic="true">
      <ErrorMessage message={message} />
    </div>
  );
}
