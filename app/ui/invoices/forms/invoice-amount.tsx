'use client';

import { State } from '@/app/lib/actions';
import FieldError from '@/app/ui/errors/field-error';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function InvoiceAmount(props: {
  errors: State['errors'];
  defaultValue?: number;
}) {
  const { errors, defaultValue = '' } = props;
  return (
    <div className="mb-4">
      <label htmlFor="amount" className="mb-2 block text-sm font-medium">
        Choose an amount
      </label>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            defaultValue={defaultValue}
            required
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            placeholder="Enter USD amount"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            aria-describedby="amount-error"
          />
          <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          <FieldError id="amount-error" errors={errors?.amount} />
        </div>
      </div>
    </div>
  );
}
