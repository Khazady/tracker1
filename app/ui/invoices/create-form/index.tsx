'use client';

import { createInvoice } from '@/app/lib/actions';
import { CustomerField } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import CustomerName from '@/app/ui/invoices/create-form/customer-name';
import InvoiceAmount from '@/app/ui/invoices/create-form/invoice-amount';
import InvoiceStatusField from '@/app/ui/invoices/create-form/invoice-status';
import Link from 'next/link';
import { useFormState } from 'react-dom';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createInvoice, initialState);
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <CustomerName customers={customers} errors={state.errors} />

        <InvoiceAmount errors={state.errors} />

        <InvoiceStatusField errors={state.errors} />
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}
