'use client';

import { createInvoice, updateInvoice } from '@/app/lib/actions';
import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import NonFieldError from '@/app/ui/errors/non-field-error';
import FormButtons from '@/app/ui/form-buttons';
import CustomerName from '@/app/ui/invoices/forms/customer-name';
import InvoiceAmount from '@/app/ui/invoices/forms/invoice-amount';
import InvoiceStatusField from '@/app/ui/invoices/forms/invoice-status';
import { useFormState } from 'react-dom';

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createInvoice, initialState);

  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  return (
    <form action={updateInvoiceWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <CustomerName
          customers={customers}
          errors={state.errors}
          defaultValue={invoice.customer_id}
        />

        <InvoiceAmount errors={state.errors} defaultValue={invoice.amount} />

        <InvoiceStatusField
          errors={state.errors}
          defaultValue={invoice.status}
        />

        <NonFieldError message={state.message} />
      </div>
      <FormButtons cancelHref="/dashboard/invoices" submitText="Edit Invoice" />
    </form>
  );
}
