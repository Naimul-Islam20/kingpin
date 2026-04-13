import Link from "next/link";
import { SERVICE_CONFIG } from "@/components/booking/bookingData";

export default function BookingPage() {
  const services = Object.values(SERVICE_CONFIG);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-black md:text-4xl">Choose a Booking Service</h1>
        <p className="mt-2 max-w-2xl text-sm text-gray-600">
          A simple and consistent booking experience. Select your service to continue.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.key} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#C27D2A]">{service.shortLabel}</p>
              <h2 className="mt-2 text-xl font-semibold text-black">{service.label}</h2>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
              <Link
                href={service.path}
                className="mt-5 inline-flex rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-[#C27D2A]"
              >
                Start Booking
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
