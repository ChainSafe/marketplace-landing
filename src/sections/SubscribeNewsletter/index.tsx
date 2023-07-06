import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

export default function SubscribeNewsletter() {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "39701769",
    formId: "6edc166e-9a3c-4b26-a733-c4ab149b5275",
    target: "#newsletter-subscribe-input",
  });
  return (
    <div
      className="relative isolate overflow-hidden bg-gray-200"
      id="#integrations"
    >
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Don't miss an update.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-6 text-gray-700">
            Subscribe the Sygma newsletter for the latest features, ecosystem
            news and security updates.
          </p>
          {/* Newsletter subscription input */}
          <div className="mt-4 flex items-center justify-center gap-x-6">
            <div id="newsletter-subscribe-input"></div>
          </div>
        </div>
      </div>
      {/* Gradient */}
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#EE6732" />
            <stop offset={1} stopColor="#F37441" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
