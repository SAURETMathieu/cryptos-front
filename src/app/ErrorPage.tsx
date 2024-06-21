interface ErrorProps {
  statusCode: number;
  message?: string;
}

export default function ErrorPage({ statusCode, message }: ErrorProps) {
  return (
    <main className="min-w-screen flex min-h-screen flex-1 text-center sm:py-4 sm:pl-14">
      <div className="m-auto size-full">
        <h1 className="text-4xl">Error {statusCode}</h1>
        <p className="text-xl">{message}</p>
      </div>
    </main>
  );
}
