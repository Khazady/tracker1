'use client';

import { State } from '@/app/lib/actions';
import { CustomerField } from '@/app/lib/definitions';
import FieldError from '@/app/ui/errors/field-error';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function CustomerName(props: {
  customers: CustomerField[];
  errors: State['errors'];
  defaultValue?: string;
}) {
  const { customers, errors, defaultValue = '' } = props;
  return (
    <div className="mb-4">
      <label htmlFor="customer" className="mb-2 block text-sm font-medium">
        Choose customer
      </label>
      <div className="relative">
        <select
          required
          id="customer"
          name="customerId"
          className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          defaultValue={defaultValue}
          aria-describedby="customer-error"
        >
          <option value="" disabled>
            Select a customer
          </option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        <FieldError id="customer-error" errors={errors?.customerId} />
      </div>
    </div>
  );
}
