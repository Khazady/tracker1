'use client';

import { Button } from '@/app/ui/button';
import Link from 'next/link';

export default function FormButtons({
  cancelHref,
  submitText,
}: {
  cancelHref: string;
  submitText: string;
}) {
  return (
    <div className="mt-6 flex justify-end gap-4">
      <Link
        href={cancelHref}
        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
      >
        Cancel
      </Link>
      <Button type="submit">{submitText}</Button>
    </div>
  );
}
