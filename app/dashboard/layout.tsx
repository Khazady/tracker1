import Header from '@/components/header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-col md:flex">
      <Header />
      <div>{children}</div>
    </div>
  );
}
