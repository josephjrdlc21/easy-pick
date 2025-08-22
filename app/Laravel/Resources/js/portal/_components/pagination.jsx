import { Link as Page } from "@inertiajs/react";

export default function Pagination({ links, record }) {

    return (
        <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-800 mb-2 md:mb-0 lg:mb-0">
                Showing <b>{record.from}</b> to <b>{record.to}</b> of <b>{record.total}</b> entries
            </div>

            <nav
                className="flex items-center -space-x-px"
                aria-label="Pagination"
            >
                {links.map((link, idx) => {
                    const label = link.label
                        .replace("&raquo;", "")
                        .replace("&laquo;", "")
                        .trim();

                    // Prev / Next detection
                    const isPrev = idx === 0;
                    const isNext = idx === links.length - 1;

                    // Common classes
                    let baseClasses =
                        "min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-indigo-500 text-gray-800 hover:bg-indigo-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none";

                    // Active page style
                    if (link.active) {
                        baseClasses =
                            "min-h-9.5 min-w-9.5 flex justify-center items-center bg-indigo-500 text-white border border-indigo-500 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-hidden focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none";
                    }

                    // Disabled button (no link)
                    if (!link.url) {
                        return (
                            <span
                                key={idx}
                                className={baseClasses}
                                dangerouslySetInnerHTML={{ __html: label }}
                            />
                        );
                    }

                    // Normal link
                    return (
                        <Page
                            key={idx}
                            href={link.url}
                            className={baseClasses}
                        >
                            {isPrev && (
                                <svg
                                    className="shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                            )}
                            <span
                                className={`${
                                    isPrev || isNext ? "hidden sm:block" : ""
                                }`}
                                dangerouslySetInnerHTML={{ __html: label }}
                            />
                            {isNext && (
                                <svg
                                    className="shrink-0 size-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            )}
                        </Page>
                    );
                })}
            </nav>
        </div>
    );
}
