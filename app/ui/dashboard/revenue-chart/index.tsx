import { fetchRevenue } from '@/app/lib/data';
import RevenueChartUI from '@/app/ui/dashboard/revenue-chart/revenueChart.ui';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart() {
  const revenue = await fetchRevenue();

  return <RevenueChartUI revenue={revenue} />;
}
