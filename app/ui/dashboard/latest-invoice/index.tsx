import { fetchLatestInvoices } from '@/app/lib/data';
import LatestInvoicesUI from './latest-invoice.ui';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();
  return <LatestInvoicesUI latestInvoices={latestInvoices} />;
}
