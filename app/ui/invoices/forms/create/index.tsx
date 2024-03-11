'use client';

import { createInvoice } from '@/app/lib/actions';
import { CustomerField } from '@/app/lib/definitions';
import NonFieldError from '@/app/ui/errors/non-field-error';
import FormButtons from '@/app/ui/form-buttons';
import CustomerName from '@/app/ui/invoices/forms/customer-name';
import InvoiceAmount from '@/app/ui/invoices/forms/invoice-amount';
import InvoiceStatusField from '@/app/ui/invoices/forms/invoice-status';
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

        <NonFieldError message={state.message} />
      </div>
      <FormButtons
        cancelHref="/dashboard/invoices"
        submitText="Create Invoice"
      />
    </form>
  );
}
